import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import ComponentTestPage from './ComponentTestPage'
import IconTestPage from './IconTestPage'
import ColorPaletteTestPage from './ColorPaletteTestPage'
import ShapesTestPage from './ShapesTestPage'
import ButtonsTestPage from './ButtonsTestPage'
import TextTestPage from './TextTestPage'
import IndicatorTestPage from './IndicatorTestPage'
import * as serviceWorker from './serviceWorker';

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
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
