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
          x={420}
          y={300}
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
          x={200}
          y={300}
          handleClick={this.handleBlinkingOn}
          visible={this.state.visible}
        />

        <LCARSButton 
          id="blinkingOffButton"
          label="Blinking Off"
          x={200}
          y={370}
          handleClick={this.handleBlinkingOff}
          visible={this.state.visible}
        />

        <LCARSButton 
          id="onBlinkButton"
          label="On Blink"
          x={200}
          y={440}
          handleClick={this.handleOnBlink}
          visible={this.state.visible}
        />

        <LCARSButton 
          id="offBlinkButton"
          label="Off Blink"
          x={200}
          y={510}
          handleClick={this.handleOffBlink}
          visible={this.state.visible}
        />

        <LCARSButton 
          id="fadeOutButton"
          label="Fade Out"
          x={200}
          y={580}
          handleClick={this.handleFadeOut}
          visible={this.state.visible}
        />

        <LCARSButton 
          id="fadeInButton"
          label="Fade In"
          x={200}
          y={650}
          handleClick={this.handleFadeIn}
          visible={this.state.visible}
        />

        <LCARSButton 
          id="testButtonDisabledRound"
          label="Disabled Button"
          x={620}
          y={300}
          properties={LCARS.ES_RECT_RND | LCARS.ES_LABEL_C}
          enabled={false}
        />

        <LCARSButton 
          id="testButtonDisabled"
          label="Disabled Button"
          x={620}
          y={370}
          enabled={false}
        />

        <LCARSButton 
          id="testButtonStatic"
          label="Static Button"
          x={620}
          y={440}
          static={true}
        />

        <LCARSButton 
          id="testButton1"
          label="Button Size 1"
          x={820}
          y={200}
        />

        <LCARSButton 
          id="testButton2"
          label="Button Size 2"
          x={820 + 1*LCARS.LCARS_BTN_WIDTH + 1*LCARS.LCARS_BTN_SPACING}
          y={200}
          height={2}
        />

        <LCARSButton 
          id="testButton3"
          label="Button Size 3"
          x={820 + 2*LCARS.LCARS_BTN_WIDTH + 2*LCARS.LCARS_BTN_SPACING}
          y={200}
          height={3}
        />

        <LCARSButton 
          id="testButton4"
          label="Button Size 4"
          x={820 + 3*LCARS.LCARS_BTN_WIDTH + 3*LCARS.LCARS_BTN_SPACING}
          y={200}
          height={4}
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
