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

    this.handleMenuItemOne = this.handleMenuItemOne.bind(this);
    this.handleMenuItemTwo = this.handleMenuItemTwo.bind(this);
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
        id="menuScreen"
        width={this.width} height={this.height}
        title="LCARS Icon Testing"
        //vbWidth={2*1920} vbHeight={2*1200}
        //color={LCARS.EC_L_BLUE}
        //fontSize={LCARS.EF_SUBTITLE}
        >

        <LCARSButton 
          id="menuItemOneButton"
          label="Component Test"
          x={this.LEFT}
          y={this.TOP + LCARS.LCARS_CORNER_HEIGHT + LCARS.LCARS_SPACE}
          handleClick={this.handleMenuItemOne}
        />

        <LCARSButton 
          id="menuItemTwoButton"
          label="Back"
          properties={ LCARS.ES_RECT_RND | LCARS.ES_LABEL_E }
          x={this.width - this.RIGHT - LCARS.LCARS_BTN_WIDTH}
          y={this.height - this.BOTTOM - LCARS.FONT_TITLE_SIZE - LCARS.LCARS_SPACE - LCARS.LCARS_BTN_HEIGHT}
          handleClick={this.handleMenuItemTwo}
          icon={ICONS.LEFT_ARROW_IN_CIRCLE}
          iconLocation={LCARS.ES_LABEL_W}
        />

      </LCARSBasicScreen>
    );
  }


  private handleMenuItemOne(e: any) {
    e.preventDefault();
    this.setState({ navigate: true, path: "/componenttestpage" });
    
  }

  private handleMenuItemTwo(e: any) {
    e.preventDefault();
    history.back();
  }

}

export default IconTestPage;
