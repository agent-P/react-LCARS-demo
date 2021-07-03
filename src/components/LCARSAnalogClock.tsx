import * as React from 'react';
import { Component } from 'react';
import LCARS from './LCARS';
import { LCARSComponentProps, LCARSComponentState } from './LCARSComponent';
import LCARSText from './LCARSText';

interface LCARSAnalogClockProps extends LCARSComponentProps {
    handsColor: number;
    faceNumbersColor: number;
    x: number;
    y: number;
    scale: string;
    radius: number;
}

export interface LCARSAnalogClockState extends LCARSComponentState {
    handsColor: any;
    faceNumbersColor: any;
    visible: string;
    enabled: boolean;
    timeoutVariable: number | null;
    centerX: number;
    centerY: number;
    faceCenterX: number;
    faceCenterY: number;
    xOffset: number;
    yOffset: number;
    angleIncrement: number;
    rotateSecond: string; 
    rotateMinute: string; 
    rotateHour: string;
    hourNumbers: HourNumbersTextProps[];
}

/**
 * LCARS Analog Clock face with hands component, for the display and control of time.
 */
class LCARSAnalogClock extends Component<LCARSAnalogClockProps> {

    public static defaultProps = {
        static: true,
        enabled: true,
        label: "NO CLOCK",
        x: 0,
        y: 0,
        color: LCARS.EC_ORANGE,
        handsColor: LCARS.EC_ORANGE,
        faceNumbersColor: LCARS.EC_ORANGE,
        properties: LCARS.EC_ORANGE,
        height: 50,
        width: 50,
        scale: "100%",
        auxLabel: "",
        auxLabelProperties: 0,
        handleClick: null,
        blinking: false,
        blinkingColor: null,
        blinkingDuration: LCARS.BLINK_DURATION_WARNING,
        icon: "",
        iconLocation: LCARS.ES_LABEL_C,
        iconScale: "1.0",
        visible: "visible",
        interval: 1000,
        format: "hh:mm:ss",
        fontSizeOverride: 1.0,
        alignment: 'left',
        radius: 100,
    };

    state: LCARSAnalogClockState;


    constructor(props: LCARSAnalogClockProps) {
        super(props);

        let xOffset: number = this.props.radius/35;
        let yOffset: number = this.props.radius/10;
        let faceCenterX: number = this.props.radius + xOffset;
        let faceCenterY: number = this.props.radius + yOffset;

        this.state = {
            color: LCARS.EC_ORANGE,
            handsColor: LCARS.getColor(this.props.handsColor),
            faceNumbersColor: this.props.faceNumbersColor,
            visible: this.props.visible,
            enabled: this.props.enabled,
            timeoutVariable: null,
            centerX: this.props.radius,
            centerY: this.props.radius,
            faceCenterX: faceCenterX,
            faceCenterY: faceCenterY,
            xOffset: xOffset,
            yOffset: yOffset,
            angleIncrement: 360/12,
            rotateSecond: 'rotate(0 ' + faceCenterX + ' ' + faceCenterY + ')',
            rotateMinute: 'rotate(0 ' + faceCenterX + ' ' + faceCenterY + ')',
            rotateHour: 'rotate(0 ' + faceCenterX + ' ' + faceCenterY + ')',
            hourNumbers: []
        }

        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.update = this.update.bind(this);
    }

    componentDidMount() {
        this.drawClockFace();
        this.start();
    }

    componentWillUnmount() {
        this.stop();
    }


    drawClockFace() {
        
        const { centerX, centerY, xOffset, yOffset, angleIncrement, faceNumbersColor } = this.state;

        let hourNumbers: HourNumbersTextProps[] = [];
                        
        for(var i=12; i>=1; i--) {
            
            let adjustedOffsetX = 0;
            if(i >= 10) {
                adjustedOffsetX = xOffset;
            }
            
            /* Create the hour text object and add it to the array. */
            let x = centerX + this.props.radius * Math.cos(((angleIncrement * i) - 90) * (Math.PI/180)) - adjustedOffsetX;
            let y = centerY + this.props.radius * Math.sin(((angleIncrement * i) - 90) * (Math.PI/180));
            let clockHourText = new HourNumbersTextProps("hour_" + i.toString(), i.toString(), x, y, faceNumbersColor);
            
            hourNumbers.push(clockHourText);
        }

        /* Set the numbers in the object state. */
        this.setState({
            hourNumbers: hourNumbers
        });
        
    }

     /**
     * Function to start the clock. It retrieves a reference to the clock object,
     * and passes it to an interval timer. The update interval is a class
     * variable, and is passed to the constructor of the object.
     */
    start() {
        this.update();
    }
    
    
    /**
     * Function to stop the clock. It test the interval variable, and if it is not
     * null, it clears it.
     */
    stop() {
        if(!(this.state.timeoutVariable == null)) {
            clearTimeout(this.state.timeoutVariable);
        }
    }
    
    
    /**
     * Function to update the clock with the current time. It gets passed to an
     * interval timer and will update the time and date at the rate set by the
     * interval variable.
     */
    update() {
        
        /* Update to the current date and time. */
        var now = new Date();
        
        /* Calculate the angles in degrees for the secons, minutes, and hours hands. */
        var secondsDegrees = 6*now.getSeconds();
        var minuteDegrees = 6*now.getMinutes();
        var hourDegrees = 30*(now.getHours()%12) + now.getMinutes()/2;
        
        let rotateSecond = 'rotate(' + secondsDegrees + ' ' + this.state.faceCenterX + ' ' + this.state.faceCenterY + ')';
        let rotateMinute = 'rotate(' + minuteDegrees + ' ' + this.state.faceCenterX + ' ' + this.state.faceCenterY + ')';
        let rotateHour = 'rotate(' + hourDegrees + ' ' + this.state.faceCenterX + ' ' + this.state.faceCenterY + ')';
        
        var thisObj = this; // Can't just pass "this" to the setInterval function.
        var milliseconds = now.getMilliseconds();
        var newTimeout = 1000 - milliseconds;
        let timeoutVariable = setTimeout((function(thisObj) { return function() { thisObj.update(); } })(this), newTimeout);

        this.setState({
            rotateSecond: rotateSecond,
            rotateMinute: rotateMinute,
            rotateHour: rotateHour,
            timeoutVariable: timeoutVariable
        })
    }
    
       

    render() {
        const { faceCenterX, faceCenterY, handsColor, xOffset, yOffset, rotateSecond, rotateMinute, rotateHour, hourNumbers, faceNumbersColor } = this.state;
        
        return(
            <svg x={this.props.x} y={this.props.y} width={this.props.scale} height={this.props.scale} viewBox={"0 0 " + this.props.width + " " + this.props.height}>

                <svg>
                    <line
                        x1={faceCenterX} x2={faceCenterX}
                        y1={faceCenterY} y2={this.props.radius * 0.5 + yOffset}
                        stroke={handsColor} strokeWidth={this.props.radius / 10} strokeLinecap={'round'}
                        transform={rotateHour}
                    />
                </svg>

                <svg>
                    <line
                        x1={faceCenterX} x2={faceCenterX}
                        y1={faceCenterY} y2={this.props.radius * 0.25 + yOffset}
                        stroke={handsColor} strokeWidth={this.props.radius / 20} strokeLinecap={'round'}
                        transform={rotateMinute}
                    />
                </svg>

                <svg>
                    <line
                        x1={faceCenterX} x2={faceCenterX}
                        y1={faceCenterY} y2={this.props.radius * 0.15 + yOffset}
                        stroke={handsColor} strokeWidth={this.props.radius / 40} strokeLinecap={'round'}
                        transform={rotateSecond}
                    />
                </svg>

                {
                    hourNumbers.map(hourNumber =>
                        <LCARSText 
                        id={hourNumber.id} label={hourNumber.label}
                        color={faceNumbersColor}
                        x={hourNumber.x}
                        y={hourNumber.y}
                    />
                    )
                }

                {this.props.children}
            </svg>
        );
    }
}

export default LCARSAnalogClock;

class HourNumbersTextProps {
    id: string;
    label: string;
    x: number;
    y: number;
    color: number;

    constructor(id: string, label: string, x: number, y: number, color: number) {
        this.id = "face_number_" + label;
        this.label = label;
        this.x = x;
        this.y = y;
        this.color = color;
    }
}