import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'normalize.css';
import TransplantionComponent from './Transplantation';
import {render} from "react-dom";
import registerServiceWorker from './registerServiceWorker';
import FlyComponent from './FlyTime';
import HeaderComponent from './TicketHeader'
// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<HeaderComponent/>, document.getElementById('header'));
ReactDOM.render(<TransplantionComponent/>, document.getElementById('transplantation'));
// ReactDOM.render(<FlyComponent/>, document.getElementById('fly'));
registerServiceWorker();
