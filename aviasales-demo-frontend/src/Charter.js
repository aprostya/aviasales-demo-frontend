import './TicketHeader.css';
import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import styled from 'styled-components';
import './style.css';


const block = 'block';
const none = 'none';

function Charter(props) {
  return <span {...props} className="chart-label" children="Чартер"/>;
}

function CharterCheck(props) {
  const isCharter = props.isCharter;
  if (isCharter) {
    return <Charter style={{ display: block }} />;
  }
  return <Charter style={{ display: none }} />;
}


export default CharterCheck;
