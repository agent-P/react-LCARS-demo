import * as React from 'react';
import { Component } from 'react';
import LCARS from './LCARS';
import LCARSText, { LCARSTextProps } from './LCARSText';

interface LCARSCalendarProps {
    width: number;  // width and height must be proportional to the width and height
    height: number; // of the parent container. Defaults: 1920x1200
    x: number;
    y: number;
    scale: string;
    fontSize: number;
    daySpacing: number;
    autoUpdate: boolean;
}

export interface LCARSCalendarState {
    width: number;
    height: number;
    visibleWidth: number;
    visibleHeight: number;
    headerOffset: number;
    now: Date;
    today: number;
    displayMonth: number;
    displayYear: number;
    displayDays: DisplayTextProps[];
    displayMonthString: string;
    displayYearString: string;
    currentMonth: number;
    currentYear: number;
    intervalVariable: number;
}

const MAX_DAYS_IN_MONTH_DISPLAY = 42; /** 6 lines of 7 days */
const FONT_SIZE = LCARS.getLCARSFontSize(LCARS.EF_NORMAL);
const DAY_SPACING = 15;

/**
 * LCARS Base Clock component, for the display and control of time.
 */
class LCARSCalendar<P extends LCARSCalendarProps> extends Component<P> {

    public static defaultProps = {
        fontSize: FONT_SIZE,
        daySpacing: DAY_SPACING,
        autoUpdate: false,
        width: 1920/4,
        height: 1200/4
    };

    state: LCARSCalendarState;
    
    constructor(props: P) {
        super(props);

        let now = new Date();
        let currentMonth = now.getMonth();
        let displayMonthString = LCARS.MONTHS[currentMonth+1];

        let currentYear = now.getFullYear();
        let displayYearString = currentYear.toString();

        let today = now.getDate();

        this.state = {
            width: this.props.width,
            height: this.props.height,
            //visibleWidth: 6 * FONT_SIZE + 6 * DAY_SPACING,
            visibleWidth: 6 * FONT_SIZE * DAY_SPACING / 7,
            visibleHeight: (FONT_SIZE * 2) + (MAX_DAYS_IN_MONTH_DISPLAY/7 * FONT_SIZE * 2),
            headerOffset: this.props.fontSize * 2,
            now: now,
            today: today,
            displayMonth: currentMonth,
            displayYear: currentYear,
            displayDays: [],
            displayMonthString: displayMonthString,
            displayYearString: displayYearString,
            currentMonth: currentMonth,
            currentYear: currentYear,
            intervalVariable: 0,
        };

        //console.log(this.state.width);
        //console.log(this.state.height);
    }

    componentDidMount() {
        this.setToday();
        this.updateCalendar();

        this.startAutoUpdate();
    }

    componentWillUnmount() {
        this.stopAutoUpdate();
    }

    render() {

        const { displayDays } = this.state;

        let startDay = this.dayOfWeek(this.state.displayMonth, 1, this.state.displayYear);
        
        /*
         * Get the number of the days in the display month.
         */
        let daysInMonth = this.getDaysInMonth(this.state.displayMonth, this.state.displayYear);

        
        let yearX = (this.state.visibleWidth-LCARS.getTextWidth3(this.state.displayYearString, this.props.fontSize));
        
        if(displayDays.length > 0) {
            return(
                <svg x={this.props.x} y={this.props.y} width={this.props.scale} height={this.props.scale} viewBox={"0 0 " + this.props.width + " " + this.props.height}>

                     <LCARSText
                        id="monthString"
                        label={this.state.displayMonthString}
                        properties={LCARS.ES_LABEL_W | LCARS.EC_L_BLUE}
                        color={LCARS.EC_L_BLUE}
                        x={0} y={0}
                        static={false}
                    />
                    <LCARSText
                        id="yearString"
                        label={this.state.displayYearString}
                        properties={LCARS.ES_LABEL_W | LCARS.EC_L_BLUE}
                        color={LCARS.EC_L_BLUE}
                        x={yearX + LCARS.getTextWidth3("30", FONT_SIZE)} y={0}
                        static={false}
                    />
                    {
                        displayDays.map(displayDay =>
                            <LCARSText
                                key={displayDay.id}
                                id={displayDay.id}
                                label={displayDay.label}
                                properties={displayDay.properties }
                                color={displayDay.color}
                                x={displayDay.x}
                                y={displayDay.y}
                            />
                        )
                    }

                    {this.props.children}
                </svg>
            );
        } else {
            return null;
        }
    }

    /**
     * This method updates the displayed calendar.
     * <p>
     * It retrieves the appropriate string literals, and formats the standard seven (7) day,
     * four (4) to six (6) week month array based on the starting day of the week for the
     * particular month. The weeks start on Sundays and end on Saturdays. The days are color
     * coded as follows:
     * <ul>
     * <li> Sunday    orange          <code>[EC_ORANGE]</code>
     * <li> Weekday   light blue      <code>[EC_L_BLUE]</code>
     * <li> Saturday  blue            <code>[EC_BLUE]</code>
     * <li> Today     yellow          <code>[EC_YELLOW]</code>
     * </ul>
     */
    updateCalendar() {
        /*
         * Get the starting day of week for the month.
         */
        var startDay = this.dayOfWeek(this.state.displayMonth, 1, this.state.displayYear);
        
        /*
         * Get the number of the days in the display month.
         */
        var daysInMonth = this.getDaysInMonth(this.state.displayMonth, this.state.displayYear);
        
        let displayDays: DisplayTextProps[] = [];

        /*
         * Clear the calendar of text, and fill it with the appropriate days
         * for the display month and the display year.
         */
        for(var i=0; i<MAX_DAYS_IN_MONTH_DISPLAY; i++) {

            let x = i%7 * FONT_SIZE * DAY_SPACING / 7;
            let y = (parseInt((i/7).toString())+1) * FONT_SIZE * 1.5;
            let label = (i+1).toString();
            let properties = LCARS.ES_LABEL_W;
            let color = LCARS.EC_BLUE;

            if(i < startDay || i > startDay+daysInMonth-1) {
                label = "";
            }
            else {
                var day = i-startDay+1;
                label = day.toString();
                
                x += LCARS.getTextWidth3("30", FONT_SIZE) - LCARS.getTextWidth3(label, FONT_SIZE);

                if(this.isWeekday(day)) {
                    color = LCARS.EC_L_BLUE;
                    properties = properties | LCARS.EC_L_BLUE;
                }
                if(this.isSunday(day)) {
                    color = LCARS.EC_ORANGE;
                    properties = properties | LCARS.EC_ORANGE;
                }
                if(this.isSaturday(day)) {
                    color = LCARS.EC_BLUE;
                    properties = properties | LCARS.EC_BLUE;
                }
                
                if(this.isToday(day)) {
                    color = LCARS.EC_YELLOW;
                    properties = properties | LCARS.EC_YELLOW;
                }
            }

            displayDays.push(new DisplayTextProps(label, x, y, properties, color));
        }

        /*
         * Get the strings for the display month and the display year for the calendar header.
         * Update the state of the calendar with current month.
         */
        let displayMonthString = LCARS.MONTHS[this.state.displayMonth+1];
        let displayYearString = this.state.displayYear.toString();
        this.setState({
            displayMonthString: displayMonthString,
            displayYearString: displayYearString,
            displayDays: displayDays
        });
    }
        
        
    /**
     * This method is run once a second to detect the day roll-over. So, the calendar can
     * be automatically updated. When the roll-over is detected, the new day is set as "today",
     * and the display is updated.
     */
    update() {
        /* Get the current date. */
        var rightNow = new Date();
        
        /*
            * Compare the current date (year, month, and day of month) to the date stored by
            * the <code>setToday()</code> method. If they are not the same, set the new today,
            * and update the displayed calendar.
            */
        if(!(rightNow.getFullYear() == this.state.now.getFullYear()) ||
            !(rightNow.getMonth() == this.state.now.getMonth()) ||
            !(rightNow.getDate() == this.state.now.getDate())) {
            //alert("now: " + this.now.getYear() + ", " + this.now.getMonth() + ", " + this.now.getDate() +
            //      "  right now: " + rightNow.getYear() + ", " + rightNow.getMonth() + ", " + rightNow.getDate());
            this.setToday();

            let displayMonth = this.state.currentMonth;
            let displayYear = this.state.currentYear;
            let displayMonthString = LCARS.MONTHS[displayMonth+1];
            let displayYearString = displayYear.toString();
    
            this.setState({
                displayMonth: displayMonth,
                displayYear: displayYear,
                displayMonthString,
                displayYearString
            });
        }
    }
    
    
    /**
     * Function to start the auto update of the calendar. It retrieves a reference
     * to the calendar object, and passes it to an interval timer. The update interval
     * is fixed to one second.
     */
    startAutoUpdate() {
        var thisObj = this; // Can't just pass "this" to the setInterval function.
        
        let intervalVariable = setInterval( (function(thisObj) { return function() { thisObj.update(); } })(this), 1000); // Update is fixed to one second.
        this.setState({
            intervalVariable: intervalVariable
        });
    }
    
    /**
     * Function to stop the auto update of the calendar. It test the interval variable,
     * and if it is not null, it clears it.
     */
    stopAutoUpdate() {
        if(!(this.state.intervalVariable == null)) {
            clearInterval(this.state.intervalVariable);
        }
    }
    
    
    /**
     * Function to clear the calendar day SVG elements of text.
     * <p>
     * A convenience function for clearing the day elements of text. The SVG text of each
     * element is set to an empty string. Not really necessary, since the method that updates
     * the calendar array of days resets the text of the entire array.
     */
    clearCalendarText() {
        
        let displayDays: DisplayTextProps[] = this.state.displayDays;
        for(var i=0; i<MAX_DAYS_IN_MONTH_DISPLAY; i++) {
            displayDays[i] = new DisplayTextProps("", 0, 0, LCARS.ES_NONE);
        }

        this.setState({
            displayDays: displayDays
        })
    }        
        
        
    /**
     * Set the calendar object's date to today's date.
     */
    setToday() {
        /* Get the current date and time. */
        let now = new Date();
        
        /* Set the object's <code>today</code> attribute to the current date.            
            Set the object's current month and year from the current date/time.
            Add 1900 to the current year to get a valid four digit year. Note: javascript
            counts years from 1900 (a Y2K thing). */
        this.setState({
            now: now,
            today: now.getDate(),
            currentMonth: now.getMonth(),
            currentYear: now.getFullYear() + 1900
        });

    }
    
    
    /**
     * Returns <code>true</code> if the year is a four (4) digit year.
     *
     * @param year the year as a number
     */
    isFourDigitYear(year: number) {
        
        /** First, check to make sure the argument is a number. If not, return <code>false</code>. */
        if(isNaN(year)) {
            return false;
        }
        /** If it is a number, check the length. If length is 4, return <code>true</code>,
         else <code>false</code>. */
        else if(year.toString().length == 4) {
            return true;
        }
        else {
            return false;
        }
    }
    
    
    /**
     * Decrement the year for the displayed calendar month.
     */
    decrementYear() {
        let year  = this.state.displayYear - 1;
        if (this.isFourDigitYear(year)) {
            this.setState({
                displayYear: year
            })
        }
    }
    
    
    /**
     * Decrement the month for the displayed calendar.
     */
    decrementMonth() {
        let month  = this.state.displayMonth - 1;
        if (month < 0) {
            month = 11;
        }
        this.setState({
            displayMonth: month
        });
    }
    
    
    /**
     * Increment the year for the displayed calendar month.
     */
    incrementYear() {
        let year  = this.state.displayYear + 1;
        if (this.isFourDigitYear(year)) {
            this.setState({
                displayYear: year
            })
        }
        else {
            alert("displayYear + 1: " + year + "  is not a 4 digit year.");
        }
    }
    
    
    /**
     * Increment the month for the displayed calendar.
     */
    incrementMonth() {
        let month  = this.state.displayMonth + 1;
        if (month > 11) {
            month = 0;
        }
        this.setState({
            displayMonth: month
        })
    }
    
    
    /**
     * Returns true if the argument specified four digit year is a leap year.
     *
     * @param year the four digit year
     * @return  true if the given year is a leap year, false, if not
     */
    isLeapYear(year: number) {
        /*
            * If the current year is evenly divisible by 4 and not by 100, return true.
            */
        if((year % 4 == 0) && (year % 100 != 0)) {
            return true;
        }
        
        /*
            * If the current year is evenly divisible by 400, return true.
            */
        if(year % 400 == 0) {
            return true;
        }
        
        /*
            * If none of the leap year conditions is met, method falls through,
            * and returns false.
            */
        return false;
    }
    
    
    /**
     * Returns the day of the week according to the Gregorian calendar, given
     * the <code>month</code>, <code>day</code>, and <code>year</code>.
     * January through December equal 0 - 11, and Sunday through Saturday equal
     * 0 - 6.
     * @param month  the month of the date
     * @param day  the day of the date
     * @param year  the year of the date
     * @return  the day of the week according to the Gregorian calendar
     */
    dayOfWeek(month: number, day: number, year: number) {
        
        var date = new Date(year, month, day);
        
        return date.getDay();
    }
    
    
    /**
     * Returns <code>true</code> if the day of the week integer argument is greater
     * than Sunday (0) and less than Saturday (6).
     * <ul>
     * <li>Sunday = 0</li>
     * <li>Monday = 1</li>
     * <li>Tuesday = 2</li>
     * <li>Wednesday = 3</li>
     * <li>Thursday = 4</li>
     * <li>Friday = 5</li>
     * <li>Saturday = 6</li>
     * </ul>
     *
     * @param day an integer between 1 and 5 inclusive to return <code>true</code>, else <code>false</code>
     * @return <code>true</code> if weekday (Mon - Fri), <code>false</code> if not
     */
    isWeekday(day: number) {
        let _day = this.dayOfWeek(this.state.displayMonth, day, this.state.displayYear);
        
        if(_day > 0 && _day < 6) {
            return true;
        }
        else {
            return false;
        }
    }
    
    
    /**
     * Returns <code>true</code> if the <code>day</code> argument indicates a Sunday, an integer 0.
     *
     * @param day an integer value for the day
     * @return <code>true</code> if Sunday, <code>false</code> if not
     */
    isSunday(day: number) {
        
        var date = new Date(this.state.displayYear, this.state.displayMonth, day);
        
        var _day = date.getDay();
        
        if(_day == 0) {
            return true;
        }
        else {
            return false;
        }
    }
    
    
    /**
     * Returns <code>true</code> if the <code>day</code> argument indicates a Saturday, an integer 6.
     *
     * @param day an integer value for the day
     * @return <code>true</code> if Saturday, <code>false</code> if not
     */
    isSaturday(day: number) {
        var _day = this.dayOfWeek(this.state.displayMonth, day, this.state.displayYear);
        
        if(_day == 6) {
            return true;
        }
        else {
            return false;
        }
    }
    
    
    /**
     * Returns <code>true</code> if the <code>day</code> argument indicates the current day.
     *
     * @param day an integer value for the day
     * @return <code>true</code> if today, <code>false</code> if not
     */
    isToday(day: number) {        
        if(this.state.displayYear == this.state.currentYear && this.state.displayMonth == this.state.currentMonth && day == this.state.today) {
            return true;
        }
        else {
            return false;
        }
    }
    
    
    /**
     * Returns the number of days in the argument specified month and year.
     *
     * @param month  the integer (0 - 11) identifier of the month
     * @param year  the four digit year
     */
    getDaysInMonth(month: number, year: number) {
        var days = 31;
        
        if(month == 3 || month == 5 || month == 8 || month == 10) {
            days = 30;
        }
        else if(month == 1 ) {
            if(this.isLeapYear(year)) {
                days = 29;
            }
            else {
                days = 28;
            }
        }
        return days;
    }
    
}

export default LCARSCalendar;

class DisplayTextProps {
    id: string;
    label: string;
    x: number;
    y: number;
    properties: number;
    color: number | undefined;

    constructor(label: string, x: number, y: number, properties: number, color?: number) {
        this.id = "day_" + label;
        this.label = label;
        this.x = x;
        this.y = y;
        this.properties = properties;
        this.color = color;
    }

}