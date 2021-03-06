import React, { Component } from 'react';
import '../App.css';
import LCARSButton from '../components/LCARSButton';
import LCARS from '../components/LCARS';
import ICONS from '../resources/ICONS';
import LCARSBasicScreen from '../components/LCARSBasicScreen';
import { Redirect } from 'react-router'
import LCARSDigitalClock from '../components/LCARSDigitalClock';


class DigitalClockTestPage extends Component {

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
        id="clockTestingScreen"
        width={this.width} height={this.height}
        title="LCARS Digital Clock Testing"
        >

        <LCARSButton 
          id="digitalClockTestingBackButton"
          label="Back"
          properties={ LCARS.ES_RECT_RND | LCARS.ES_LABEL_E }
          x={this.LEFT}
          y={this.TOP + LCARS.FONT_TITLE_SIZE + LCARS.LCARS_SPACE }
          handleClick={this.handleMenuBackButtonClick}
          icon={ICONS.LEFT_ARROW_IN_CIRCLE}
          iconLocation={LCARS.ES_LABEL_W}
        />

        <LCARSDigitalClock
            width={this.width/2}
            height={this.height/2}
            x={this.width/4}
            y={this.height/4}
            scale="50%"
        />

      </LCARSBasicScreen>
    );
  }


  private handleMenuBackButtonClick(e: any) {
    e.preventDefault();
    history.back();
  }



 
}

export default DigitalClockTestPage;
