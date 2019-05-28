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


  }

 
  render() {
    
    return (
      <LCARSBasicScreen 
        id="homeScreen"
        width={1920} height={1080}
        title="Home Screen Test"
        //color={LCARS.EC_L_BLUE}
        >


      </LCARSBasicScreen>
    );
  }
}

export default App;
