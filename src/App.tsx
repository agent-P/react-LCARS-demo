import React, { Component } from 'react';
import './App.css';
import LCARSButton from './components/LCARSButton';
import LCARS from './components/LCARS';
import LCARSRectangle from './components/LCARSRectangle';
import LCARSMenuScreen from './components/LCARSMenuScreen';
import { Redirect } from 'react-router'


class App extends Component {

  state = {
    navigate: false,
    path: ""
  }

  protected LEFT: number;
  protected TOP: number;
  protected RIGHT: number;
  protected BOTTOM: number;

  constructor(props: any) {
    super(props);

    this.LEFT = 10;
    this.TOP = 5;
    this.RIGHT  = 10;
    this.BOTTOM = 20;

    this.handleMenuItemOne = this.handleMenuItemOne.bind(this);
    this.handleMenuItemTwo = this.handleMenuItemTwo.bind(this);
    this.handleMenuItemThree = this.handleMenuItemThree.bind(this);
    this.handleMenuItemFour = this.handleMenuItemFour.bind(this);
    this.handleMenuItemFive = this.handleMenuItemFive.bind(this);
    this.handleMenuItemSix = this.handleMenuItemSix.bind(this);
    this.handleMenuItemSeven = this.handleMenuItemSeven.bind(this);
    this.handleMenuItemEight = this.handleMenuItemEight.bind(this);
    this.handleMenuItemNine = this.handleMenuItemNine.bind(this);
    this.handleMenuItemTen = this.handleMenuItemTen.bind(this);
  }
 
  render() {
    const navigate = this.state.navigate;
    const path = this.state.path;

    // here is the important part
    if (navigate) {
      return <Redirect to={path} push={true} />
    }

    return (
      <LCARSMenuScreen 
        id="menuScreen"
        width={1920} height={1200}
        title="LCARS Component Testing"
        >

        <LCARSButton 
          id="menuItemOneButton"
          label="Shapes Test"
          x={this.LEFT}
          y={this.TOP + LCARS.LCARS_CORNER_HEIGHT + LCARS.LCARS_SPACE}
          handleClick={this.handleMenuItemOne}
        />

        <LCARSButton 
          id="menuItemTwoButton"
          label="Icon Test"
          x={this.LEFT}
          y={this.TOP + LCARS.LCARS_CORNER_HEIGHT + LCARS.LCARS_BTN_HEIGHT + 2*LCARS.LCARS_SPACE}
          handleClick={this.handleMenuItemTwo}
        />

        <LCARSButton 
          id="menuItemThreeButton"
          label="Color Palette Test"
          x={this.LEFT}
          y={this.TOP + LCARS.LCARS_CORNER_HEIGHT + 2*LCARS.LCARS_BTN_HEIGHT + 3*LCARS.LCARS_SPACE}
          handleClick={this.handleMenuItemThree}
        />

        <LCARSButton 
          id="menuItemFourButton"
          label="Buttons Test"
          x={this.LEFT}
          y={this.TOP + LCARS.LCARS_CORNER_HEIGHT + 3*LCARS.LCARS_BTN_HEIGHT + 4*LCARS.LCARS_SPACE}
          handleClick={this.handleMenuItemFour}
        />

        <LCARSButton 
          id="menuItemFiveButton"
          label="Text Test"
          x={this.LEFT}
          y={this.TOP + LCARS.LCARS_CORNER_HEIGHT + 4*LCARS.LCARS_BTN_HEIGHT + 5*LCARS.LCARS_SPACE}
          handleClick={this.handleMenuItemFive}
        />

        <LCARSButton 
          id="menuItemSixButton"
          label="Indicator Test"
          x={this.LEFT}
          y={this.TOP + LCARS.LCARS_CORNER_HEIGHT + 5*LCARS.LCARS_BTN_HEIGHT + 6*LCARS.LCARS_SPACE}
          handleClick={this.handleMenuItemSix}
        />

        <LCARSButton 
          id="menuItemSevenButton"
          label="Clock Test"
          x={this.LEFT}
          y={this.TOP + LCARS.LCARS_CORNER_HEIGHT + 6*LCARS.LCARS_BTN_HEIGHT + 7*LCARS.LCARS_SPACE}
          handleClick={this.handleMenuItemSeven}
        />

        <LCARSButton 
          id="menuItemEightButton"
          label="Digital Clock Test"
          x={this.LEFT}
          y={this.TOP + LCARS.LCARS_CORNER_HEIGHT + 7*LCARS.LCARS_BTN_HEIGHT + 8*LCARS.LCARS_SPACE}
          handleClick={this.handleMenuItemEight}
        />

        <LCARSButton 
          id="menuItemNineButton"
          label="Analog Clock Test"
          x={this.LEFT}
          y={this.TOP + LCARS.LCARS_CORNER_HEIGHT + 8*LCARS.LCARS_BTN_HEIGHT + 9*LCARS.LCARS_SPACE}
          handleClick={this.handleMenuItemNine}
        />

        <LCARSButton 
          id="menuItemTenButton"
          label="Calendar Test"
          x={this.LEFT}
          y={this.TOP + LCARS.LCARS_CORNER_HEIGHT + 9*LCARS.LCARS_BTN_HEIGHT + 10*LCARS.LCARS_SPACE}
          handleClick={this.handleMenuItemTen}
        />

        <LCARSRectangle
          id="appMenuSpacer"
          label=""
          properties={LCARS.ES_LABEL_NE}
          x={this.LEFT}
          y={this.TOP + LCARS.LCARS_CORNER_HEIGHT + 10*LCARS.LCARS_BTN_HEIGHT + 11*LCARS.LCARS_SPACE}
          height={1200 - (this.TOP + 2*LCARS.LCARS_CORNER_HEIGHT + 10*LCARS.LCARS_BTN_HEIGHT + 12*LCARS.LCARS_SPACE + this.BOTTOM)}
        />

      </LCARSMenuScreen>
    );
  }


  private handleMenuItemOne(e: any) {
    e.preventDefault();
    this.setState({ navigate: true, path: "/shapestestpage" });
  }

  private handleMenuItemTwo(e: any) {
    e.preventDefault();
    this.setState({ navigate: true, path: "/icontestpage" });
  }

  private handleMenuItemThree(e: any) {
    e.preventDefault();
    this.setState({ navigate: true, path: "/colorpalettetestpage" });
  }

  private handleMenuItemFour(e: any) {
    e.preventDefault();
    this.setState({ navigate: true, path: "/buttonstestpage" });
  }

  private handleMenuItemFive(e: any) {
    e.preventDefault();
    this.setState({ navigate: true, path: "/texttestpage" });
  }

  private handleMenuItemSix(e: any) {
    e.preventDefault();
    this.setState({ navigate: true, path: "/indicatortestpage" });
  }

  private handleMenuItemSeven(e: any) {
    e.preventDefault();
    this.setState({ navigate: true, path: "/clocktestpage" });
  }

  private handleMenuItemEight(e: any) {
    e.preventDefault();
    this.setState({ navigate: true, path: "/digitalclocktestpage" });
  }

  private handleMenuItemNine(e: any) {
    e.preventDefault();
    this.setState({ navigate: true, path: "/analogclocktestpage" });
  }

  private handleMenuItemTen(e: any) {
    e.preventDefault();
    this.setState({ navigate: true, path: "/calendartestpage" });
  }
}

export default App;
