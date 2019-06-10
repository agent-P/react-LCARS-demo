import * as React from 'react';
import LCARS from './LCARS';
import LCARSComponent, { LCARSComponentState } from './LCARSComponent';
import { LCARSComponentProps } from './LCARSComponent'
import './LCARSComponent.css'

interface LCARSIndicatorProps extends LCARSComponentProps {
}


/**
 * LCARS Indicator component
 */
class LCARSIndicator extends LCARSComponent <LCARSIndicatorProps> {

    public static defaultProps = {
        static: true,
        enabled: false,
        label: "",
        x: 0,
        y: 0,
        color: LCARS.EC_ORANGE,
        properties: LCARS.ES_LABEL_C,
        height: LCARS.LCARS_BTN_HEIGHT,
        width: LCARS.LCARS_BTN_WIDTH,
        scale: "1.0",
        auxLabel: "",
        auxLabelProperties: 0,
        handleClick: null,
        blinking: false,
        blinkingColor: null,
        blinkingDuration: LCARS.BLINK_DURATION_WARNING,
        icon: "",
        iconLocation: LCARS.ES_LABEL_C,
        iconScale: "1.5",
        visible: "visible",
    };


    constructor(props: LCARSIndicatorProps) {
        super(props);
        
        if((this.properties & LCARS.ES_FONT) == LCARS.EF_NORMAL) {
            this.fontSize = LCARS.FONT_BUTTON_SIZE; // the default font for button components
        }

        this.height = this.props.height;

        this.onBlink = this.onBlink.bind(this);
        this.offBlink = this.offBlink.bind(this);
        this.warning = this.warning.bind(this);
        this.error = this.error.bind(this);
        

    }

    componentDidMount() {
        super.componentDidMount();

        var element = document.getElementById(this.props.id)

        if(element) {
            element.addEventListener("warning", e => this.warning(e));
            element.addEventListener("error", e => this.error(e));
        }
        
    }

    render() {
         return(super.render());
    }
   
    getTextAnchor() {
        var labelProperties: number = this.props.properties & LCARS.ES_LABEL;
        if(labelProperties == 0) {
            labelProperties |= LCARS.ES_LABEL_C;
        }
        
        return super.getTextAnchor(labelProperties);
    }
     
    /**
     * Method to blink a visible LCARS component "off" (make invisible) for 0.1 seconds.
     * Used for things like activity indicators.
     */
    offBlink(event: any) {
        if(this.blinkDuration == undefined) {
            this.blinkDuration = 100;
        }
        
        var thisObject = this;
        thisObject.state.enabled = false;
        thisObject.setState({enabled: false})
        setTimeout(function() { thisObject.setState({enabled: true}); }, this.blinkDuration);
    }
    
    
    /**
     * Method to blink an invisible LCARS component "on" (make visible) for 0.1 seconds.
     * Used for things like activity indicators.
     */
    protected onBlink(event: any) {
        if(this.blinkDuration == undefined) {
            this.blinkDuration = 100;
        }
        
        var thisObject = this;
        thisObject.setState({enabled: true});
        setTimeout(function() { thisObject.setState({enabled: false}); }, this.blinkDuration);
    }
      
    protected warning(event: any) {
        var thisObject = this;
        thisObject.setState({enabled: true});
        this.setBlinking(true, LCARS.EC_YELLOW, LCARS.BLINK_DURATION_WARNING);
    }
    
    protected error(event: any) {
        var thisObject = this;
        thisObject.setState({enabled: true});
        this.setBlinking(true, LCARS.EC_RED, LCARS.BLINK_DURATION_ERROR);
    }

    protected blinking(event: any) {
        super.blinking(event);

        var thisObject = this;
        thisObject.state.enabled = false;
        thisObject.setState({enabled: false})
    }
}

export default LCARSIndicator;