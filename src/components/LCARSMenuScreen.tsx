import React, { Component } from "react";
import LCARS from './LCARS'
import LCARSText from './LCARSText';
import LCARSRectangle from './LCARSRectangle';
import LCARSCorner from './LCARSCorner';
import LCARSButton from './LCARSButton';

export interface LCARSMenuScreenProps {
    id: string;
    title: string;
    subTitle: string;
    width: number;
    vbWidth: number;
    height: number;
    vbHeight: number;
    color: number;
    //fontSize: number;
    visible: boolean;
}

export interface LCARSMenuScreenState {
    color: any;
    visible: boolean;
}

class LCARSMenuScreen<P extends LCARSMenuScreenProps> extends Component<P> {

    public static defaultProps = {
        title: "",
        subTitle: "",
        width: 0,
        vbWidth: 0,
        height: 0,
        vbHeight: 0,
        color: LCARS.EC_ORANGE,
        //fontSize: LCARS.EF_TITLE,
        visible: true
    };

    protected title: string;
    protected subTitle: string;
    protected height: number;
    protected width: number;
    protected vbHeight: number;
    protected vbWidth: number;
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

    state: LCARSMenuScreenState;

    constructor(props: P) {
        super(props);
    
        this.title = this.props.title;
        this.subTitle = this.props.subTitle;
        this.height = this.props.height;
        this.width = this.props.width;
        this.vbHeight = this.props.vbHeight;
        this.vbWidth = this.props.vbWidth;
        this.color = LCARS.getColor(this.props.color);
        this.fontSize = LCARS.getLCARSFontSize(LCARS.EF_SUBTITLE);

        this.CAP_WIDTH = this.fontSize * 0.6;
        this.headerThickness = LCARS.LCARS_CORNER_END_HEIGHT;

        this.LEFT = 10;
        this.TOP = 5;
        this.RIGHT  = 10;
        this.BOTTOM = 20;

        this.titleWidth = LCARS.getTextWidth3(this.title, this.fontSize);
        if(this.titleWidth == 0) {
            this.titleGap = LCARS.LCARS_SPACE;
        }
        else {
            this.titleGap = 2 * LCARS.LCARS_SPACE;
        }

        if(this.props.vbWidth == 0) {
            this.vbWidth = this.props.width;
        }

        if(this.props.vbHeight == 0) {
            this.vbHeight = this.props.height;
        }

        this.state = {
            color: this.color,
            visible: this.props.visible
        };
    }

    render() {
        return(
            <svg viewBox={"0 0 " + this.vbWidth + " " + this.vbHeight}>
                <LCARSText 
                    id={this.props.id + "_screen_title"}
                    label={this.title}
                    color={this.props.color}
                    properties={ LCARS.EF_SUBTITLE }
                    x={this.width - (this.CAP_WIDTH + this.RIGHT + LCARS.LCARS_SPACE + this.titleWidth)} 
                    y={this.TOP}
                />

                <LCARSCorner
                    id={this.props.id + "_rect_title_bar"}
                    height={1}
                    width={this.width - this.titleGap - this.CAP_WIDTH - this.LEFT - this.RIGHT - this.titleWidth}
                    x={this.LEFT} y={this.TOP}
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

                <LCARSCorner
                    id={this.props.id + "_rect_footer_bar"}
                    height={1}
                    width={this.width - (1 * LCARS.LCARS_SPACE) - this.CAP_WIDTH - this.LEFT - this.RIGHT}
                    x={this.LEFT} y={this.height - this.BOTTOM - LCARS.LCARS_CORNER_HEIGHT}
                    color={this.props.color}
                    properties={LCARS.ES_SHAPE_SW}
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

export default LCARSMenuScreen;