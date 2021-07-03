import * as React from 'react';
import { Component } from 'react';
import LCARS from './LCARS';
import LCARSClock from './LCARSClock';

interface LCARSDigitalClockProps {
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
class LCARSDigitalClock<P extends LCARSDigitalClockProps> extends Component<P> {

    public static defaultProps = {
        color: LCARS.EC_ORANGE
    };

    constructor(props: P) {
        super(props);

    }

    render() {

        return(
            <svg x={this.props.x} y={this.props.y} width={this.props.scale} height={this.props.scale} viewBox={"0 0 " + this.props.width + " " + this.props.height}>
                <LCARSClock
                    id="clock1"
                    properties={LCARS.EF_TITLE}
                    fontSizeOverride={4.0}
                    format="hh:mm"
                />
                <LCARSClock
                    id="clock2"
                    x={450}
                    properties={LCARS.EF_TITLE}
                    fontSizeOverride={1.6}
                    format="ss"
                />
                {this.props.children}
                <LCARSClock
                    id="clock3"
                    x={450}
                    y={125}
                    properties={LCARS.EF_TITLE}
                    fontSizeOverride={1.6}
                    format="TT"
                />
                <LCARSClock
                    id="clock4"
                    x={275}
                    y={250}
                    properties={LCARS.EF_TITLE}
                    fontSizeOverride={0.9}
                    format="dddd - d MMM yyyy"
                    alignment='center'
                />
                {this.props.children}
            </svg>
        );
    }
}

export default LCARSDigitalClock;