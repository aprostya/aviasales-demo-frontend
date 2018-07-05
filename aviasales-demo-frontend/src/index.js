import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'normalize.css';
import App from './App';
import {render} from "react-dom";
import registerServiceWorker from './registerServiceWorker';
import HeaderComponent from './TicketHeader'
// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<HeaderComponent/>, document.getElementById('header'));
registerServiceWorker();
