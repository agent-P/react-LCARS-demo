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

interface IState {
  label: string;
  blinking: boolean;
  visible: string;
}

class App extends Component {

  constructor(props: any) {
    super(props);

  }
 
  render() {
    
    return (
      <LCARSMenuScreen 
        id="menuScreen"
        width={1920} height={1200}
        title="Home Screen Test"
        //color={LCARS.EC_L_BLUE}
        //fontSize={LCARS.EF_SUBTITLE}
        >


      </LCARSMenuScreen>
    );
  }
}

export default App;
