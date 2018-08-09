import './TicketHeader.css';
import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import styled from 'styled-components';
import Transplantation from './Transplantation';
import 'flexboxgrid2/flexboxgrid2.css';
import './style.css';
import 'normalize.css';
import MenuHeader from './MenuHeader';

function Price(props) {
  return <span {...props} />;
}

const ButtonOrange = styled(Buttons)`
    width: 194px;
    height: 58px;
    font-size: 20px;
    background-color: #FF9241;
    color: #fff;
    margin-left: 16px;
    font-weight: bold;
    font-family: inherit;
`; // вынести в общий компонент


function Buttons(props) {
  return <button {...props} />;
}
function LogoImg(props) {
  return <img {...props} />;
}

function ButtonSearchOrange(props) {
  return (
    <div className="buttons-container buttons-container--flight-block">
      <ButtonOrange className={props.className}>
        {props.btnDescr4}
      </ButtonOrange>
      <span className="operator-name">
        {props.operatorName}
      </span>
    </div>
  );
}


function Arrival(props) {
  return (
    <div className="range-container">
      <div className="arrives-container">
        <div className="arrivals-container__descr-group">
          <span className="arrive-descr arrive-descr--from">
            {props.timeFlyCity}
          </span>
          <span className="arrive-descr arrive-descr--to">
            {props.dateFly}
            {props.year}
            {','}
            {props.weekDay}
          </span>
        </div>
      </div>
    </div>
  );
}

function Slider(props) {
  return (
    <div className="scale scale--flight">
      <div className="bar" />
      <div className="range-toggle range-toggle-min" />
      <span className="airoport-name">
        {props.airoportName}
      </span>
      <div className="range-toggle range-toggle-max" />
      <span className="airoport-name">
        {props.airoportName2}
      </span>
    </div>
  );
}

class FlyInfoComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="flight-container">
      <div className="buy-container">
        <ButtonSearchOrange className="buy-btn" />
      </div>
      <div className="flight-info">
        <LogoImg className="air-company" src="./img/redwings.png" />
        <Arrival />
        <Slider />
      </div>
    </div>
    );
  }
}


export default FlyInfoComponent;
