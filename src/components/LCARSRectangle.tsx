import * as React from 'react';
import LCARS from './LCARS';
import LCARSComponent, { LCARSComponentState } from './LCARSComponent';
import { LCARSComponentProps } from './LCARSComponent'
import './LCARSComponent.css'

interface LCARSRectangleProps extends LCARSComponentProps {
}


/**
 * LCARS Rectangle component
 */
class LCARSRectangle extends LCARSComponent <LCARSRectangleProps> {

    public static defaultProps = {
        static: true,
        enabled: true,
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
        fontSizeOverride: 1.0
    };


    constructor(props: LCARSRectangleProps) {
        super(props);
        
        if((this.properties & LCARS.ES_FONT) == LCARS.EF_NORMAL) {
            this.fontSize = LCARS.FONT_BUTTON_SIZE; // the default font for button components
        }

        this.height = this.props.height;
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
     
    
}

export default LCARSRectangle;
