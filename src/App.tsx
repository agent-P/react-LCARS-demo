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
          label="Icon Test"
          x={this.LEFT}
          y={this.TOP + LCARS.LCARS_CORNER_HEIGHT + LCARS.LCARS_BTN_HEIGHT + 2*LCARS.LCARS_SPACE}
          handleClick={this.handleMenuItemTwo}
        />

        <LCARSButton 
          id="menuItemTwoButton"
          label="Color Palette Test"
          x={this.LEFT}
          y={this.TOP + LCARS.LCARS_CORNER_HEIGHT + 2*LCARS.LCARS_BTN_HEIGHT + 3*LCARS.LCARS_SPACE}
          handleClick={this.handleMenuItemThree}
        />


      </LCARSMenuScreen>
    );
  }


  private handleMenuItemOne(e: any) {
    e.preventDefault();
    this.setState({ navigate: true, path: "/componenttestpage" });
  }

  private handleMenuItemTwo(e: any) {
    e.preventDefault();
    this.setState({ navigate: true, path: "/icontestpage" });
  }

  private handleMenuItemThree(e: any) {
    e.preventDefault();
    this.setState({ navigate: true, path: "/colorpalettetestpage" });
  }

}

export default App;
