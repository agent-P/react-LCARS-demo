import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LCARSButton from './components/LCARSButton';
import LCARSCorner from './components/LCARSCorner';
import LCARS from './components/LCARS';
import ICONS from './resources/ICONS';
import LCARSText from './components/LCARSText';
import LCARSRectangle from './components/LCARSRectangle';
import LCARSScreen from './components/LCARSScreen';

interface IState {
  label: string;
  blinking: boolean;
  visible: string;
}

class App extends Component {
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
    var testEvent = new CustomEvent('fadeIn', {detail: '{"duration": "' + 10 + '"}'});
    
    var element = document.getElementById("testButton");
    if(element) {
      element.dispatchEvent(testEvent);
    }    
  }

  private handleFadeOut(e: any) {
    var testEvent = new CustomEvent('fadeOut', {detail: '{"duration": "' + 9 + '"}'});
    
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
          height={1}
          properties={ LCARS.ES_RECT_RND | LCARS.ES_LABEL_NE }
          auxLabel={"AUX"}
          auxLabelProperties={LCARS.EC_BLUE}
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
          id="testNormalText"
          label="NORMAL text"
          //width={300}
          properties={ LCARS.EF_NORMAL }
          x={330} y={20}
        />

        <LCARSRectangle 
          id="testRextangle"
          label="Rect"
          x={330} y={150}
        />

    

      <a href="#" onClick={this.handleBlinkingOn}>
          Blinking On
        </a><br/>
        <a href="#" onClick={this.handleBlinkingOff}>
          Blinking Off
        </a><br/>
        <a href="#" onClick={this.handleOnBlink}>
          On Blink
        </a><br/>
        <a href="#" onClick={this.handleOffBlink}>
          Off Blink
        </a><br/>
        <a href="#" onClick={this.handleFadeOut}>
          Fade Out
        </a><br/>
        <a href="#" onClick={this.handleFadeIn}>
          Fade In
        </a><br/>


     
       
      </LCARSScreen>
    );
  }
}

export default App;
