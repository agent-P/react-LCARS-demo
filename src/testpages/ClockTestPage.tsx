import React, { Component } from 'react';
import '../App.css';
import LCARSButton from '../components/LCARSButton';
import LCARS from '../components/LCARS';
import ICONS from '../resources/ICONS';
import LCARSBasicScreen from '../components/LCARSBasicScreen';
import { Redirect } from 'react-router'
import LCARSClock from '../components/LCARSClock';


class ClockTestPage extends Component {

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
        title="LCARS Clock Testing"
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

        <LCARSClock
            id="clock1"
            x={this.width/2}
            y={this.height/2}
            properties={LCARS.EF_TITLE}
            fontSizeOverride={4.0}
        />

      </LCARSBasicScreen>
    );
  }


  private handleMenuBackButtonClick(e: any) {
    e.preventDefault();
    history.back();
  }
 
}

export default ClockTestPage;
