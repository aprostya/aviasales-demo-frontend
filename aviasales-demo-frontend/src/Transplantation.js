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
import FlyComponent from './FlyTime';
import TransferComponent from './Transfer';
import LuggageComponent from './Luggage';
import TravelTimeComponent from './TravelTime';
import AviacompaniesComponent from './Aviacompanies';
import AirportsComponent from './Airports';
import AgentsComponent from './Agents';
import AirportTranspilationsComponent from './AirportTranspilations';
import DisableFiltersComponent from './DisableFilters';


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

function ListItems(props) {
  return (
    <div className="inputs-container">
      <input type="checkbox" name="all" id={props.id} className={props.className} />
      <label htmlFor={props.id} className="label-checkbox label-checkbox--transplantation-block">
        {props.title}
      </label>
      <PriceStyled className="fly-cost">
{props.titleCost}
</PriceStyled>
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

// function MenuLeftHeader(props) {
//   return(

//   )
// }

function TranspanationContainer(props) {
  return (
    <Header className="transpilation-block">
      <MenuHeader className="menu-header">{props.title}</MenuHeader>
      <div className="inputs-list">
        <ListItems title="Все" id="all" className="input-checkbox input-checkbox--transplantation" />
        <ListItems title="Без пересадок" id="notransplantation" className="input-checkbox input-checkbox--transplantation" titleCost="7 712 &#8381;" />
        <ListItems title="1 пересадка" id="transplantation-1" className="input-checkbox input-checkbox--transplantation" titleCost="11 150 &#8381;" />
        <ListItems title="2 пересадки" id="transplantation-2" className="input-checkbox input-checkbox--transplantation" titleCost="16 821 &#8381;" />
        <ListItems title="3 пересадки" id="transplantation-3" className="input-checkbox input-checkbox--transplantation" titleCost="23 986 &#8381;" />
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
        <TranspanationContainer title="Прибытие" />
        <FlyComponent />
        <LuggageComponent/>
        <TransferComponent/>
        <TravelTimeComponent/>
        <AviacompaniesComponent/>
        <AirportsComponent/>
        <AirportTranspilationsComponent/>
        <AgentsComponent/>
        <DisableFiltersComponent/>
      </div>
    );
  }
}

export default TransplantionComponent;