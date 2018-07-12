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

function menuLeftHeader(props) {
  return <div {...props}/>;
}

const HeaderStyled = styled(Header) `
  background-color: #fff;
  color: #5B5B5C;
  width: 100%;
`

// function MenuLeftHeader(props) {
//   return(
   
//   )
// }

function TranspanationContainer(props) {
    return(
      <div className="col-lg-3">
        <Header>
          <h2 className="menu-header">{props.title}</h2>
        </Header>
      </div>
    )
}

class TransplantionComponent extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {toggle: none};
    // this.showText = this.showText.bind(this);
  }

  render() {
    return (
      <TranspanationContainer title="Пересадки"/>
    )
  }
}

export default TransplantionComponent;