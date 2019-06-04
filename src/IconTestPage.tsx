import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LCARSButton from './components/LCARSButton';
import LCARSCorner from './components/LCARSCorner';
import LCARS from './components/LCARS';
import ICONS from './resources/ICONS';
import LCARSText from './components/LCARSText';
import LCARSRectangle from './components/LCARSRectangle';
import LCARSBasicScreen from './components/LCARSBasicScreen';
import LCARSIcon from './components/LCARSIcon';
import { Redirect } from 'react-router'


class IconTestPage extends Component {

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

    // here is the important part
    if (navigate) {
      return <Redirect to={path} push={true} />
    }

    return (
      <LCARSBasicScreen 
        id="iconTestingScreen"
        width={this.width} height={this.height}
        title="LCARS Icon Testing"
        //vbWidth={2*1920} vbHeight={2*1200}
        //color={LCARS.EC_L_BLUE}
        //fontSize={LCARS.EF_SUBTITLE}
        >

        <LCARSButton 
          id="iconTestingBackButton"
          label="Back"
          properties={ LCARS.ES_RECT_RND | LCARS.ES_LABEL_E }
          x={this.LEFT}
          y={this.TOP + LCARS.FONT_TITLE_SIZE + LCARS.LCARS_SPACE }
          handleClick={this.handleMenuBackButtonClick}
          icon={ICONS.LEFT_ARROW_IN_CIRCLE}
          iconLocation={LCARS.ES_LABEL_W}
        />

        <LCARSText
          id="navIconDescription"
          label="Navigation"
          x={280} y={80}
          properties={ LCARS.EF_SUBTITLE }
        />

        <LCARSIcon
          id="rightArrowIcon"
          icon={ICONS.RIGHT_ARROW_IN_CIRCLE}
          x={310} y={130}
          //enabled={false}
        />

        <LCARSIcon
          id="leftArrowIcon"
          icon={ICONS.LEFT_ARROW_IN_CIRCLE}
          x={310} y={190}
          //enabled={false}
        />

        <LCARSText
          id="networkIconDescription"
          label="Networking"
          x={450} y={80}
          properties={ LCARS.EF_SUBTITLE }
        />

        <LCARSIcon
          id="networkIcon"
          icon={ICONS.NETWORK_CONNECTION}
          x={490} y={130}
        />

        <LCARSIcon
          id="networkNegIcon"
          icon={ICONS.NETWORK_CONNECTION_NEGATIVE}
          x={490} y={190}
        />

        <LCARSText
          id="powerIconDescription"
          label="Power"
          x={630} y={80}
          properties={ LCARS.EF_SUBTITLE }
        />

        <LCARSIcon
          id="powerButtonIcon"
          icon={ICONS.POWER_BUTTON_SVG}
          x={640} y={130}
        />

        <LCARSIcon
          id="batteryFullIcon"
          icon={ICONS.BATTERY_FULL}
          x={640} y={190}
        />

        <LCARSIcon
          id="batteryHalfIcon"
          icon={ICONS.BATTERY_HALF}
          x={640} y={250}
        />

        <LCARSIcon
          id="batteryEmptyIcon"
          icon={ICONS.BATTERY_EMPTY}
          x={640} y={310}
        />

        <LCARSIcon
          id="batteryOnACIcon"
          icon={ICONS.BATTERY_ON_AC}
          x={640} y={370}
        />

        <LCARSIcon
          id="batteryOnACNegIcon"
          icon={ICONS.BATTERY_ON_AC_NEGATIVE}
          x={640} y={430}
        />

        <LCARSText
          id="weatherIconDescription"
          label="Weather"
          x={750} y={80}
          properties={ LCARS.EF_SUBTITLE }
        />

      </LCARSBasicScreen>
    );
  }


  private handleMenuBackButtonClick(e: any) {
    e.preventDefault();
    history.back();
  }

}

export default IconTestPage;
