import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import ComponentTestPage from './testpages/ComponentTestPage'
import IconTestPage from './testpages/IconTestPage'
import ColorPaletteTestPage from './testpages/ColorPaletteTestPage'
import ShapesTestPage from './testpages/ShapesTestPage'
import ButtonsTestPage from './testpages/ButtonsTestPage'
import TextTestPage from './testpages/TextTestPage'
import IndicatorTestPage from './testpages/IndicatorTestPage'
import * as serviceWorker from './serviceWorker';
import ClockTestPage from './testpages/ClockTestPage';
import DigitalClockTestPage from './testpages/DigitalClockTestPage';
import CalendarTestPage from './testpages/CalendarTestPage';
import AnalogClockTestPage from './testpages/AnalogClockTestPage';

const routing = (
    <Router>
        <div>
        <Route exact path="/" component={App} />
        <Route exact path="/componenttestpage" component={ComponentTestPage} />
        <Route exact path="/icontestpage" component={IconTestPage} />
        <Route exact path="/colorpalettetestpage" component={ColorPaletteTestPage} />
        <Route exact path="/shapestestpage" component={ShapesTestPage} />
        <Route exact path="/buttonstestpage" component={ButtonsTestPage} />
        <Route exact path="/texttestpage" component={TextTestPage} />
        <Route exact path="/indicatortestpage" component={IndicatorTestPage} />
        <Route exact path="/clocktestpage" component={ClockTestPage} />
        <Route exact path="/digitalclocktestpage" component={DigitalClockTestPage} />
        <Route exact path="/analogclocktestpage" component={AnalogClockTestPage} />
        <Route exact path="/calendartestpage" component={CalendarTestPage} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
