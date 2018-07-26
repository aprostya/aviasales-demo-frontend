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
  return <span {...props}/>
}

const PriceStyled = styled(Price)`
  color: #A0B0B9;
  margin-left: auto;
  margin-right: 16px;
`;

function Header(props) {
  return <div {...props} />;
}


// function FlyContainer(props) {
//       <div className="flyes-container">
//           <span className="fly-item">{props.fly}</span>
//           <span className="fly-item">{props.fly2}</span>
//       </div>  
// }
function FlyesDescr(props) {
  return (
        <div className="flyes-container">
          <span className="fly-item">{props.fly}</span>
          <span className="fly-item">{props.fly2}</span>
        </div>  
  );
}

function Arrival(props) {
  return (
    <div className="range-container">
      <div className="arrives-container">
        <div className="arrivals-container__descr-group">
          <span className="arrive-descr arrive-descr--from">{props.flyDescr} {props.townName} <br/> c {props.time}, {props.date}</span>
          <span className="arrive-descr arrive-descr--to"> до {props.date2} {props.timeBefore}</span>
        </div>    
    </div>
  </div>  
  );
}

function Slider(props) {
  return (
      <div className="scale">
        <div className="bar"></div>
        <div className="range-toggle range-toggle-min">
        </div>
        <div className="range-toggle range-toggle-max">
        </div>
      </div>
  )
}


function FlyContainer(props) {
  return (
    <div>
      <div className="arrivals-list">
          <Arrival flyDescr="Вылет из" townName="Москвы" time="00.05" date="24 февраля" date2="23.45" timeBefore="24 фев."/>
          <Arrival flyDescr="Прибытие в" townName="Барселону" time="3.05" date="24 февраля" date2="13.50" timeBefore="26 фев."/>
      </div>
    </div>
  );
}

class FlyComponent extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {toggle: none};
    // this.showText = this.showText.bind(this);
  }

  render() {
    return (
      <div>
        <MenuHeader className="menu-header">Время вылета и прибытия</MenuHeader>
        <div>
        <FlyesDescr fly="Москва" fly2 ="Барселона" />
        <Slider/>
        <Slider/>
        </div>
      </div>
    );
  }
}


export default FlyComponent;