import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouterDefinition from './routerDefinition'
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(<RouterDefinition/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
