import React, { Component } from 'react';
import './App.css';
import LCARSButton from './components/LCARSButton';
import LCARSCorner from './components/LCARSCorner';
import LCARS from './components/LCARS';
import ICONS from './resources/ICONS';
import LCARSText from './components/LCARSText';
import LCARSRectangle from './components/LCARSRectangle';
import LCARSScreen from './components/LCARSScreen';
import LCARSIcon from './components/LCARSIcon';
import LCARSIndicator from './components/LCARSIndicator';

interface IState {
  label: string;
  blinking: boolean;
  visible: string;
}

class ComponentTestPage extends Component {
  state: IState

  testEvent: any;

  constructor(props: any) {
    super(props);

    this.state = {
      label: "TEST",
      blinking: false,
      visible: "visible",
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleBlinkingOn = this.handleBlinkingOn.bind(this);
    this.handleBlinkingOff = this.handleBlinkingOff.bind(this);
    this.handleOnBlink = this.handleOnBlink.bind(this);
    this.handleOffBlink = this.handleOffBlink.bind(this);
    this.handleFadeOut = this.handleFadeOut.bind(this);
    this.handleFadeIn = this.handleFadeIn.bind(this);
  
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

  render() {
    
    return (
      <LCARSScreen id="screenTest" width={1920} height={1550}>

      <LCARSCorner
          id = 'ULC'
          label = 'Upper Left'
          x={10}
          y={110}
          width={1000}
          height={1}
          properties={LCARS.ES_SHAPE_NW | LCARS.EC_ORANGE}
          visible={this.state.visible}
        />

        <LCARSButton 
          id="testButton"
          //static={true}
          //enabled={false}
          label={this.state.label}
          x={175}
          y={150}
          properties={ LCARS.ES_RECT_RND | LCARS.ES_LABEL_NE }
          auxLabel={"AUX"}
          auxLabelProperties={LCARS.EC_BLUE | LCARS.EF_BODY}
          handleClick={this.handleClick}
          icon={ICONS.POWER_BUTTON_SVG}
          iconLocation={LCARS.ES_LABEL_W}
          visible={this.state.visible}
        />

        <LCARSText 
          id="testTitleText"
          label="TITLE text"
          properties={ LCARS.EF_TITLE }
          x={480} y={20}
        />

        <LCARSText 
          id="testLowerCaseText"
          label="Lower case characters: abcdefghijklmnopqrstuvwxyz"
          properties={ LCARS.EF_TITLE }
          x={780} y={20}
        />

        <LCARSText 
          id="testNormalText"
          label="NORMAL text"
          //width={300}
          properties={ LCARS.EF_NORMAL }
          x={330} y={20}
        />

        <LCARSRectangle 
          id="testRectangle"
          label="Rect"
          x={330} y={150}
        />

        <LCARSIndicator 
          id="testIndicatorOff"
          label="indicator off"
          x={330} y={250}
          properties={ LCARS.ES_RECT_RND | LCARS.ES_LABEL_C }
        />

        <LCARSRectangle 
          id="testCustomRectangle"
          label="Custom Rectangle"
          height={30}
          width={300}
          x={530} y={150}
        />

        <LCARSIcon
          id="testIcon"
          icon={ICONS.RIGHT_ARROW_IN_CIRCLE}
          x={30} y={50}
          enabled={false}
        />

        <LCARSButton 
          id="blinkingOnButton"
          label="Blinking On"
          x={10}
          y={210}
          handleClick={this.handleBlinkingOn}
          visible={this.state.visible}
        />

        <LCARSButton 
          id="blinkingOffButton"
          label="Blinking Off"
          x={10}
          y={274}
          handleClick={this.handleBlinkingOff}
          visible={this.state.visible}
        />

        <LCARSButton 
          id="onBlinkButton"
          label="On Blink"
          x={10}
          y={338}
          handleClick={this.handleOnBlink}
          visible={this.state.visible}
        />

        <LCARSButton 
          id="offBlinkButton"
          label="Off Blink"
          x={10}
          y={402}
          handleClick={this.handleOffBlink}
          visible={this.state.visible}
        />

        <LCARSButton 
          id="fadeOutButton"
          label="Fade Out"
          x={10}
          y={466}
          handleClick={this.handleFadeOut}
          visible={this.state.visible}
        />

        <LCARSButton 
          id="fadeInButton"
          label="Fade In"
          x={10}
          y={530}
          handleClick={this.handleFadeIn}
          visible={this.state.visible}
        />

       
      </LCARSScreen>
    );
  }
}

export default ComponentTestPage;
