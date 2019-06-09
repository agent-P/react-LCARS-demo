import * as React from 'react';
import LCARS from './LCARS';
import LCARSComponent, { LCARSComponentState } from './LCARSComponent';
import { LCARSComponentProps } from './LCARSComponent'
import './LCARSComponent.css'

interface LCARSCornerProps extends LCARSComponentProps {
}


/**
 * LCARS Corner component, for framing areas of the display.
 */
class LCARSCorner extends LCARSComponent <LCARSCornerProps> {

    public static defaultProps = {
        static: true,
        enabled: true,
        label: "",
        x: 0,
        y: 0,
        color: LCARS.EC_ORANGE,
        properties: LCARS.EC_ORANGE,
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
        iconScale: "1.0",
        visible: "visible",
    };

    protected shape: number;

    constructor(props: LCARSCornerProps) {
        super(props);

        this.width = this.props.width;
        this.height = LCARS.LCARS_CORNER_HEIGHT + (((this.props.height-1)<0)?0:(this.props.height-1))*LCARS.LCARS_BTN_HEIGHT + (((this.props.height-1)<0)?0:(this.props.height-1))*LCARS.LCARS_BTN_SPACING;
        this.properties = this.props.properties;
        this.shape = this.properties & LCARS.ES_SHAPE;
        
        if((this.properties & LCARS.ES_FONT) == LCARS.EF_NORMAL) {
            this.fontSize = LCARS.FONT_BUTTON_SIZE; // the default font for corner components
        }
    }

    render() {
         return(super.render());
    }


    getShape() {
        var pathString = "M1,1";
        var armStringW = (this.width-185) + ",0 l0,30 l-" + (this.width-185);
        var armStringE = (this.width-185) + ",0 l0,-30 l" + (this.width-185);
        var sideStringT = " l0," + (this.height - LCARS.LCARS_CORNER_HEIGHT) + " l-150,0 l0,-" + (this.height - LCARS.LCARS_CORNER_HEIGHT);
        var sideStringB = " l0,-" + (this.height - LCARS.LCARS_CORNER_HEIGHT) + " l150,0 l0," + (this.height - LCARS.LCARS_CORNER_HEIGHT);
        
        if(this.shape == LCARS.ES_SHAPE_NW) {
            pathString += " m150," + LCARS.LCARS_CORNER_HEIGHT +
            sideStringT + " l0,-17 q0,-75 75,-75 l110,0 l" +
            armStringW +
            ",0 q-35,0 -35,35 l0,27";
        }
        else if(this.shape == LCARS.ES_SHAPE_SW) {
            pathString += " m0," + (this.height - LCARS.LCARS_CORNER_HEIGHT) +
            sideStringB + "l0,27 q0,35 35,35 l" +
            armStringW +
            ",0 l-110,0 q-75,0 -75,-75 l0,-17";
        }
        else if(this.shape == LCARS.ES_SHAPE_SE) {
            pathString += " m" + (this.width-150) + "," + (this.height - LCARS.LCARS_CORNER_HEIGHT) +
            sideStringB + " l0,17 q0,75 -75,75 l-110,0 l-" +
            armStringE + ",0 q35,0 35,-35 l0,-27";
        }
        else if(this.shape == LCARS.ES_SHAPE_NE) {
            pathString += " m" + (this.width-185) + ",0 l110,0 q75,0 75,75 l0,17" +
            sideStringT + " l0,-27 q0,-35 -35,-35 l-" +
            armStringE + ",0";
        }
     
        return pathString;
    }
    
        
    getTextX() {
        var x: number = 0;
        
        switch(this.properties & LCARS.ES_SHAPE) {
            case LCARS.ES_SHAPE_SE:
                x = this.width - 140;
                break;
            case LCARS.ES_SHAPE_SW:
                x = 140;
                break;
            case LCARS.ES_SHAPE_NW:
                x = 140;
                break;
            case LCARS.ES_SHAPE_NE:
                x = this.width - 140;
                break;
        }
        
        return x;
    }
    
    
    getTextY() {
        var y: number = 0;;
        
        switch(this.properties & LCARS.ES_SHAPE) {
            case LCARS.ES_SHAPE_SE:
                y = this.fontSize;
                break;
            case LCARS.ES_SHAPE_SW:
                y = this.fontSize;
                break;
            case LCARS.ES_SHAPE_NW:
                y = this.height - 10;
                break;
            case LCARS.ES_SHAPE_NE:
                y = this.height - 10;
                break;
        }
        
        return y;
    }
    
    
    getTextAnchor() {
        var textAnchor = "";
        
        switch(this.properties & LCARS.ES_SHAPE) {
            case LCARS.ES_SHAPE_SE:
                textAnchor = "start";
                break;
            case LCARS.ES_SHAPE_SW:
                textAnchor = "end";
                break;
            case LCARS.ES_SHAPE_NW:
                textAnchor = "end";
                break;
            case LCARS.ES_SHAPE_NE:
                textAnchor = "start";
                break;
        }
        
        return textAnchor;
    }
    
    
}

export default LCARSCorner;
