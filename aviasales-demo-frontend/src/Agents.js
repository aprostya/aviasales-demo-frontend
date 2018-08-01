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


class AgentsComponent extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {toggle: none};
    // this.showText = this.showText.bind(this);
  }

  render() {
    return (
      <div>
        <MenuHeader className="menu-header menu-header--close-state">
        Агенства
        </MenuHeader>
      </div>
    );
  }
}


export default AgentsComponent;