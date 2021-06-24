import React, { Component } from "react";
import LCARS from './LCARS'
import LCARSButton from "./LCARSButton";

export interface LCARSKeypadProps {
    id: string;
    title: string;
    subTitle: string;
    width: number;
    height: number;
    x: number;
    y: number;
    color: number;
    fontSize: number;
    visible: boolean;
    scale: string;
}

export interface LCARSKeypadState {
    color: any;
    visible: boolean;
}

class LCARSKeypad<P extends LCARSKeypadProps> extends Component<P> {

    public static defaultProps = {
        title: "",
        subTitle: "",
        width: 5,
        height: 5,
        x: 0,
        y: 0,
        color: LCARS.EC_ORANGE,
        fontSize: LCARS.EF_TITLE,
        visible: true,
        scale: "100%"
    };

    protected height: number;
    protected width: number;
    protected color: any;
    protected fontSize: number;
    private KEY_SPACING: number = 20;

    state: LCARSKeypadState;

    constructor(props: P) {
        super(props);
    
        this.height = this.props.height;
        this.width = this.props.width;
        this.color = LCARS.getColor(this.props.color);
        this.fontSize = LCARS.getLCARSFontSize(this.props.fontSize);


        this.state = {
            color: this.color,
            visible: this.props.visible
        };
    }

    render() {
        return(
            <svg x={this.props.x} y={this.props.y} width={this.props.scale} height={this.props.scale} viewBox={"0 0 " + this.width + " " + this.height}>

                <LCARSButton
                    id="button1"
                    height={LCARS.LCARS_BTN_HEIGHT}
                    label="1"
                    properties={ LCARS.ES_RECT_RND | LCARS.EF_SUBTITLE | LCARS.ES_LABEL_E }
                    auxLabel={"OFF"}
                    auxLabelProperties={LCARS.EC_BLUE | LCARS.EF_BUTTON | LCARS.ES_LABEL_SW}
                    x={0}
                />

                <LCARSButton
                    id="button2"
                    height={LCARS.LCARS_BTN_HEIGHT}
                    label="2"
                    properties={ LCARS.ES_RECT_RND | LCARS.EF_SUBTITLE | LCARS.ES_LABEL_E }
                    auxLabel={"AWAY"}
                    auxLabelProperties={LCARS.EC_BLUE | LCARS.EF_BUTTON | LCARS.ES_LABEL_SW}
                    x={LCARS.LCARS_BTN_WIDTH + this.KEY_SPACING}
                />

                <LCARSButton
                    id="button3"
                    height={LCARS.LCARS_BTN_HEIGHT}
                    label="3"
                    properties={ LCARS.ES_RECT_RND | LCARS.EF_SUBTITLE | LCARS.ES_LABEL_E }
                    auxLabel={"STAY"}
                    auxLabelProperties={LCARS.EC_BLUE | LCARS.EF_BUTTON | LCARS.ES_LABEL_SW}
                    x={LCARS.LCARS_BTN_WIDTH*2 + this.KEY_SPACING*2}
                />

                <LCARSButton
                    id="button4"
                    height={LCARS.LCARS_BTN_HEIGHT}
                    label="4"
                    properties={ LCARS.ES_RECT_RND | LCARS.EF_SUBTITLE | LCARS.ES_LABEL_E }
                    auxLabel={"MAX"}
                    auxLabelProperties={LCARS.EC_BLUE | LCARS.EF_BUTTON | LCARS.ES_LABEL_SW}
                    x={0}
                    y={LCARS.LCARS_BTN_HEIGHT + this.KEY_SPACING}
                />

                <LCARSButton
                    id="button5"
                    height={LCARS.LCARS_BTN_HEIGHT}
                    label="5"
                    properties={ LCARS.ES_RECT_RND | LCARS.EF_SUBTITLE | LCARS.ES_LABEL_E }
                    auxLabel={"TEST"}
                    auxLabelProperties={LCARS.EC_BLUE | LCARS.EF_BUTTON | LCARS.ES_LABEL_SW}
                    x={LCARS.LCARS_BTN_WIDTH + this.KEY_SPACING}
                    y={LCARS.LCARS_BTN_HEIGHT + this.KEY_SPACING}
                />

                <LCARSButton
                    id="button6"
                    height={LCARS.LCARS_BTN_HEIGHT}
                    label="6"
                    properties={ LCARS.ES_RECT_RND | LCARS.EF_SUBTITLE | LCARS.ES_LABEL_E }
                    auxLabel={"BYPASS"}
                    auxLabelProperties={LCARS.EC_BLUE | LCARS.EF_BUTTON | LCARS.ES_LABEL_SW}
                    x={LCARS.LCARS_BTN_WIDTH*2 + this.KEY_SPACING*2}
                    y={LCARS.LCARS_BTN_HEIGHT + this.KEY_SPACING}
                />

                <LCARSButton
                    id="button7"
                    height={LCARS.LCARS_BTN_HEIGHT}
                    label="7"
                    properties={ LCARS.ES_RECT_RND | LCARS.EF_SUBTITLE | LCARS.ES_LABEL_E }
                    auxLabel={"INSTANT"}
                    auxLabelProperties={LCARS.EC_BLUE | LCARS.EF_BUTTON | LCARS.ES_LABEL_SW}
                    x={0}
                    y={LCARS.LCARS_BTN_HEIGHT*2 + this.KEY_SPACING*2}
                />

                <LCARSButton
                    id="button8"
                    height={LCARS.LCARS_BTN_HEIGHT}
                    label="8"
                    properties={ LCARS.ES_RECT_RND | LCARS.EF_SUBTITLE | LCARS.ES_LABEL_E }
                    auxLabel={"CODE"}
                    auxLabelProperties={LCARS.EC_BLUE | LCARS.EF_BUTTON | LCARS.ES_LABEL_SW}
                    x={LCARS.LCARS_BTN_WIDTH + this.KEY_SPACING}
                    y={LCARS.LCARS_BTN_HEIGHT*2 + this.KEY_SPACING*2}
                />

                <LCARSButton
                    id="button9"
                    height={LCARS.LCARS_BTN_HEIGHT}
                    label="9"
                    properties={ LCARS.ES_RECT_RND | LCARS.EF_SUBTITLE | LCARS.ES_LABEL_E }
                    auxLabel={"CHIME"}
                    auxLabelProperties={LCARS.EC_BLUE | LCARS.EF_BUTTON | LCARS.ES_LABEL_SW}
                    x={LCARS.LCARS_BTN_WIDTH*2 + this.KEY_SPACING*2}
                    y={LCARS.LCARS_BTN_HEIGHT*2 + this.KEY_SPACING*2}
                />

                <LCARSButton
                    id="button*"
                    height={LCARS.LCARS_BTN_HEIGHT}
                    label="*"
                    properties={ LCARS.ES_RECT_RND | LCARS.EF_SUBTITLE | LCARS.ES_LABEL_E }
                    auxLabel={"READY"}
                    auxLabelProperties={LCARS.EC_BLUE | LCARS.EF_BUTTON | LCARS.ES_LABEL_SW}
                    x={0}
                    y={LCARS.LCARS_BTN_HEIGHT*3 + this.KEY_SPACING*3}
                />

                <LCARSButton
                    id="button0"
                    height={LCARS.LCARS_BTN_HEIGHT}
                    label="0"
                    properties={ LCARS.ES_RECT_RND | LCARS.EF_SUBTITLE | LCARS.ES_LABEL_E }
                    auxLabel={""}
                    auxLabelProperties={LCARS.EC_BLUE | LCARS.EF_BUTTON | LCARS.ES_LABEL_SW}
                    x={LCARS.LCARS_BTN_WIDTH + this.KEY_SPACING}
                    y={LCARS.LCARS_BTN_HEIGHT*3 + this.KEY_SPACING*3}
                />

                <LCARSButton
                    id="button#"
                    height={LCARS.LCARS_BTN_HEIGHT}
                    label="#"
                    properties={ LCARS.ES_RECT_RND | LCARS.EF_SUBTITLE | LCARS.ES_LABEL_E }
                    auxLabel={""}
                    auxLabelProperties={LCARS.EC_BLUE | LCARS.EF_BUTTON | LCARS.ES_LABEL_SW}
                    x={LCARS.LCARS_BTN_WIDTH*2 + this.KEY_SPACING*2}
                    y={LCARS.LCARS_BTN_HEIGHT*3 + this.KEY_SPACING*3}
                />

                {this.props.children}
            </svg>
        );
    }
}

export default LCARSKeypad;