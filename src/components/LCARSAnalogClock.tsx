import * as React from 'react';
import { Component } from 'react';
import LCARS from './LCARS';

interface LCARSAnalogClockProps {
    color: number;
    width: number;
    height: number;
    x: number;
    y: number;
    scale: string;
}

/**
 * LCARS Base Clock component, for the display and control of time.
 */
class LCARSAnalogClock<P extends LCARSAnalogClockProps> extends Component<P> {

    public static defaultProps = {
        color: LCARS.EC_ORANGE
    };

    constructor(props: P) {
        super(props);

    }

    render() {

        return(
            <svg x={this.props.x} y={this.props.y} width={this.props.scale} height={this.props.scale} viewBox={"0 0 " + this.props.width + " " + this.props.height}>

                {this.props.children}
            </svg>
        );
    }
}

export default LCARSAnalogClock;