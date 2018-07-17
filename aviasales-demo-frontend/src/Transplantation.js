import './TicketHeader.css';
import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import styled from 'styled-components';
import logologo from './img/logologo.png';
import 'flexboxgrid2/flexboxgrid2.css';
import './style.css';
import 'normalize.css';


function Header(props) {
  return <div {...props} />;
}

function TravelPrice(...props) {
  return <span {...props} />;
}

function ListItems(props) {
  return (
    <div className="inputs-container">
      <input type="checkbox" name="all" id={props.id} className={props.className} />
      <label htmlFor={props.id} className="label-checkbox label-checkbox--transplantation-block">
        {props.title}
      </label>
      <TravelPrice className={props.className} id={props.id} />
    </div>
  );
}

function menuLeftHeader(props) {
  return <div {...props} />;
}

const HeaderStyled = styled(Header)`
  background-color: #fff;
  color: #5B5B5C;
  width: 100%;
`;

const TravelPriceStyled = styled(TravelPrice)`
  color: #A0B0B9;
`;
// function MenuLeftHeader(props) {
//   return(

//   )
// }

function TranspanationContainer(props) {
  return (
    <Header>
      <h2 className="menu-header">
        {props.title}
      </h2>
      <div className="inputs-list">
        <ListItems title="Все" id="all" className="input-checkbox input-checkbox--transplantation" />
        <ListItems title="Без пересадок" id="notransplantation" className="input-checkbox input-checkbox--transplantation">
          <TravelPrice className="money-transpilation money-transpilation--notranspilation" id="notranspilation-cost" />
        </ListItems>
        <ListItems title="1 пересадка" id="transplantation-1" className="input-checkbox input-checkbox--transplantation" />
        <ListItems title="2 пересадки" id="transplantation-2" className="input-checkbox input-checkbox--transplantation" />
        <ListItems title="3 пересадки" id="transplantation-3" className="input-checkbox input-checkbox--transplantation" />
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
          <ListItems className="checkbox-container">
            <TravelPrice  className="llsfsd"/>
          </ListItems>
        </TranspanationContainer>
      </div>
    );
  }
}

export default TransplantionComponent;
