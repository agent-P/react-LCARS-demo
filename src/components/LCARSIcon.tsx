import * as React from 'react';
import LCARS from './LCARS';
import LCARSComponent, { LCARSComponentState } from './LCARSComponent';
import { LCARSComponentProps } from './LCARSComponent'
import './LCARSComponent.css'

interface LCARSIconProps extends LCARSComponentProps {
}


/**
 * LCARS Icon component, for the display and control of Icons.
 */
class LCARSIcon extends LCARSComponent <LCARSIconProps> {

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
        scale: "2.0",
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
        fontSizeOverride: 1.0
    };

    constructor(props: LCARSIconProps) {
        super(props);

        this.properties = this.props.properties;
        
        if((this.properties & LCARS.ES_FONT) == LCARS.EF_NORMAL) {
            this.fontSize = LCARS.FONT_BUTTON_SIZE; // the default font for corner components
        }

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


    render() {
         return(super.render());
    }

    getShape() {
        return this.props.icon;
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

export default LCARSIcon;