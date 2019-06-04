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


class ColorPaletteTestPage extends Component {

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
        id="Color Palette Screen"
        width={this.width} height={this.height}
        title="LCARS Color Palette Testing"
        //vbWidth={2*1920} vbHeight={2*1200}
        //color={LCARS.EC_L_BLUE}
        //fontSize={LCARS.EF_SUBTITLE}
        >

        <LCARSButton 
          id="colorPaletteBackButton"
          label="Back"
          properties={ LCARS.ES_RECT_RND | LCARS.ES_LABEL_E }
          x={this.LEFT}
          y={this.TOP + LCARS.FONT_TITLE_SIZE + LCARS.LCARS_SPACE }
          handleClick={this.handleMenuBackButtonClick}
          icon={ICONS.LEFT_ARROW_IN_CIRCLE}
          iconLocation={LCARS.ES_LABEL_W}
        />

        <LCARSRectangle
          id="colorPaletteOrangeRect"
          label="White"
          x={300} y={70}
          color={LCARS.EC_WHITE}
        />

        <LCARSRectangle
          id="colorPaletteLBlueRect"
          label="Light Blue"
          x={300} y={70 + LCARS.LCARS_BTN_HEIGHT + LCARS.LCARS_SPACE}
          color={LCARS.EC_L_BLUE}
        />

        <LCARSRectangle
          id="colorPaletteMBlueRect"
          label="Medium Blue"
          x={300} y={70 + 2*LCARS.LCARS_BTN_HEIGHT + 2*LCARS.LCARS_SPACE}
          color={LCARS.EC_M_BLUE}
        />

        <LCARSRectangle
          id="colorPaletteBlueRect"
          label="Blue"
          x={300} y={70 + 3*LCARS.LCARS_BTN_HEIGHT + 3*LCARS.LCARS_SPACE}
          color={LCARS.EC_BLUE}
        />

        <LCARSRectangle
          id="colorPaletteDBlueRect"
          label="Dark Blue"
          x={300} y={70 + 4*LCARS.LCARS_BTN_HEIGHT + 4*LCARS.LCARS_SPACE}
          color={LCARS.EC_D_BLUE}
        />

        <LCARSRectangle
          id="colorPaletteYellowRect"
          label="Yellow"
          x={300} y={70 + 5*LCARS.LCARS_BTN_HEIGHT + 5*LCARS.LCARS_SPACE}
          color={LCARS.EC_YELLOW}
        />

        <LCARSRectangle
          id="colorPaletteOrangeRect"
          label="Orange (default)"
          x={300} y={70 + 6*LCARS.LCARS_BTN_HEIGHT + 6*LCARS.LCARS_SPACE}
        />

        <LCARSRectangle
          id="colorPaletteRedRect"
          label="Red"
          x={300} y={70 + 7*LCARS.LCARS_BTN_HEIGHT + 7*LCARS.LCARS_SPACE}
          color={LCARS.EC_RED}
        />

        <LCARSRectangle
          id="colorPaletteWhiteeRectDis"
          label="White"
          x={500} y={70}
          color={LCARS.EC_WHITE}
          enabled={false}
        />

        <LCARSRectangle
          id="colorPaletteLBlueRectDis"
          label="Light Blue"
          x={500} y={70 + LCARS.LCARS_BTN_HEIGHT + LCARS.LCARS_SPACE}
          color={LCARS.EC_L_BLUE}
          enabled={false}
        />

        <LCARSRectangle
          id="colorPaletteMBlueRectDis"
          label="Medium Blue"
          x={500} y={70 + 2*LCARS.LCARS_BTN_HEIGHT + 2*LCARS.LCARS_SPACE}
          color={LCARS.EC_M_BLUE}
          enabled={false}
        />

        <LCARSRectangle
          id="colorPaletteBlueRectDis"
          label="Blue"
          x={500} y={70 + 3*LCARS.LCARS_BTN_HEIGHT + 3*LCARS.LCARS_SPACE}
          color={LCARS.EC_BLUE}
          enabled={false}
        />

        <LCARSRectangle
          id="colorPaletteDBlueRectDis"
          label="Dark Blue"
          x={500} y={70 + 4*LCARS.LCARS_BTN_HEIGHT + 4*LCARS.LCARS_SPACE}
          color={LCARS.EC_D_BLUE}
          enabled={false}
        />

        <LCARSRectangle
          id="colorPaletteYellowRectDis"
          label="Yellow"
          x={500} y={70 + 5*LCARS.LCARS_BTN_HEIGHT + 5*LCARS.LCARS_SPACE}
          color={LCARS.EC_YELLOW}
          enabled={false}
        />

        <LCARSRectangle
          id="colorPaletteOrangeRectDis"
          label="Orange (default)"
          x={500} y={70 + 6*LCARS.LCARS_BTN_HEIGHT + 6*LCARS.LCARS_SPACE}
          enabled={false}
        />

        <LCARSRectangle
          id="colorPaletteRedRectDis"
          label="Red"
          x={500} y={70 + 7*LCARS.LCARS_BTN_HEIGHT + 7*LCARS.LCARS_SPACE}
          color={LCARS.EC_RED}
          enabled={false}
        />
      </LCARSBasicScreen>
    );
  }


  private handleMenuBackButtonClick(e: any) {
    e.preventDefault();
    history.back();
  }

}

export default ColorPaletteTestPage;
