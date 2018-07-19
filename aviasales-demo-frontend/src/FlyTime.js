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


function FlyContainer(props) {
      <div className="flyes-container">
          <span className="fly-item">{props.fly}</span>
          <span className="fly-item">{props.fly2}</span>
      </div>  
}

function Mesure(props) {

}



function SliderContainer(props) {
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
        <span className="arrive-descr arrive-descr--from">{props.flyDescr}</span>
        <span className="arrive-descr arrive-descr--to">{props.flyDescr2}</span>
        <input type="range" className="fly-range fly-range--arrival-time">
      </div>  
    </div>
  )
}


function menuLeftHeader(props) {
  return <div {...props} />;
}

const HeaderStyled = styled(Header)`
  background-color: #fff;
  color: #5B5B5C;
  width: 100%;
`;
// function MenuLeftHeader(props) {
//   return(

//   )
// }

function TranspanationContainer(props) {
  return (
    <Header>
      <MenuHeader>{props.title}</MenuHeader>
      <div className="inputs-list">
        {/* <ListItems title="Все" id="all" className="input-checkbox input-checkbox--transplantation" />  
        <ListItems title="Без пересадок" id="notransplantation" className="input-checkbox input-checkbox--transplantation" titleCost="7 712 &#8381;" />
        <ListItems title="1 пересадка" id="transplantation-1" className="input-checkbox input-checkbox--transplantation" titleCost="11 150 &#8381;" />
        <ListItems title="2 пересадки" id="transplantation-2" className="input-checkbox input-checkbox--transplantation" titleCost="16 821 &#8381;" />
        <ListItems title="3 пересадки" id="transplantation-3" className="input-checkbox input-checkbox--transplantation" titleCost="23 986 &#8381;" /> */}
      </div>
    </Header>
  );
}

class TransplantionComponent extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {toggle: none};
    // this.showText = this.showText.bind(this);
  }

  render() {
    return (
      <div className="col-lg-3 transpilantation-container">
        <TranspanationContainer title="Пересадки">
        </TranspanationContainer>
      </div>
    );
  }
}

