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


class LuggageComponent extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {toggle: none};
    // this.showText = this.showText.bind(this);
  }

  render() {
    return (
      <div className="transpilation-block">
        <MenuHeader className="menu-header menu-header--close-state">
        Багаж
        </MenuHeader>
        {/* <div className="flyes-container">
          <div className="flyes-range-group">
            <FlyesDescr fly="Москва" fly2 ="Барселона" />
            <FlyContainer flyDescr="Вылет из" townName="Москвы" time="00.05" date="24 февраля" date2="23.45" timeBefore="24 фев."/>
            <Slider/>
            <FlyContainer flyDescr="Прибытие в" townName="Барселону" time="3.05" date="24 февраля" date2="13.50" timeBefore="26 фев."/>
            <Slider/>
          </div>
          <div className="flyes-range-group">
            <FlyesDescr fly2 ="Москва" fly="Барселона" />
            <FlyContainer flyDescr="Вылет из" townName="Барселоны" time="06.05" date="3 мар" date2="23.45" timeBefore="3 мар"/>
            <Slider/>
            <FlyContainer flyDescr="Прибытие в" townName="Москву" time="15.00" date="3 мар" date2="09.55" timeBefore="5 мар."/>
            <Slider/>
          </div>
        </div> */}
      </div>
    );
  }
}


export default LuggageComponent;