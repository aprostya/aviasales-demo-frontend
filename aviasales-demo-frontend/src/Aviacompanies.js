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

function CustomCheckbox(props) {
  return (
    <div className="inputs-container inputs-container--custom-checkbox">
      <input type="checkbox" name="all" id={props.id} className={props.className} />
      <label htmlFor={props.id} className="label-checkbox label-checkbox--transplantation-block">
        {props.title}
      </label>
      <span className="checbox-descr">
        {props.checkboxDescr}
      </span>
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

const inline = 'inline';
const none = 'none';

class AviacompaniesComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggle: none, change: 'menu-header menu-header--close-state' };
    this.showText = this.showText.bind(this);
    // this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass() {
    const changeClasses = this.state.change === 'menu-header menu-header--close-state' ? 'menu-header' : 'menu-header menu-header--close-state';
    this.setState({ change: changeClasses });
  }

  showText() {
    const changeText = this.state.toggle == none ? inline : none;
    this.setState({ toggle: changeText });
    this.toggleClass();
  }

  render() {
    return (
      <div className="items-container items-container--aviacompanies">
        <MenuHeader onClick={this.showText} className={this.state.change}>
              Авиакомпании
        </MenuHeader>
        <div style={{ display: this.state.toggle }}>
          <CustomCheckbox title="Несколько авиакомпаний" id="checkbox-custom-1" className="input-checkbox input-checkbox--transplantation" checkboxDescr="Показывать билеты с перелетами, выполняемыми несколькими авиакомпаниями, включая выбранную" />
          <div className="inputs-list">
            <h3 className="inputs-list__header">
                Альянсы
            </h3>
            <ListItems title="Все" id="all-alianses" className="input-checkbox input-checkbox--transplantation" />
            <ListItems title="Star Alliance" id="alians-1" className="input-checkbox input-checkbox--transplantation" titleCost="11 150 &#8381;" />
            <ListItems title="OneWorld" id="alians-2" className="input-checkbox input-checkbox--transplantation" titleCost="12 370 &#8381;" />
            <ListItems title="SkyTeam" id="alians-3" className="input-checkbox input-checkbox--transplantation" titleCost="16 290 &#8381;" />
            <ListItems title="3 пересадки" id="alians-4" className="input-checkbox input-checkbox--transplantation" titleCost="23 986 &#8381;" />
          </div>
          <div className="inputs-list">
            <h3 className="inputs-list__header">
              Авиакомпании
            </h3>
            <ListItems title="Все" id="all-aviacompanies" className="input-checkbox input-checkbox--transplantation" />
            <ListItems title="Aegean Airlines" id="aviacompany-1" className="input-checkbox input-checkbox--transplantation" titleCost="20 357 &#8381;" />
            <ListItems title="Air Algerie" id="aviacompany-2" className="input-checkbox input-checkbox--transplantation" titleCost="29 105 &#8381;" />
            <ListItems title="Air Europa" id="aviacompany-3" className="input-checkbox input-checkbox--transplantation" titleCost="16 290 &#8381;" />
            <ListItems title="Air Moldova" id="aviacompany-4" className="input-checkbox input-checkbox--transplantation" titleCost="21 986 &#8381;" />
            <ListItems title="Alitalia" id="aviacompany-5" className="input-checkbox input-checkbox--transplantation" titleCost="28 986 &#8381;" />
            <ListItems title="Alitalia CityLiner" id="aviacompany-6" className="input-checkbox input-checkbox--transplantation" titleCost="28 986 &#8381;" />
            <ListItems title="Belle Air" id="aviacompany-7" className="input-checkbox input-checkbox--transplantation" titleCost="28 986 &#8381;" />
            <ListItems title="Alitalia" id="aviacompany-8" className="input-checkbox input-checkbox--transplantation" titleCost="28 986 &#8381;" />
            <ListItems title="Alitalia CityLiner" id="aviacompany-9" className="input-checkbox input-checkbox--transplantation" titleCost="28 986 &#8381;" />
            <ListItems title="British Airways" id="aviacompany-10" className="input-checkbox input-checkbox--transplantation" titleCost="28 986 &#8381;" />
            <ListItems title="Brussels Airlines" id="aviacompany-11" className="input-checkbox input-checkbox--transplantation" titleCost="28 986 &#8381;" />
            <ListItems title="Bulgaria Air" id="aviacompany-12" className="input-checkbox input-checkbox--transplantation" titleCost="28 986 &#8381;" />
          </div>
        </div>
      </div>
    );
  }
}

export default AviacompaniesComponent;
