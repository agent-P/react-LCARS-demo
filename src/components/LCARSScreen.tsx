import React, { Component } from "react";
import LCARS from './LCARS'

export interface LCARSScreenProps {
    id: string;
    title: string;
    subTitle: string;
    width: number;
    height: number;
    color: number;
    visible: boolean;
}

export interface LCARSScreenState {
    color: any;
    visible: boolean;
}

class LCARSScreen<P extends LCARSScreenProps> extends Component<P> {

    public static defaultProps = {
        title: "",
        subTitle: "",
        width: 0,
        height: 0,
        color: LCARS.EC_ORANGE,
        visible: true
    };

    protected title: string;
    protected subTitle: string;
    protected height: number;
    protected width: number;
    protected color: any;

    state: LCARSScreenState;

    constructor(props: P) {
        super(props);
    
        this.title = this.props.title;
        this.subTitle = this.props.subTitle;
        this.height = this.props.height;
        this.width = this.props.width;
        this.color = LCARS.getColor(this.props.color);

        this.state = {
            color: this.color,
            visible: this.props.visible
        };
    }

    render() {
        return(
            <svg viewBox="0 0 1920 1550">{this.props.children}</svg>
        );
    }
}

export default LCARSScreen;