import * as React from 'react';
import LCARS from './LCARS';
import LCARSComponent, { LCARSComponentState } from './LCARSComponent';
import { LCARSComponentProps } from './LCARSComponent'
import './LCARSComponent.css'

interface LCARSTextProps extends LCARSComponentProps {
}


/**
 * LCARS Text component
 */
class LCARSText extends LCARSComponent <LCARSTextProps> {

    public static defaultProps = {
        static: false,
        enabled: true,
        label: "Text",
        x: 0,
        y: 0,
        color: LCARS.EC_ORANGE,
        properties: LCARS.ES_NONE,
        height: 0,
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


    constructor(props: LCARSTextProps) {
        super(props);
        
        this.height = this.fontSize;
        this.width = LCARS.getTextWidth3(this.props.label, this.fontSize);

        this.textColor = this.getColor();

        // console.log(this.props.label);
        // console.log("font size: " + this.fontSize);
        // console.log("height: " + this.height);
        // console.log("width: " + this.width);
        // console.log("text x: " + this.getTextX());
        // console.log("text y: " + this.getTextY());
        // console.log("x: " + this.props.x);
        // console.log("y: " + this.props.y);
        // console.log("text width: " + this.props.width);
        // console.log("text height: " + this.props.height);
        

    }

    render() {
         return(super.render());
    }


    getShape() {
        return "";
    }
    
    
    getTextAnchor() {
        var labelProperties: number = this.props.properties & LCARS.ES_LABEL;
        if(labelProperties == 0) {
            labelProperties |= LCARS.ES_LABEL_W;
        }
        
        return super.getTextAnchor(labelProperties);
    }
    
    getTextX() {
        return 0;
    }

    getTextY() {
        /**
         * Center the text within the component, and make sure that characters that
         * extend below the line are not clipped.
         */
        return this.fontSize * 0.88;
    }
       
 
}

export default LCARSText;
