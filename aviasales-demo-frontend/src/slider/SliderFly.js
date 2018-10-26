import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import style from './style.css';

export default class SliderFly extends React.Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    return (
      <div>
        <Range  min={this.props.min} max={this.props.max} onChange={this.props.onSliderChange} step = {1}/>
      </div>
    )
  }
}