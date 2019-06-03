import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import ComponentTestPage from './ComponentTestPage'
import IconTestPage from './IconTestPage'
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
        <Route exact path="/" component={App} />
        <Route exact path="/componenttestpage" component={ComponentTestPage} />
        <Route exact path="/icontestpage" component={IconTestPage} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
