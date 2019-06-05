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


class ButtonsTestPage extends Component {

  state = {
    label: "TEST",
    blinking: false,
    visible: "visible",
    navigate: false,
    path: ""
  }

  testEvent: any;


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

    this.handleClick = this.handleClick.bind(this);
    this.handleBlinkingOn = this.handleBlinkingOn.bind(this);
    this.handleBlinkingOff = this.handleBlinkingOff.bind(this);
    this.handleOnBlink = this.handleOnBlink.bind(this);
    this.handleOffBlink = this.handleOffBlink.bind(this);
    this.handleFadeOut = this.handleFadeOut.bind(this);
    this.handleFadeIn = this.handleFadeIn.bind(this);

  }
 
  render() {
    const navigate = this.state.navigate;
    const path = this.state.path;

    if (navigate) {
      return <Redirect to={path} push={true} />
    }

    return (
      <LCARSBasicScreen 
        id="buttonTestingScreen"
        width={this.width} height={this.height}
        title="LCARS Buttons Testing"
        >

        <LCARSButton 
          id="buttonTestingBackButton"
          label="Back"
          properties={ LCARS.ES_RECT_RND | LCARS.ES_LABEL_E }
          x={this.LEFT}
          y={this.TOP + LCARS.FONT_TITLE_SIZE + LCARS.LCARS_SPACE }
          handleClick={this.handleMenuBackButtonClick}
          icon={ICONS.LEFT_ARROW_IN_CIRCLE}
          iconLocation={LCARS.ES_LABEL_W}
        />

        <LCARSButton 
          id="testButton"
          //static={true}
          //enabled={false}
          label={this.state.label}
          x={375}
          y={150}
          properties={ LCARS.ES_RECT_RND | LCARS.ES_LABEL_NE }
          auxLabel={"AUX"}
          auxLabelProperties={LCARS.EC_BLUE | LCARS.EF_BODY}
          handleClick={this.handleClick}
          icon={ICONS.POWER_BUTTON_SVG}
          iconLocation={LCARS.ES_LABEL_W}
          visible={this.state.visible}
        />

        <LCARSButton 
          id="blinkingOnButton"
          label="Blinking On"
          x={this.LEFT}
          y={210}
          handleClick={this.handleBlinkingOn}
          visible={this.state.visible}
        />

        <LCARSButton 
          id="blinkingOffButton"
          label="Blinking Off"
          x={this.LEFT}
          y={274}
          handleClick={this.handleBlinkingOff}
          visible={this.state.visible}
        />

        <LCARSButton 
          id="onBlinkButton"
          label="On Blink"
          x={this.LEFT}
          y={338}
          handleClick={this.handleOnBlink}
          visible={this.state.visible}
        />

        <LCARSButton 
          id="offBlinkButton"
          label="Off Blink"
          x={this.LEFT}
          y={402}
          handleClick={this.handleOffBlink}
          visible={this.state.visible}
        />

        <LCARSButton 
          id="fadeOutButton"
          label="Fade Out"
          x={this.LEFT}
          y={466}
          handleClick={this.handleFadeOut}
          visible={this.state.visible}
        />

        <LCARSButton 
          id="fadeInButton"
          label="Fade In"
          x={this.LEFT}
          y={530}
          handleClick={this.handleFadeIn}
          visible={this.state.visible}
        />

      </LCARSBasicScreen>
    );
  }


  private handleMenuBackButtonClick(e: any) {
    e.preventDefault();
    history.back();
  }

  private handleFadeIn(e: any) {
    var testEvent = new CustomEvent('fadeIn', {detail: '{"duration": "' + 3 + '"}'});
    
    var element = document.getElementById("testButton");
    if(element) {
      element.dispatchEvent(testEvent);
    }    
  }

  private handleFadeOut(e: any) {
    var testEvent = new CustomEvent('fadeOut', {detail: '{"duration": "' + 3 + '"}'});
    
    var element = document.getElementById("testButton");
    if(element) {
      element.dispatchEvent(testEvent);
    }    
  }

  private handleBlinkingOn(e: any) {
    //this.testEvent = new CustomEvent('blinking', {detail: '{"enabled": "true", "color": "' + LCARS.EC_RED + '", "duration": "' + LCARS.BLINK_DURATION_ERROR + '"}'});
    this.testEvent = new CustomEvent('blinking', {detail: '{"enabled": "true"}'});
    
    var element = document.getElementById("testButton");
    if(element) {
      element.dispatchEvent(this.testEvent);
    }    
  }

  private handleBlinkingOff(e: any) {
    this.testEvent = new CustomEvent('blinking', {detail: '{"enabled": "false"}'});
    
    var element = document.getElementById("testButton");
    if(element) {
      element.dispatchEvent(this.testEvent);
    }    
  }

  private handleOnBlink(e: any) {
    this.testEvent = new CustomEvent('onBlink');
    
    var element = document.getElementById("testButton");
    if(element) {
      element.dispatchEvent(this.testEvent);
    }    
  }

  private handleOffBlink(e: any) {
    this.testEvent = new CustomEvent('offBlink');
    
    var element = document.getElementById("testButton");
    if(element) {
      element.dispatchEvent(this.testEvent);
    }    
  }

   private handleClick(e: any) {
    this.state.label = "CHANGED!!!";

    console.log(e.target);
    
    this.setState(this.state);
  }


}

export default ButtonsTestPage;
