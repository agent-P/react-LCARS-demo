import * as React from 'react';
import LCARS from './LCARS';
import LCARSComponent, { LCARSComponentState } from './LCARSComponent';
import { LCARSComponentProps } from './LCARSComponent'
import './LCARSComponent.css'
import { string } from 'prop-types';

interface LCARSTextAreaProps extends LCARSComponentProps {
    rows: number;
    fontFamily: string;
    wrap: boolean;
    scroll: boolean;
    contentText: string[];
}

export interface LCARSTextAreaState {
    color: any;
    visible: string;
    enabled: boolean;
    lineElements: Element[];
}


/**
 * LCARS Text component
 */
class LCARSTextArea extends LCARSComponent <LCARSTextAreaProps> {

    public static defaultProps = {
        static: false,
        enabled: true,
        label: "",
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
        rows: 1,
        fontFamily: "LCARS",
        wrap: false,
        scroll: true,
        contentText: []
    };

    rows: number;  // The number of rows to display in the text area.
    lineSpacing: number;

    state: LCARSTextAreaState;

    constructor(props: LCARSTextAreaProps) {
        super(props);
        
        this.lineSpacing = 1.2;
        this.height = (this.props.rows*this.lineSpacing) * this.fontSize;
        this.width = this.props.width;

        this.rows = this.props.rows;

        this.textColor = this.getColor();

        this.state = {
            color: this.color,
            visible: this.props.visible,
            enabled: this.props.enabled,
            lineElements: []
        };


    }


    componentDidMount() {
        var element = document.getElementById(this.props.id)

        if(element) {
            
            /**
             * Initialize the Text Area.
             */
            for(var index = 0; index < this.rows; index++) {
                //console.log("iterating row: " + index);
                this.state.lineElements.push(document.createElementNS(LCARS.svgNS, "text"));
                this.state.lineElements[index].setAttribute("id", this.props.id + "_" + index + LCARS.TEXT_SUFFIX);
                this.state.lineElements[index].setAttribute("class", "svgText");
                this.state.lineElements[index].setAttribute("x", "0");
                this.state.lineElements[index].setAttribute("y", ((index+1) * this.fontSize * this.lineSpacing).toString());
                
                /* Set <code>tspan</code> attribute to preserve the space for blank lines, and initialize
                 the line as blank. */
                this.state.lineElements[index].setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space","preserve");
                this.state.lineElements[index].textContent = "";
                
                /* Add the <code>tspan</code> SVG element to the parent SVG <code>textElement</code>. */
                element.appendChild(this.state.lineElements[index]);
            }
            
            /**
             * Add event listeners.
             */
            element.addEventListener("appendLine", e => this.handleAppendLineEvent(e));

        }

        if(this.props.contentText.length > 0) {
            for(var index = 0; index < this.props.contentText.length; index++) {
                this.appendLine(this.props.contentText[index]);
            }
        }
        
    }


    render() {
        return(
            <svg className={this.getClassName(this.props.static, this.props.enabled)}
                id={this.props.id}
                height={this.height} 
                width={this.width} 
                fill={this.state.color}
                visibility={this.state.visible}
                x={this.props.x}
                y={this.props.y}
                fontSize={this.fontSize}
                fontFamily={this.props.fontFamily}
                >
                
            </svg>
        );
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
       
    private handleAppendLineEvent(event: any) {
        var detail = JSON.parse(event.detail);
        var text = detail.text;

        this.appendLine(text);
    }


    private appendLine(text: string) {
        var resultString = this.wrap(text);
        var resultStringLength = resultString.length;

        for(var index = 0; index < resultStringLength; index++) {
            this.addLine(resultString[index]);
        }
    }

    
    
    private addLine(lineOfText: string) {        
        for(var index = 0; index < this.rows; index++) {
            if(this.state.lineElements[index].textContent == "") {
                this.state.lineElements[index].textContent = lineOfText;
                break;
            }
            else {
                if(index == this.rows-1) {
                    this.scrollUp();
                    this.state.lineElements[this.rows-1].textContent = lineOfText;
                    break;
                }
            }
        }
    }
    
    
    private wrap(lineOfText: string) {
        var resultStringArrays: string[][] = [];
        var resultStrings: string[] = [];
        
        var words: string[] = lineOfText.split(' ');
        var w: string;
        var x, i;
        var spaceWidth = LCARS.getTextWidth3(' ', this.fontSize);
        var spaceLeft = this.width;
        
        var line: string[] = [];
        resultStringArrays.push(line);
        
        for(i = 0; i<words.length; i++ ) {
            w = words[i];
            x = LCARS.getTextWidth3(w, this.fontSize) + spaceWidth;
            
            if(x > spaceLeft) {
                line = [];
                resultStringArrays.push(line);

                line.push(w);
                spaceLeft = this.width - x;
            }
            else {
                spaceLeft = spaceLeft - x;
                line.push(w);
            }
        }
        
        for(i = 0; i<resultStringArrays.length; i++ ) {
            resultStrings[i] = resultStringArrays[i].join(' ');
            
            if(this.props.wrap == false) {
                if(i != 0) {
                    delete resultStrings[i];
                }
            }
        }
        
        return resultStrings;
    }
    
    private scrollUp() {
        for(var index = 0; index < this.rows-1; index++) {
            this.state.lineElements[index].textContent = this.state.lineElements[index+1].textContent;
        }
        
        this.state.lineElements[this.rows-1].textContent = "";
    }
    
}

export default LCARSTextArea;
