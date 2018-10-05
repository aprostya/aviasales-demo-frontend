import './TicketHeader.css';
import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import styled from 'styled-components';
import './flights-info.css';
import redwings from './img/redwings.png';
import nordwind from './img/nordwind.png';
import Slider from 'react-rangeslider';
import 'flexboxgrid2/flexboxgrid2.css';
import './style.css';
import 'normalize.css';
import CharterCheck from './Charter';

const ButtonOrange = styled(Buttons)`
    width: 194px;
    height: 58px;
    font-size: 16px;
    background-color: #FF6D00;
    color: #fff;
    margin-left: 16px;
    border-radius: 6px;
    font-weight: normal;
    font-family: inherit;
`; // вынести в общий компонент

function Buttons(props) {
  return <button {...props} />;
}

function LogoImg(props) {
  return (
    <div className="company-img">
      <img {...props} alt={props.className} />
    </div>
  );
}

function Space(props) {
  return <br {...props} />;
}

function PinFly(props) {
  return (
    <span className="pin-fly">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Group">
          <path id="segmentPinIcon" fillRule="evenodd" clipRule="evenodd" d="M1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11Z" fill="black" fillOpacity="0.01" stroke="#A0B0B9" />
          <g id="svg">
            <g id="ic_pin-blue">
              <path id="Shape" fillRule="evenodd" clipRule="evenodd" d="M7.19088 15.2699C7.01997 15.4259 6.83088 15.4289 6.68997 15.2769C6.54906 15.1229 6.55361 14.9069 6.69725 14.7179C7.08634 14.2129 8.18906 12.8629 8.81452 12.0999L6.57906 9.64189C6.41452 9.45989 6.54997 9.28689 6.59997 9.23189C7.02815 8.76189 7.97543 8.56589 8.85088 8.96989L8.98361 9.11589C9.90634 8.35289 11.1872 7.21089 11.9645 6.58589L11.8127 6.41889C11.7272 6.32509 11.6792 6.19772 11.6792 6.06489C11.6792 5.93207 11.7272 5.8047 11.8127 5.71089L11.8727 5.64689C11.958 5.55285 12.0738 5.5 12.1945 5.5C12.3153 5.5 12.4311 5.55285 12.5163 5.64689L15.4591 8.88289C15.5446 8.9767 15.5926 9.10407 15.5926 9.23689C15.5926 9.36972 15.5446 9.49709 15.4591 9.59089L15.4 9.65589C15.3147 9.74994 15.1989 9.80279 15.0782 9.80279C14.9574 9.80279 14.8416 9.74994 14.7563 9.65589L14.6472 9.53589C14.0709 10.3899 13.0218 11.7769 12.3154 12.7799L12.4372 12.9139C12.79 13.8489 12.6054 14.8879 12.2118 15.3739C12.1527 15.4389 12.0018 15.6049 11.8182 15.4039L9.58452 12.9459C8.84634 13.6659 7.54088 14.9469 7.18997 15.2679L7.19088 15.2699Z" fill="#A0B0B9" />
            </g>
          </g>
        </g>
      </svg>
    </span>
  );
}

function ButtonSearchOrange(props) {
  // const textInput = React.createRef();
  // function getClass() {
  //   console.log(document.querySelector('baggage-icons-container__icon--luggage'));
  // };
  //   // autofocus the input on mount
  //   getClass();
  return (
    <div className="buttons-container buttons-container--flight-block">
      <div className="baggage-icons-container">
        <span className="baggage-icons-container__icon baggage-icons-container__icon--luggage" type={props.type} />
        <span className="baggage-icons-container__icon baggage-icons-container__icon--handbag" />
      </div>
      <ButtonOrange className={props.className}>
        {props.btnDescr4}
        <Space />
        {props.btnDescr5}
      </ButtonOrange>
      <a className="operator-name" href="#">
        {props.operatorName}
      </a>
    </div>
  );
}


// document.addEventListener('DOMContentLoaded', () => {
//   const baggageWeight = document.querySelector('.baggage-icons-container__icon--luggage');
//   console.log(baggageWeight);
// });

function ArrivalsInfo(props) {
  return (
    <div>
      <span className="arrive-info-text arrive-info-text--time-fly">
        {props.timeFly}
      </span>
      <br />
      <span className="arrive-info-text arrive-info-text--city-name">
        {props.cityName}
      </span>
      <br />
      <span className="arrive-info-text arrive-info-text--week-day">
        {props.weekDay}
      </span>
    </div>
  );
}


function FlyInformation(props) {
  return (
    <div className="flight-information">
      <svg className="flight-information__icon" width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Shape" d="M0 0L5.00001 5L10 0H0Z" fill="#A0B0B9" />
      </svg>
    </div>
  );
}


function ArrivalsInfoPinFly(props) {
  return (
    <div>
      <PinFly />
      <span className="arrive-info-text arrive-info-text--time-fly">
        {props.timeFly}
      </span>
      <br />
      <span className="arrive-info-text arrive-info-text--city-name">
        {props.cityName}
      </span>
      <br />
      <span className="arrive-info-text arrive-info-text--week-day">
        {props.weekDay}
      </span>
    </div>
  );
}

// function Slider(props) {
//   return (
//     <div className="scale scale--flight">
//       <span className="scale-sign">
//         {props.scaleSign}
//       </span>
//       <div className="bar  bar--flight-info" />
//       <div className="range-toggle range-toggle--flight-list range-toggle-min range-toggle-min--fly-info" />
//       <span className="airoport-name airoport-name--left">
//         {props.airoportName}
//       </span>
//       <div className="range-toggle range-toggle--flight-list range-toggle-max range-toggle-max--fly-info" />
//       <span className="airoport-name airoport-name--right">
//         {props.airoportName2}
//       </span>
//     </div>
//   );
// }

function BuyTicket() {
  return (
    <div className="buy-container">
      <ButtonSearchOrange
        className="buy-btn"
        btnDescr4="Купить"
        btnDescr5="за 12 270 &#8381;"
        operatorName="на Clickavia"
      />
    </div>
  );
}

function FlyCard(props) {
  return (
    <div className="flight-container">
      <BuyTicket />
      <div className="flight-info">
        <header className="flight-header">
          <LogoImg className="air-company-logo" src={props.src} />
          <span className="company-info" />
          <CharterCheck className="chart-label" isCharter={props.isCharter} />
        </header>
        <div className="flights-info-group">
          <div className="arrives-container">
            <div className="arrivals-container__descr-group">
              <ArrivalsInfoPinFly timeFly="00:05" cityName="Москва" weekDay="24 фев 2018, Сб" />
              <Slider scaleSign="Всего: 5ч" airoportName="vko" airoportName2="bcn" />
              <ArrivalsInfo timeFly="00:05" cityName="Москва" weekDay="24 фев 2018, Сб" />
            </div>
          </div>
        </div>
        <div className="flights-info-group">
          <div className="arrives-container">
            <div className="arrivals-container__descr-group">
              <ArrivalsInfoPinFly timeFly="00:05" cityName="Москва" weekDay="24 фев 2018, Сб" />
              <Slider scaleSign="Всего: 5ч" airoportName="vko" airoportName2="bcn" />
              <ArrivalsInfo timeFly="00:05" cityName="Москва" weekDay="24 фев 2018, Сб" />
            </div>
          </div>
        </div>
      </div>
      <div className="side-info-container">
        <FlyInformation />
      </div>
    </div>
  );
}

const weightCount = (maxBaggageWeight, baggageMaxWeight) => {
  let maxBaggageWeightInt = parseInt(maxBaggageWeight, 10);
  if (maxBaggageWeightInt < 20 && maxBaggageWeightInt!= NaN ){
    baggageMaxWeight.dataset.content = maxBaggageWeight;
  }
  else {
    baggageMaxWeight.style.display = 'none';
  }
};

class FlyInfoComponent extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount() {
    const baggageMaxWeight = document.querySelector('.baggage-icons-container__icon--luggage');
    // let baggageMaxWeightCount = baggageMaxWeight.dataset.content = 'hello';
    let baggageMaxWeightCount = '15';
  }

  render() {
    return (
      <div>
        <FlyCard src={redwings} isCharter />
        <FlyCard src={nordwind} />
      </div>
    );
  }
}


export default FlyInfoComponent;
