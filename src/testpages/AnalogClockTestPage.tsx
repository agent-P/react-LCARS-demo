import React, { Component } from 'react';
import '../App.css';
import LCARSButton from '../components/LCARSButton';
import LCARS from '../components/LCARS';
import ICONS from '../resources/ICONS';
import LCARSBasicScreen from '../components/LCARSBasicScreen';
import { Redirect } from 'react-router'
import LCARSAnalogClock from '../components/LCARSAnalogClock';


class AnalogClockTestPage extends Component {

  state = {
    navigate: false,
    path: ""
  }

  protected LEFT: number;
  protected TOP: number;
  protected RIGHT: number;
  protected BOTTOM: number;

  protected width: number;
  protected height: number;

  constructor(props: any) {
    super(props);

    this.LEFT = 50;
    this.TOP = 5;
    this.RIGHT  = 50;
    this.BOTTOM = 20;

    this.width = 1920;
    this.height = 1200;

    this.handleMenuBackButtonClick = this.handleMenuBackButtonClick.bind(this);
  }
 
  render() {
    const navigate = this.state.navigate;
    const path = this.state.path;

    if (navigate) {
      return <Redirect to={path} push={true} />
    }

    return (
      <LCARSBasicScreen 
        id="analogClockTestingScreen"
        width={this.width} height={this.height}
        title="LCARS Analog Clock Testing"
        >

        <LCARSButton 
          id="clockTestingBackButton"
          label="Back"
          properties={ LCARS.ES_RECT_RND | LCARS.ES_LABEL_E }
          x={this.LEFT}
          y={this.TOP + LCARS.FONT_TITLE_SIZE + LCARS.LCARS_SPACE }
          handleClick={this.handleMenuBackButtonClick}
          icon={ICONS.LEFT_ARROW_IN_CIRCLE}
          iconLocation={LCARS.ES_LABEL_W}
        />

        <LCARSAnalogClock
          id='analogClock'
          x={1920/4}
          y={1200/4}
          width={1920/4}
          height={1200/4}
          scale={'75%'}
          handsColor={LCARS.EC_YELLOW}
          faceNumbersColor={LCARS.EC_RED}
        />

      <LCARSAnalogClock
          id='analogClock'
          x={this.width - 300}
          y={100}
          width={1920/4}
          height={1200/4}
          scale={'25%'}
        />

      </LCARSBasicScreen>
    );
  }


  private handleMenuBackButtonClick(e: any) {
    e.preventDefault();
    history.back();
  }
 
}

export default AnalogClockTestPage;
