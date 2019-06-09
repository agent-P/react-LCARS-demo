import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LCARSButton from './components/LCARSButton';
import LCARSCorner from './components/LCARSCorner';
import LCARS from './components/LCARS';
import ICONS from './resources/ICONS';
import LCARSText from './components/LCARSText';
import LCARSTextArea from './components/LCARSTextArea';
import LCARSRectangle from './components/LCARSRectangle';
import LCARSBasicScreen from './components/LCARSBasicScreen';
import LCARSIcon from './components/LCARSIcon';
import { Redirect } from 'react-router'


class TextTestPage extends Component {

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

  protected scrollingLineCount: number;

  constructor(props: any) {
    super(props);

    this.LEFT = 50;
    this.TOP = 5;
    this.RIGHT  = 50;
    this.BOTTOM = 20;

    this.width = 1920;
    this.height = 1200;

    this.scrollingLineCount = 0;

    this.handleMenuBackButtonClick = this.handleMenuBackButtonClick.bind(this);
    this.handleAddLineButtonClick = this.handleAddLineButtonClick.bind(this);
  }
 
  render() {
    const navigate = this.state.navigate;
    const path = this.state.path;

    if (navigate) {
      return <Redirect to={path} push={true} />
    }

    return (
      <LCARSBasicScreen 
        id="textTestingScreen"
        width={this.width} height={this.height}
        title="LCARS Text Testing"
        >

        <LCARSButton 
          id="textTestingBackButton"
          label="Back"
          properties={ LCARS.ES_RECT_RND | LCARS.ES_LABEL_E }
          x={this.LEFT}
          y={this.TOP + LCARS.FONT_TITLE_SIZE + LCARS.LCARS_SPACE }
          handleClick={this.handleMenuBackButtonClick}
          icon={ICONS.LEFT_ARROW_IN_CIRCLE}
          iconLocation={LCARS.ES_LABEL_W}
        />

        <LCARSText 
          id="testTitleText"
          label="LCARS TITLE text"
          properties={ LCARS.EF_TITLE }
          x={300} y={150}
        />

        <LCARSText 
          id="testSubTitleText"
          label="LCARS SUBTITLE text"
          properties={ LCARS.EF_SUBTITLE }
          x={300} y={220}
        />

        <LCARSText 
          id="testButtonText"
          label="LCARS BUTTON text"
          properties={ LCARS.EF_BUTTON }
          x={300} y={270}
        />

        <LCARSText 
          id="testBodyText"
          label="LCARS BODY text - (NORMAL text)"
          properties={ LCARS.EF_BODY }
          x={300} y={310}
        />

        <LCARSText 
          id="testTinyText"
          label="LCARS TINY text"
          properties={ LCARS.EF_TINY }
          x={300} y={340}
        />

        <LCARSText 
          id="testLowerCaseText"
          label="Lower case characters: abcdefghijklmnopqrstuvwxyz1234567890-=,./;'[]`"
          properties={ LCARS.EF_TITLE }
          x={150} y={800}
        />

        <LCARSRectangle
          id="testLowerCaseTextRectWidth"
          x={150} y={870}
          width={LCARS.getTextWidth3("Lower case characters: abcdefghijklmnopqrstuvwxyz1234567890-=,./;'[]`", 60)} height={2}
        />

        <LCARSText 
          id="testUpperCaseText"
          label={`Upper case characters: ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+<>?:\\{}|~"`}
          properties={ LCARS.EF_TITLE }
          x={150} y={900}
        />

        <LCARSRectangle
          id="testUpperCaseTextRectWidth"
          x={150} y={970}
          width={LCARS.getTextWidth3(`Upper case characters: ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+<>?:\\{}|~"`, 60)} height={2}
        />

        <LCARSText 
          id="testTextAreaWrapText"
          label="Text Area wrap test"
          properties={ LCARS.EF_SUBTITLE }
          x={800} y={150}
        />

        <LCARSRectangle
          id="testTextAreaWrapTextRect"
          x={800} y={185}
          width={400} height={2}
        />

        <LCARSText 
          id="testTextAreaScrollText"
          label="Scrolling Text Area test"
          properties={ LCARS.EF_SUBTITLE }
          x={1300} y={150}
        />

        <LCARSRectangle
          id="testTextAreaScrollTextRect"
          x={1300} y={185}
          width={400} height={2}
        />

        <LCARSButton
          id="testTextAreaScrollAddLineButton"
          label="Add Line"
          x={1710} y={185}
          properties={LCARS.ES_RECT_RND | LCARS.ES_LABEL_C}
          handleClick={this.handleAddLineButtonClick}
        />

        <LCARSTextArea
          id="testTextAreaWrap"
          x={1300} y={200}
          width={400} 
          rows={20}
          scroll={false}
        />

      </LCARSBasicScreen>
    );
  }


  private handleMenuBackButtonClick(e: any) {
    e.preventDefault();
    history.back();
  }

  private handleAddLineButtonClick(e: any) {
    e.preventDefault();

    var messageText: string = '{"text": "Line:  ' + this.scrollingLineCount++ + '  of message text..."}';
    
    var addLineEvent = new CustomEvent('appendLine', {detail: messageText});
    
    var element = document.getElementById("testTextAreaWrap");
    if(element) {
      element.dispatchEvent(addLineEvent);
    }
    
  }

}

export default TextTestPage;
