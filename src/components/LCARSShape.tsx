import * as React from 'react';
import LCARS from './LCARS';
import LCARSComponent, { LCARSComponentState } from './LCARSComponent';
import { LCARSComponentProps } from './LCARSComponent'
import './LCARSComponent.css'

interface LCARSShapeProps extends LCARSComponentProps {
    path: string;
}


/**
 * LCARS Icon component, for the display and control of Icons.
 */
class LCARSShape extends LCARSComponent <LCARSShapeProps> {

    public static defaultProps = {
        static: true,
        enabled: true,
        label: "",
        x: 0,
        y: 0,
        color: LCARS.EC_ORANGE,
        properties: LCARS.EC_ORANGE,
        height: 50,
        width: 50,
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
        path: ""
    };

    constructor(props: LCARSShapeProps) {
        super(props);

        this.properties = this.props.properties;
        
        if((this.properties & LCARS.ES_FONT) == LCARS.EF_NORMAL) {
            this.fontSize = LCARS.FONT_BUTTON_SIZE;
        }
    }

    render() {
         return(super.render());
    }

    getShape() {
        return this.props.path;
    }

    getIconShape() {
        return "";
    }


    protected getClassName(_static: any, enabled: any) {
        var className = "svgIcon ";
        if(_static) {
             className += "static ";
        }
        if(!enabled) {
            className += "svgDisabled ";
        }

        return className;
    }
 
}

export default LCARSShape;