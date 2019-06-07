import * as React from 'react';
import LCARS from './LCARS';
import LCARSComponent, { LCARSComponentState } from './LCARSComponent';
import { LCARSComponentProps } from './LCARSComponent'
import './LCARSComponent.css'

interface LCARSButtonProps extends LCARSComponentProps {
}


/**
 * LCARS Button component
 */
class LCARSButton extends LCARSComponent <LCARSButtonProps> {

    public static defaultProps = {
        static: false,
        enabled: true,
        label: "Button",
        x: 0,
        y: 0,
        color: LCARS.EC_ORANGE,
        properties: LCARS.EC_ORANGE | LCARS.ES_LABEL_C,
        height: 1,
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


    constructor(props: LCARSButtonProps) {
        super(props);

        if((props.properties & LCARS.ES_RECT_RND) == 0) {
            this.height = this.height*LCARS.LCARS_BTN_HEIGHT + (this.height-1)*LCARS.LCARS_BTN_SPACING;
        }
        else {
            this.height = LCARS.LCARS_BTN_HEIGHT;
        }
        
        if((this.properties & LCARS.ES_FONT) == LCARS.EF_NORMAL) {
            this.fontSize = LCARS.FONT_BUTTON_SIZE; // the default font for button components
        }

    }

    render() {
         return(super.render());
    }
    
}

export default LCARSButton;
