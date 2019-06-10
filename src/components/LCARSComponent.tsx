import React, { Component } from "react";
import LCARS from './LCARS'
import './LCARSComponent.css'

export interface LCARSComponentProps {
    id: string;
    static: boolean;
    enabled: boolean;
    label: string;
    x: number;
    y: number;
    width: number;
    height: number;
    scale: string;
    color: number;
    properties: number;
    handleClick: any;
    auxLabel: string;
    auxLabelProperties: number;
    blinking: boolean;
    blinkingColor: number;
    blinkingDuration: string;
    icon: string;
    iconLocation: number;
    iconScale: string;
    visible: string;
}

export interface LCARSComponentState {
    color: any;
    visible: string;
    enabled: boolean;
}

class LCARSComponent<P extends LCARSComponentProps> extends Component<P> {

    public static defaultProps = {
        static: true,
        enabled: true,
        label: "",
        x: 0,
        y: 0,
        width: 0,
        height: LCARS.LCARS_BTN_HEIGHT,
        scale: "1.0",
        handleClick: null,
        auxLabel: "",
        auxLabelProperties: 0,
        blinking: false,
        blinkingColor: null,
        blinkingDuration: LCARS.BLINK_DURATION_WARNING,
        icon: "",
        iconLocation: LCARS.ES_LABEL_C,
        iconScale: "1.5",
        visible: "visible",
    };

    protected height: number;
    protected width: number;
    protected scale: string;
    protected properties: number;
    protected color: any;
    protected overColor: string;
    protected downColor: string;
    protected textColor: string;
    protected textAnchor: string;
    protected fontSize: number;
    protected element: any;
    protected shapeElement: any;
    protected textElement: any;
    protected animateElement: any;
    protected animateElementFadeIn: any;
    protected animateElementFadeOut: any;
    protected duration: string;
    protected textAnimateElement: any;
    protected iconElement: any;
    protected iconScale: string;
    protected iconTranslate: string;
    protected iconTransform: string;
    protected visible: string;
    protected blinkDuration: number;
    

    state: LCARSComponentState;


    constructor(props: P) {
        super(props);
    
        this.height = this.props.height;
        this.width = this.props.width;
        this.scale = this.props.scale;
        this.properties = props.properties;
        this.color = this.getColor();
        this.overColor = this.getOverColor(null);
        this.downColor = this.getDownColor(null);
        this.textColor = this.getTextColor();
        this.textAnchor = this.getTextAnchor(this.props.properties);
        this.fontSize = LCARS.getLCARSFontSize(this.props.properties);
        this.animateElementFadeIn = null;
        this.animateElementFadeOut = null;
        this.duration = "";
        this.iconScale = this.props.iconScale;
        this.iconTranslate = "";
        this.iconTransform = "";
        this.blinkDuration = 100;

        this.visible = this.props.visible;

        this.state = {
            color: this.color,
            visible: this.props.visible,
            enabled: this.props.enabled
        };

        this.setIconPosition(this.props.iconLocation);
        
        /** the DOM object for shape animation, and set its attributes. */
        this.animateElement = document.createElementNS(LCARS.svgNS, "animate");
        this.animateElement.setAttribute("id", this.props.id + "_shapeAnimate");
        this.animateElement.setAttribute("attributeType", "XML");
        this.animateElement.setAttribute("attributeName", "fill");
        
        /** the DOM object for the shape's text animation, and set its attributes. */
        this.textAnimateElement = document.createElementNS(LCARS.svgNS, "animate");
        this.textAnimateElement.setAttribute("id", this.props.id + "_textAnimate");
        this.textAnimateElement.setAttribute("attributeType", "XML");
        this.textAnimateElement.setAttribute("attributeName", "fill");
        this.textAnimateElement.setAttribute("repeatCount", "indefinite");
        

        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);

        this.onBlink = this.onBlink.bind(this);
        this.offBlink = this.offBlink.bind(this);
        this.blinking = this.blinking.bind(this);
        this.fadeOut = this.fadeOut.bind(this);
        this.fadeIn = this.fadeIn.bind(this);
    }

    componentDidMount() {
        var element = document.getElementById(this.props.id)

        console.log(element);
        
        if(element) {
            element.addEventListener("onBlink", e => this.onBlink(e));
            element.addEventListener("offBlink", e => this.offBlink(e));
            element.addEventListener("blinking", e => this.blinking(e));
            element.addEventListener("fadeOut", e => this.fadeOut(e));
            element.addEventListener("fadeIn", e => this.fadeIn(e));
        }
    }

    componentWillUnmount() {

    }

    render() {
        //console.log("rendering: " + this.props.id);
        //console.log("visibility: " + this.state.visible);
        //console.log(this.getPosition(this.props.x, this.props.y));
        return(
           <svg className={this.getClassName(this.props.static, this.state.enabled)}
               id={this.props.id}
               height={this.height+2} 
               width={this.width+2} 
               fill={this.state.color}
               onMouseOver={this.handleMouseOver}
               onMouseOut={this.handleMouseOut}
               onMouseDown={this.handleMouseDown}
               onMouseUp={this.handleMouseOut}
               onTouchStart={this.handleMouseDown}
               onTouchEnd={this.handleMouseOut}
               onClick={this.props.handleClick}
               visibility={this.state.visible}
               x={this.props.x}
               y={this.props.y}
           >
                <path 
                    id={this.props.id + LCARS.SHAPE_SUFFIX} 
                    d={this.getShape()} 
                    stroke={this.state.color}
                    transform={" scale(" + this.scale + ") "}
                    />
                <text
                    id={this.props.id + LCARS.TEXT_SUFFIX}
                    className="svgText"
                    x={this.getTextX()} 
                    y={this.getTextY()} 
                    fill={this.textColor}
                    textAnchor={this.textAnchor}
                    fontSize={this.fontSize}
                >
                   {this.props.label}
                </text>
                <text
                    id={this.props.id + LCARS.AUX_TEXT_SUFFIX}
                    className="svgText"
                    x={this.getAuxTextX()}
                    y={this.getAuxTextY()}
                    fill={LCARS.getColor(this.props.auxLabelProperties & LCARS.ES_COLOR)}
                    textAnchor={this.getAuxTextAnchor()}
                    fontSize={this.getAuxLabelFontSize()}
                >
                   {this.props.auxLabel}
                </text>
                <path
                    id={this.props.id + LCARS.ICON_SUFFIX}
                    d={this.getIconShape()}
                    x={20}
                    y={20}
                    fill={this.textColor}
                    transform={this.getIconPosition()}
                    />
            </svg>
        );
    }

    protected getClassName(_static: any, enabled: any) {
       var className = "svg ";
       if(_static) {
            className += "static ";
       }
       if(!enabled) {
           className += "disabled ";
       }

       return className;
    }

    getColor() {
        return LCARS.getColor(this.props.color);
    }

    
    getTextColor() {
        switch(this.props.color) {
            case LCARS.EC_BLUE:
            case LCARS.EC_D_BLUE:
            case LCARS.EC_RED:
                return "#CCDDFF";
            case LCARS.EC_WHITE:
            case LCARS.EC_YELLOW:
            case LCARS.EC_ORANGE:
            case LCARS.EC_L_BLUE:
            case LCARS.EC_M_BLUE:
            default:
                return "#000000";
        }
    }

    
    getOverColor(overrideColor: any) {
        var defaultReturn = "";
        var color;
        
        if(overrideColor == null) {
            color = this.props.color;
        }
        else {
            color = overrideColor;
        }
        
        switch(color) {
            case LCARS.EC_WHITE:
                return "#FFFFFF";
            case LCARS.EC_L_BLUE:
                return "#77ADFF";
            case LCARS.EC_M_BLUE:
                return "#5C85FF";
            case LCARS.EC_BLUE:
                return "#3341F1";
            case LCARS.EC_D_BLUE:
                return "#3333A0";
            case LCARS.EC_YELLOW:
                return "#D6B533";
            case LCARS.EC_ORANGE:
                return "#D68533";
            case LCARS.EC_RED:
                return "#B53333";
            default:
                break;
        }
        
        return defaultReturn;
    }
    
    
    getDownColor (overrideColor: any) {
        var defaultReturn = "";
        var color;
        
        if(overrideColor == null) {
            color = this.props.color;
        }
        else {
            color = overrideColor;
        }
        
        switch(color) {
            case LCARS.EC_WHITE:
                return "#B8C7E6";
            case LCARS.EC_L_BLUE:
                return "#447ACC";
            case LCARS.EC_M_BLUE:
                return "#2952CC";
            case LCARS.EC_BLUE:
                return "#000EBE";
            case LCARS.EC_D_BLUE:
                return "#00006D";
            case LCARS.EC_YELLOW:
                return "#A38200";
            case LCARS.EC_ORANGE:
                return "#A35200";
            case LCARS.EC_RED:
                return "#820000";
            default:
                break;
        }
        
        return defaultReturn;
    }


    /**
     * Method to create a string of color values from dark to light derived from the
     * LCARS color palette. I uses the Down color, the normal color, and the Over
     * color in that order.
     *
     * @param color the color to derive the string of colors from
     * @return the string of color values
     */
    getBlinkColors(color: any) {
        
        if(color == null) {
            color = this.props.color;
        }
        
        var colorString = "#000;" + this.getDownColor(color) + ";" + LCARS.getColor(color) + ";" + this.getOverColor(color);
        
        return colorString;
    }
    
    
    protected handleMouseOver(item: any) {
        const color = this.overColor;
        this.setState({color: color});
    }

    protected handleMouseOut(item: any) {
        const color = this.color;
        this.setState({color: color});
     }
    
     protected handleMouseDown(item: any) {
        const color = this.downColor;
        this.setState({color: color});
     }
    
    getTextX() {
        var x = 0;
        
        switch(this.props.properties & LCARS.ES_LABEL) {
            case LCARS.ES_LABEL_C:
            case LCARS.ES_LABEL_S:
            case LCARS.ES_LABEL_N:
                x = this.props.width/2;
                break;
            case LCARS.ES_LABEL_SW:
            case LCARS.ES_LABEL_W:
            case LCARS.ES_LABEL_NW:
                x = LCARS.TEXT_X_INSET;
                break;
            case LCARS.ES_LABEL_NE:
            case LCARS.ES_LABEL_E:
            case LCARS.ES_LABEL_SE:
            default:
                x = this.props.width - LCARS.TEXT_X_INSET;
                break;
        }
        
        return x;
    }
    
    
    getTextY() {
        var y = 0;
        
        switch(this.props.properties & LCARS.ES_LABEL) {
            case LCARS.ES_LABEL_C:
            case LCARS.ES_LABEL_W:
            case LCARS.ES_LABEL_E:
                y = this.height/2 + this.fontSize/2;
                break;
            case LCARS.ES_LABEL_NW:
            case LCARS.ES_LABEL_N:
            case LCARS.ES_LABEL_NE:
                y = this.fontSize*1.1;
                break;
            case LCARS.ES_LABEL_S:
            case LCARS.ES_LABEL_SW:
            case LCARS.ES_LABEL_SE:
            default:
                y = this.height - LCARS.TEXT_Y_INSET;
                break;
        }
        
        return y;
    }
    
    
    getTextAnchor(properties: number) {
        var textAnchor = "";
        
        switch(properties & LCARS.ES_LABEL) {
            case LCARS.ES_LABEL_C:
            case LCARS.ES_LABEL_S:
            case LCARS.ES_LABEL_N:
                textAnchor = "middle";
                break;
            case LCARS.ES_LABEL_SW:
            case LCARS.ES_LABEL_W:
            case LCARS.ES_LABEL_NW:
                textAnchor = "start";
                break;
            case LCARS.ES_LABEL_NE:
            case LCARS.ES_LABEL_E:
            case LCARS.ES_LABEL_SE:
            default:
                textAnchor = "end";
                break;
        }
        
        return textAnchor;
    }
    
    
    getShape() {
        var rectString = "M1,1";
        
        var westEndString;
        var eastEndString;
        var northString = " l";
        var southString = " l-";
        
        var hLength;
        
        var rectType = this.props.properties & LCARS.ES_RECT_RND;
        
        /** Create West end string. */
        switch(rectType) {
            case LCARS.ES_RECT_RND:
            case LCARS.ES_RECT_RND_W:
                westEndString = " m" + (this.height/2) + "," + (this.height) +
                " c-" + (this.height*.65) + ",0 -" + (this.height*.65) + ",-" + this.height + " 0,-" + this.height;
                break;
            case LCARS.ES_RECT_RND_E:
            default:
                westEndString = " m0," + this.height + " l0,-" + this.height;
                break;
        }
        
        /** Create the North and South edge strings. */
        switch(rectType) {
            case LCARS.ES_RECT_RND:
                hLength = this.props.width - this.height;
                break;
            case LCARS.ES_RECT_RND_E:
            case LCARS.ES_RECT_RND_W:
                hLength = this.props.width - (this.height/2);
                break;
            default:
                hLength = this.props.width;
                break;
        }
        northString += hLength + ",0";
        southString += hLength + ",0";
        
        /** Create the East end string */
        switch(rectType) {
            case LCARS.ES_RECT_RND:
            case LCARS.ES_RECT_RND_E:
                eastEndString = " c" + (this.height*.65) + ",0 " + (this.height*.65) + "," + this.height + " 0," + this.height;
                break;
            case LCARS.ES_RECT_RND_W:
            default:
                eastEndString = " l0," + this.height;
                break;
        }
        
        /** Create the rectangle path string. */
        rectString += westEndString + northString + eastEndString + southString;

        return rectString;
    }

    
    // protected getPosition(x: number, y: number) {
    //     return 'translate(' + x + ',' +  y +')';
    // }
    

    /**
     * Method to turn blinking on and off for the component. If the <code>enabled</code> argument
     * is <code>true</code>, it creates SVG shape and text animations for the component. Component
     * color and blink animation duration can be set. If left blank or specified as null, default
     * color and animation duration will be used.
     * <p>Color must be set using the LCARS palette constants, not specific color values. Duration
     * can be set using one of two constants <code>BLINK_DURATION_ERROR</code> or
     * <code>BLINK_DURATION_WARNING</code>, or it can be set to an arbitrary value using the form
     * <code>"0.0s"</code>. Note that the "s" suffix stands for seconds.
     *
     * @param enabled <code>true</code> if blinking is enabled, <code>false</code> if not
     * @param color the color to blink the component, default component color if null
     * @param duration the duration of the blink animation in the form <code>"0.0s"</code>, the "s" is for seconds, default if null
     */
    setBlinking(enabled: boolean, color: any, duration: any) {
        const shapeElement: HTMLElement | null = document.getElementById(this.props.id + LCARS.SHAPE_SUFFIX);
        const textElement: HTMLElement | null = document.getElementById(this.props.id + LCARS.TEXT_SUFFIX);

        //console.log(color);
        //console.log(duration);
        if(shapeElement) {
            var animateElement: any = document.getElementById(this.props.id + "_shapeAnimate");

            if(animateElement) {
                shapeElement.removeChild(animateElement);
            }
            
            /* If blinking is enabled... */
            if(enabled) {
                /* If the duration argument is null, set a default blink duration. */
                var _duration = duration;
                if(duration === null) {
                    _duration = LCARS.BLINK_DURATION_WARNING;
                }

                var _color = color;
                if(color === null) {
                    //console.log(this.state.color);
                    //console.log(this.props.properties & LCARS.ES_COLOR);
                    _color = this.props.color;
                }

                /* Update the DOM object for shape animation, with color and duration attributes. */
                animateElement = document.createElementNS(LCARS.svgNS, "animate");
                animateElement.setAttribute("id", this.props.id + "_shapeAnimate");
                animateElement.setAttribute("attributeType", "XML");
                animateElement.setAttribute("attributeName", "fill");
                animateElement.setAttribute("values", this.getBlinkColors(_color));
                animateElement.setAttribute("dur", _duration);
                animateElement.setAttribute("repeatCount", "indefinite");
                /* Append the animation element to the shape element. */
                shapeElement.appendChild(animateElement);
            }
        }        
        
        if(textElement) {
            var textAnimateElement: any = document.getElementById(this.props.id + "_textAnimate");

            if(textAnimateElement) {
                textElement.removeChild(textAnimateElement);
            }
            
            /* If blinking is enabled... */
            if(enabled) {
                /* If the duration argument is null, set a default blink duration. */
                var _duration = duration;
                if(_duration == null) {
                    _duration = LCARS.BLINK_DURATION_WARNING;
                }

                var _color = color;
                if(_color == null) {
                    _color = this.props.properties & LCARS.ES_COLOR;
                }

                /* Update the DOM object for the shape's text animation, with color and duration attributes. */
                this.textAnimateElement.setAttribute("values", "#000;" + LCARS.getTextColor(_color));
                this.textAnimateElement.setAttribute("dur", _duration);
                /* Append the animation element to the shape element. */
                textElement.appendChild(this.textAnimateElement);
            }
        }
    }
    
    /**
     * Method to handle a "blinking" event sent to this component. Event detail must
     * include full object for "on" case. Only the "enabled" state is required for the "off"
     * case.
     * detail: {"enabled": ["true/false"], "color": [LCARS color value as a string], duration": [""]}
     */
    protected blinking(event: any) {
        var detail = JSON.parse(event.detail);

        if(detail.enabled === "true") {
            var color = detail.color !== undefined ? parseInt(detail.color) : null;
            var duration = detail.duration !== undefined ? detail.duration : null;
            this.setBlinking(true, color, duration);
        } else {
            this.setBlinking(false, "", "");
        }
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
        thisObject.setVisible("hidden");
        setTimeout(function() { thisObject.setVisible("visible") }, this.blinkDuration);
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
        thisObject.setVisible("visible");
        setTimeout(function() { thisObject.setVisible("hidden") }, this.blinkDuration);
    }
    
    


    /**
     * Method to control the visibility of the LCARS component. If the argument is set to
     * <code>false</code>, the component will be invisible. If <code>true</code>, the
     * component will be visible.
     *
     * @param visible visible, if "visible", invisible, if "hidden"
     */
    setVisible(visible: string) {
        this.state.visible = visible;
        this.setState(this.state);
    }
    
    
    fadeOut(event: any) {
        console.log("detail: " + event.detail);
        var detail = JSON.parse(event.detail);
        console.log("detail.enable: " + detail.enable);
        console.log("detail.color: " + detail.color);
        console.log("detail.duration: " + detail.duration);

        const shapeElement: HTMLElement | null = document.getElementById(this.props.id + LCARS.SHAPE_SUFFIX);
        const textElement: HTMLElement | null = document.getElementById(this.props.id + LCARS.TEXT_SUFFIX);
        const element: HTMLElement | null = document.getElementById(this.props.id);

        //console.log(color);
        console.log(detail.duration);
        if(element) {
            var animateElement: any = document.getElementById(this.props.id + "_animate");

            if(animateElement) {
                element.removeChild(animateElement);
                console.log("animation: " + this.props.id + "_animate" + ", removed...");
            }
            
            /* If the duration argument is null, set a default fade out duration. */
            var _duration = detail.duration;
            if(detail.duration === null) {
                _duration = 1;
            }

            /* Update the DOM object for shape animation, with color and duration attributes. */
            animateElement = document.createElementNS(LCARS.svgNS, "animate");
            animateElement.setAttribute("id", this.props.id + "_animate");
            animateElement.setAttribute("attributeType", "XML");
            animateElement.setAttribute("attributeName", "opacity");
            animateElement.setAttribute("values", "1;0");
            animateElement.setAttribute("dur", _duration + "s");
            //animateElement.setAttribute("repeatCount", "1");
            animateElement.setAttribute("fill", "freeze");

            /* Append the animation element to the shape element. */
            element.appendChild(animateElement);

            animateElement.beginElement();
        }               
    }
    
    fadeIn(event: any) {
        var detail = JSON.parse(event.detail);

        const shapeElement: HTMLElement | null = document.getElementById(this.props.id + LCARS.SHAPE_SUFFIX);
        const textElement: HTMLElement | null = document.getElementById(this.props.id + LCARS.TEXT_SUFFIX);
        const element: HTMLElement | null = document.getElementById(this.props.id);

        //console.log(color);
        console.log(detail.duration);
        if(element) {
            var animateElement: any = document.getElementById(this.props.id + "_animate");

            if(animateElement) {
                element.removeChild(animateElement);
            }
            
            /* If the duration argument is null, set a default blink duration. */
            var _duration = detail.duration;
            if(detail.duration === null) {
                _duration = 1;
            }

            /* Update the DOM object for shape animation, with color and duration attributes. */
            animateElement = document.createElementNS(LCARS.svgNS, "animate");
            animateElement.setAttribute("id", this.props.id + "_animate");
            animateElement.setAttribute("attributeType", "XML");
            animateElement.setAttribute("attributeName", "opacity");
            animateElement.setAttribute("values", "0;1");
            animateElement.setAttribute("dur", _duration + "s");
            animateElement.setAttribute("fill", "freeze");

            /* Append the animation element to the shape element. */
            element.appendChild(animateElement);

            animateElement.beginElement();
        }
}
    
    
    setIconPosition(location: number) {
        var iconScale = " scale(" + this.iconScale + ") ";
        var iconTranslate = " translate(" + this.getIconX(location) + "," + this.getIconY(location) + ") "

        this.iconTransform = iconTranslate + iconScale;
    }

    getIconShape() {
        return this.props.icon;
    }
    
    getIconPosition() {
        return this.iconTransform;
    }
    
    getIconX(location: number) {
        var x = 0;
        
        switch(location) {
            case LCARS.ES_LABEL_C:
            case LCARS.ES_LABEL_S:
            case LCARS.ES_LABEL_N:
                x = this.props.width/2 - 24*1.5/2;
                break;
            case LCARS.ES_LABEL_SW:
            case LCARS.ES_LABEL_W:
            case LCARS.ES_LABEL_NW:
                x = 24*1.5/2;
                break;
            case LCARS.ES_LABEL_NE:
            case LCARS.ES_LABEL_E:
            case LCARS.ES_LABEL_SE:
            default:
                x = this.props.width - (24*1.5 + 24*1.5/2);
                break;
        }

        return x;
    }
    
    
    getIconY(location: number) {
        var y = 0;
        
        switch(location) {
            case LCARS.ES_LABEL_C:
            case LCARS.ES_LABEL_W:
            case LCARS.ES_LABEL_E:
            case LCARS.ES_LABEL_NW:
            case LCARS.ES_LABEL_N:
            case LCARS.ES_LABEL_NE:
            case LCARS.ES_LABEL_S:
            case LCARS.ES_LABEL_SW:
            case LCARS.ES_LABEL_SE:
            default:
                y = this.props.height/2 + (15*1.5/2);
                break;
        }

        return y;
    }


    getAuxTextX() {
        var x = 0;
        
        switch(this.props.auxLabelProperties & LCARS.ES_LABEL) {
            case LCARS.ES_LABEL_C:
            case LCARS.ES_LABEL_S:
            case LCARS.ES_LABEL_N:
                x = this.props.width/2;
                break;
            case LCARS.ES_LABEL_SW:
            case LCARS.ES_LABEL_W:
            case LCARS.ES_LABEL_NW:
                x = LCARS.TEXT_X_INSET;
                break;
            case LCARS.ES_LABEL_NE:
            case LCARS.ES_LABEL_E:
            case LCARS.ES_LABEL_SE:
            default:
                x = this.props.width - LCARS.TEXT_X_INSET;
                break;
        }
        
        return x;
    }
    
    
    getAuxTextY() {
        var y = 0;
        
        switch(this.props.auxLabelProperties & LCARS.ES_LABEL) {
            case LCARS.ES_LABEL_C:
            case LCARS.ES_LABEL_W:
            case LCARS.ES_LABEL_E:
                y = this.height/2 + LCARS.FONT_BUTTON_SIZE/2;
                break;
            case LCARS.ES_LABEL_NW:
            case LCARS.ES_LABEL_N:
            case LCARS.ES_LABEL_NE:
                y = LCARS.FONT_BUTTON_SIZE;
                break;
            case LCARS.ES_LABEL_S:
            case LCARS.ES_LABEL_SW:
            case LCARS.ES_LABEL_SE:
            default:
                y = this.height - LCARS.TEXT_Y_INSET;
                break;
        }
        
        return y;
    }
    
    
    getAuxTextAnchor() {
        var textAnchor = "";
        
        switch(this.props.auxLabelProperties & LCARS.ES_LABEL) {
            case LCARS.ES_LABEL_C:
            case LCARS.ES_LABEL_S:
            case LCARS.ES_LABEL_N:
                textAnchor = "middle";
                break;
            case LCARS.ES_LABEL_SW:
            case LCARS.ES_LABEL_W:
            case LCARS.ES_LABEL_NW:
                textAnchor = "start";
                break;
            case LCARS.ES_LABEL_NE:
            case LCARS.ES_LABEL_E:
            case LCARS.ES_LABEL_SE:
            default:
                textAnchor = "end";
                break;
        }
        
        return textAnchor;
    }
    
    
    getAuxLabelFontSize() {
        switch(this.props.auxLabelProperties & LCARS.ES_FONT) {
            case LCARS.EF_TITLE:
                return LCARS.FONT_TITLE_SIZE;
            case LCARS.EF_SUBTITLE:
                return LCARS.FONT_SUBTITLE_SIZE;
            case LCARS.EF_TINY:
                return LCARS.FONT_TINY_SIZE
            case LCARS.EF_BODY:
                return LCARS.FONT_BODY_SIZE;
            case LCARS.EF_BUTTON:    
            default:
                return LCARS.FONT_BUTTON_SIZE;
        }
    }
    
}

export default LCARSComponent;