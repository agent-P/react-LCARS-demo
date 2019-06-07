import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LCARSButton from './components/LCARSButton';
import LCARSCorner from './components/LCARSCorner';
import LCARS from './components/LCARS';
import ICONS from './resources/ICONS';
import LCARSText from './components/LCARSText';
import LCARSRectangle from './components/LCARSRectangle';
import LCARSMenuScreen from './components/LCARSMenuScreen';
import LCARSIcon from './components/LCARSIcon';
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

        <LCARSRectangle
          id="appMenuSpacer"
          label=""
          properties={LCARS.ES_LABEL_NE}
          x={this.LEFT}
          y={this.TOP + LCARS.LCARS_CORNER_HEIGHT + 6*LCARS.LCARS_BTN_HEIGHT + 7*LCARS.LCARS_SPACE}
          height={1200 - (this.TOP + 2*LCARS.LCARS_CORNER_HEIGHT + 6*LCARS.LCARS_BTN_HEIGHT + 8*LCARS.LCARS_SPACE + this.BOTTOM)}
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
}

export default App;
