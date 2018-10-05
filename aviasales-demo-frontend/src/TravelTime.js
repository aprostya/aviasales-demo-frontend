import './TicketHeader.css';
import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import styled from 'styled-components';
import 'flexboxgrid2/flexboxgrid2.css';
import './style.css';
import 'normalize.css';
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


// function FlyContainer(props) {
//       <div className="flyes-container">
//           <span className="fly-item">{props.fly}</span>
//           <span className="fly-item">{props.fly2}</span>
//       </div>
// }
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
              от
            {' '}
            {props.timeFrom2}
          </span>
          <span className="arrive-descr arrive-descr--to">
            {' '}
              до
            {' '}
            {props.timeBefore2}
          </span>
        </div>
      </div>
    </div>
  );
}

function Slider(props) {
  return (
    <div className="scale">
      <div className="bar" />
      <div className="range-toggle range-toggle-min" />
      <div className="range-toggle range-toggle-max" />
    </div>
  );
}
const flex = 'flex';
const none = 'none';

export default class TravelTimeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggle: none, change: 'menu-header menu-header--close-state' };
    this.showText = this.showText.bind(this);
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

  render() {
    return (
      <div>
        <MenuHeader onClick={this.showText} className={this.state.change}>
          Время в пути
        </MenuHeader>
        <div className="flyes-container" style={{ display: this.state.toggle }}>
          <div className="flyes-range-group">
            <FlyesDescr fly="Москва" fly2="Барселона" />
            <Arrival timeFrom2="04ч 20м" timeBefore2="48ч 50м" />
            <Slider />
          </div>
          <div className="flyes-range-group">
            <FlyesDescr fly2="Москва" fly="Барселона" />
            <Arrival timeFrom2="04ч 10м" timeBefore2="41ч 20м" />
            <Slider />
          </div>
        </div>
      </div>
    );
  }
}
