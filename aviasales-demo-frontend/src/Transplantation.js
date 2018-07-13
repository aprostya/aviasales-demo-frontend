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
function ListItems(props) {
  return (
  <div className={props.className}>
    <input type="checkbox" name="all" id={props.id} />
    <label htmlFor={props.id}>
      {props.title}
    </label>
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
    <Header>
      <h2 className="menu-header">
        {props.title}
      </h2>
    <ListItems title="Все"/>
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
      <div className="col-lg-3">
        <TranspanationContainer title="Пересадки">
          <ListItems className="checkbox-container" id="all" title="Все" />
        </TranspanationContainer>
      </div>
    );
  }
}

export default TransplantionComponent;
