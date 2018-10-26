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
import SliderFly from './slider/SliderFly';
import MenuHeader from './MenuHeader';

function Price(props) {
  return <span {...props} />;
}

const PriceStyled = styled(Price)`
  color: #A0B0B9;
  margin-left: auto;
  margin-right: 16px;
`;

function Header(props) {
  return <div {...props} />;
}
function FlyesDescr(props) {
  return (
    <div className="flyes-names">
      <span className="fly-item">
        {props.fly}
      </span>
      <span className="fly-item">
        {props.fly2}
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
            {props.flyDescr}
            {' '}
            {props.townName}
            {' '}
            <br />
            {' '}
            c
            {' '}
            {props.time}
            ,
            {' '}
            {props.date}
          </span>
          <span className="arrive-descr arrive-descr--to">
            {' '}
            до
            {' '}
            {props.date2}
            {' '}
            {props.timeBefore}
          </span>
        </div>
      </div>
    </div>
  );
}

function FlyContainer(props) {
  return (
    <div>
      <div className="arrivals-list">
        <Arrival flyDescr={props.flyDescr} townName={props.townName} time={props.time} date={props.date} date2={props.date2} timeBefore={props.timeBefore} />
      </div>
    </div>
  );
}
const flex = 'flex';
const none = 'none';

class FlyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggle: none, change: 'menu-header menu-header--close-state' };
    this.showText = this.showText.bind(this);
    this.time = {
      value: 10,
    };
    this.handleResultChange = this.handleResultChange.bind(this);
  }

  toggleClass() {
    const changeClasses = this.state.change === 'menu-header menu-header--close-state' ? 'menu-header' : 'menu-header menu-header--close-state';
    this.setState({ change: changeClasses });
  }

  showText() {
    const changeText = this.state.toggle == none ? flex : none;
    this.setState({ toggle: changeText });
    this.toggleClass();
  }

  handleResultChange(value) {
    this.setTime({
      value,
    });
  }

  render() {
    return (
      <div className="transpilation-block">
        <MenuHeader className="menu-header" onClick={this.showText} className={this.state.change}>
          Время вылета и прибытия
        </MenuHeader>
        <div className="flyes-container" style={{ display: this.state.toggle }}>
          <div className="flyes-range-group">
            <FlyesDescr fly="Москва" fly2="Барселона" />
            <FlyContainer flyDescr="Вылет из" townName="Москвы" time={this.handleResultChange} date="24 февраля" date2="23.45" timeBefore="24 фев." />
            <SliderFly max={this.time.value} value={this.time.value} />
            <FlyContainer flyDescr="Прибытие в" townName="Барселону" time="3.05" date="24 февраля" date2="13.50" timeBefore="26 фев." />
          </div>
          <div className="flyes-range-group">
            <FlyesDescr fly2="Москва" fly="Барселона" />
            <FlyContainer flyDescr="Вылет из" townName="Барселоны" time="06.05" date="3 мар" date2="23.45" timeBefore="3 мар" />
            <FlyContainer flyDescr="Прибытие в" townName="Москву" time="15.00" date="3 мар" date2="09.55" timeBefore="5 мар." />
          </div>
        </div>
      </div>
    );
  }
}

export default FlyComponent;
