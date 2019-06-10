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
import LCARSIndicator from './components/LCARSIndicator';


class IndicatorTestPage extends Component {

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
        id="indicatorTestingScreen"
        width={this.width} height={this.height}
        title="LCARS Indicator Testing"
        >

        <LCARSButton 
          id="indicatorTestingBackButton"
          label="Back"
          properties={ LCARS.ES_RECT_RND | LCARS.ES_LABEL_E }
          x={this.LEFT}
          y={this.TOP + LCARS.FONT_TITLE_SIZE + LCARS.LCARS_SPACE }
          handleClick={this.handleMenuBackButtonClick}
          icon={ICONS.LEFT_ARROW_IN_CIRCLE}
          iconLocation={LCARS.ES_LABEL_W}
        />

        <LCARSIndicator
          id="indicatorTestComponent1"
          label="Test Indicator"
          x={420} y={300}
        />

        <LCARSButton 
          id="indicatortestOnBlinkButton"
          label="On Blink"
          properties={ LCARS.ES_RECT_RND | LCARS.ES_LABEL_C }
          x={200}
          y={300}
          handleClick={this.handleOnBlink}
        />

        <LCARSButton 
          id="indicatortestOffBlinkButton"
          label="Off Blink"
          properties={ LCARS.ES_RECT_RND | LCARS.ES_LABEL_C }
          x={200}
          y={370}
          handleClick={this.handleOffBlink}
        />

        <LCARSButton 
          id="warningBlinkingOnButton"
          label="WarningBlinking"
          properties={ LCARS.ES_RECT_RND | LCARS.ES_LABEL_C }
          x={200}
          y={440}
          handleClick={this.handleWarningBlinking}
        />

        <LCARSButton 
          id="errorBlinkingOffButton"
          label="Error Blinking"
          properties={ LCARS.ES_RECT_RND | LCARS.ES_LABEL_C }
          x={200}
          y={510}
          handleClick={this.handleErrorBlinking}
        />

        <LCARSButton 
          id="errorBlinkingOffButton"
          label="Blinking Off"
          properties={ LCARS.ES_RECT_RND | LCARS.ES_LABEL_C }
          x={200}
          y={580}
          handleClick={this.handleBlinkingOff}
        />

      </LCARSBasicScreen>
    );
  }


  private handleMenuBackButtonClick(e: any) {
    e.preventDefault();
    history.back();
  }


  private handleOnBlink(e: any) {
    var testEvent = new CustomEvent('onBlink');
    
    var element = document.getElementById("indicatorTestComponent1");
    if(element) {
      element.dispatchEvent(testEvent);
    }    
  }

  private handleOffBlink(e: any) {
    var testEvent = new CustomEvent('offBlink');
    
    var element = document.getElementById("indicatorTestComponent1");
    if(element) {
      element.dispatchEvent(testEvent);
    }    
  }

  private handleBlinkingOff(e: any) {
    var testEvent = new CustomEvent('blinking', {detail: '{"enabled": "false"}'});
    
    var element = document.getElementById("indicatorTestComponent1");
    if(element) {
      element.dispatchEvent(testEvent);
    }    
  }

  private handleWarningBlinking(e: any) {
    var testEvent = new CustomEvent('warning');
    
    var element = document.getElementById("indicatorTestComponent1");
    if(element) {
      element.dispatchEvent(testEvent);
    }    
  }

  private handleErrorBlinking(e: any) {
    var testEvent = new CustomEvent('error');
    
    var element = document.getElementById("indicatorTestComponent1");
    if(element) {
      element.dispatchEvent(testEvent);
    }    
  }

 
}

export default IndicatorTestPage;
