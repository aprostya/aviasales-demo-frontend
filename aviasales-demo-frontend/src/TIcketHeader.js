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

function LogoImg(props) {
  return <img {...props} />;
}

function InputsContainer(props) {
  return <div {...props} />;
}
function MainHeader(props) {
  return <div {...props} />;
}

function SpanHeader(props) {
  return <span {...props} />;
}

function Buttons(props) {
  return <button {...props} />;
}

function PassangersSelect(props) {
  return <div {...props} />;
}

function HeadContainer(props) {
  return <div {...props} />;
}

function Label(props) {
  return <label {...props} />;
}

function SelectContainer(props) {
  return <div {...props} />;
}
function Inputs(props) {
  return <input {...props} />;
}
const MainHeaderStyled = styled(MainHeader)`
    width: 100%;
    padding-top: 14px;
    padding-bottom: 40px;
`;
const ButtonOrange = styled(Buttons)`
    width: 194px;
    height: 58px;
    font-size: 20px;
    background-color: #FF9241;
    color: #fff;
    margin-left: 16px;
    font-weight: bold;
    font-family: inherit;
`;

const InputsContainerStyled = styled(InputsContainer)`
    display: flex;
    flex-direction: row;
    height: 56px;
`;
const InputsStyled = styled(Inputs)`
    width: auto;
    height: 20px;
    font-size: 16px;
    padding: 18px;
    background-color: #fff;
    border: 1px solid #fff;
    border-radius: 2px;
    position: relative;
`;

const SpanHeaderStyled = styled(SpanHeader)`
    position: absolute;
    color: #A0B0B9;
    text-transform: uppercase;
    right: 40px;
    top: 20px;
`;
const SpanHeaderIconsStyled = SpanHeaderStyled.extend `
  right: 0;
  left: -40px;
  top: 17px;
  position: relative;
`;

const PassangersSelectStyled = styled(InputsContainer)`
    width: auto;
    height: 20px;
    font-size: 16px;
    padding: 18px;
    padding-right: 20px;
    background-color: #fff;
    border: 1px solid #fff;
    position: relative;
`;
const LabelStyled = styled(Label)`
    width: auto;
    height: auto;
    position: relative;

`;

function PassangersSelectGroup(props) {
  return (
    <div className="input-container">
      <div className="dropdown-wrapper">
        <PassangersSelectStyled className={props.className} children={props.children} />
      </div>
    </div>
  );
}

function PassangersSelectGroup(props) {
  return (
    <div className="input-container">
      <div className="dropdown-wrapper">
        <PassangersSelectStyled className={props.className} children={props.children} />
      </div>
    </div>
  );
}

function ButtonSearchOrange(props) {
  return (
    <div className="buttons-container">
      <ButtonOrange className={props.className} children={props.children} />
    </div>
  );
}

function SpanHeaderIcons(props) {
  return (
    <SpanHeaderStyled {...props} />
  );
}

function Inputes(props) {
  return (
    <div className="input-container">
      <InputsStyled
        className={props.className}
        id={props.id}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
      />
      <SpanHeaderStyled children={props.children} className={props.className} />
    </div>
  );
}
function InputesIcons(props) {
  return (
    <div className="input-container">
      <InputsStyled
        className={props.className}
        id={props.id}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
      />
    </div>
  );
}

function Header(props) {
  return (
    <MainHeaderStyled className="col-xs-12
       col-sm-12
       col-md-12
       col-lg-12"
    >
      <a className="logo-link" href="#">
        <picture className="logo-container">
          <LogoImg className="main-logo" srcSet={props.srcSet} alt={props.className} width={props.width} height={props.height} />
        </picture>
      </a>
    </MainHeaderStyled>
  );
}


class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.spanObject = { spanName1: 'input-icon input-icon--calendar', spanName2: 'input-icon input-icon--close', spanName3: 'input-icon input-icon--select', spanName4: 'input-icon input-icon--arrows' };
    // this.state = {toggle: none};
    // this.showText = this.showText.bind(this);
  }

  render() {
    return (
      <div className="header-container col-xs-12 col-lg-12">
        <Header srcSet={logologo} width="auto" height="100%" />
        <div className="col-xs-2 col-lg-12 fields">
          <InputsContainerStyled>
            <Inputes className="input input--to" id="input-to" placeholder="Москва" children="Mow">
            </Inputes>
            <SpanHeaderIconsStyled className={this.spanObject.spanName4}/>
            <Inputes className="input input--from" id="input-from" placeholder="Барселона" children="bcn" />
            <InputesIcons className="input input--calendar_from" id="input-calendar-from" placeholder="10 сентября, пн" />
            <SpanHeaderIconsStyled className={this.spanObject.spanName1} />
            <Inputes className="input input--calendar_to" id="input-calendar-to" placeholder="3 марта, сб" />
            <SpanHeaderIconsStyled className={this.spanObject.spanName2} />
            <PassangersSelectGroup className="input input--dropdown" id="input--dropdown" children="1 пассажир, эконом" />
            {/* <SpanHeaderIconsStyled className={this.spanObject.spanName3} /> */}
            <ButtonSearchOrange className="btn btn--search" children="Найти билеты" />
          </InputsContainerStyled>
        </div>
      </div>
    );
  }
}
export default HeaderComponent;