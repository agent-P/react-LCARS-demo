import React, { Component } from "react";
import LCARS from './LCARS'
import LCARSText from './LCARSText';
import LCARSRectangle from './LCARSRectangle';

export interface LCARSBasicScreenProps {
    id: string;
    title: string;
    subTitle: string;
    width: number;
    height: number;
    color: number;
    fontSize: number;
    visible: boolean;
}

export interface LCARSBasicScreenState {
    color: any;
    visible: boolean;
}

class LCARSBasicScreen<P extends LCARSBasicScreenProps> extends Component<P> {

    public static defaultProps = {
        title: "",
        subTitle: "",
        width: 0,
        height: 0,
        color: LCARS.EC_ORANGE,
        fontSize: LCARS.EF_TITLE,
        visible: true
    };

    protected title: string;
    protected subTitle: string;
    protected height: number;
    protected width: number;
    protected color: any;
    protected fontSize: number;
    protected CAP_WIDTH: number;
    protected headerThickness: number;
    protected LEFT: number;
    protected TOP: number;
    protected RIGHT: number;
    protected BOTTOM: number;
    protected titleWidth: number;
    protected titleGap: number;

    state: LCARSBasicScreenState;

    constructor(props: P) {
        super(props);
    
        this.title = this.props.title;
        this.subTitle = this.props.subTitle;
        this.height = this.props.height;
        this.width = this.props.width;
        this.color = LCARS.getColor(this.props.color);
        this.fontSize = LCARS.getLCARSFontSize(this.props.fontSize);

        this.CAP_WIDTH = this.fontSize * 0.6;
        this.headerThickness = this.fontSize*0.9;

        this.LEFT = 10;
        this.TOP = 5;
        this.RIGHT  = 10;
        this.BOTTOM = 20;

        this.titleWidth = LCARS.getTextWidth3(this.title, this.fontSize);
        if(this.titleWidth == 0) {
            this.titleGap = 2 * LCARS.LCARS_SPACE;
        }
        else {
            this.titleGap = 3 * LCARS.LCARS_SPACE;
        }

        this.state = {
            color: this.color,
            visible: this.props.visible
        };
    }

    render() {
        return(
            <svg width="100%" height="100%" viewBox={"0 0 " + this.width + " " + this.height}>
                <LCARSText 
                    id={this.props.id + "_screen_title"}
                    label={this.title}
                    color={this.props.color}
                    properties={ this.props.fontSize }
                    x={this.width - (this.CAP_WIDTH + this.RIGHT + LCARS.LCARS_SPACE + this.titleWidth)} 
                    y={this.TOP}
                />

                <LCARSRectangle 
                    id={this.props.id + "_hb_end_cap_w"}
                    height={this.headerThickness}
                    width={this.CAP_WIDTH}
                    x={this.LEFT} y={this.TOP}
                    color={this.props.color}
                    properties={LCARS.ES_RECT_RND_W }
                />

                <LCARSRectangle 
                    id={this.props.id + "_rect_title_bar"}
                    height={this.headerThickness}
                    width={this.width - this.titleGap - (2 * this.CAP_WIDTH) - this.LEFT - this.RIGHT - this.titleWidth}
                    x={this.LEFT + this.CAP_WIDTH + LCARS.LCARS_SPACE} y={this.TOP}
                    color={this.props.color}
                />

                <LCARSRectangle 
                    id={this.props.id + "_hb_end_cap_e"}
                    height={this.headerThickness}
                    width={this.CAP_WIDTH}
                    x={this.width - (this.CAP_WIDTH + this.RIGHT)} y={this.TOP}
                    color={this.props.color}
                    properties={LCARS.ES_RECT_RND_E }
                />

                <LCARSRectangle 
                    id={this.props.id + "_fb_end_cap_w"}
                    height={this.headerThickness}
                    width={this.CAP_WIDTH}
                    x={this.LEFT} y={this.height - this.headerThickness - this.BOTTOM}
                    color={this.props.color}
                    properties={LCARS.ES_RECT_RND_W }
                />

                <LCARSRectangle 
                    id={this.props.id + "_rect_footer_bar"}
                    height={this.headerThickness}
                    width={this.width - (2 * LCARS.LCARS_SPACE) - (2 * this.CAP_WIDTH) - this.LEFT - this.RIGHT}
                    x={this.LEFT + this.CAP_WIDTH + LCARS.LCARS_SPACE} y={this.height - this.headerThickness - this.BOTTOM}
                    color={this.props.color}
                />

                <LCARSRectangle 
                    id={this.props.id + "_fb_end_cap_e"}
                    height={this.headerThickness}
                    width={this.CAP_WIDTH}
                    x={this.width - (this.CAP_WIDTH + this.RIGHT)} y={this.height - this.headerThickness - this.BOTTOM}
                    color={this.props.color}
                    properties={LCARS.ES_RECT_RND_E }
                />

                {this.props.children}
            </svg>
        );
    }
}

export default LCARSBasicScreen;