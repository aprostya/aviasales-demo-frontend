import React, {Component} from 'react';
import {render} from "react-dom";
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import logologo from './img/logologo.png';
import './TicketHeader.css';
import styled from "styled-components";
import 'flexboxgrid2/flexboxgrid2.css';
import './style.css';

function LogoImg(props) {
    return <img {...props}/>;
}
function MainHeader(props) {
    return <div {...props}/>;
}
function Buttons(props) {
    return <button {...props} />;
}

function HeadContainer(props) {
    return <div {...props}/>
}

function Label(props) {
    return <label {...props}/>
}

function Inputs(props) {
    return (
        <input {...props}/>
    )
}
const MainHeaderStyled = styled(MainHeader) `
    width: 100%;
    background-color: rgb(33, 150, 243);
`;
const ButtonSearch = styled(Buttons)`
    width: 194px;
    height: 58px;
    font-size: 20px;
`;

const InputsStyled = styled(Inputs) `
    width: auto;
    height: 20px;
    padding: 9px 67px 18px;
    background-color: #fff;
    border: 1px solid blue;
    position: relative;
`
const LabelStyled = styled(Label) `
    width: auto;
    height: auto;
`

function Inputs(props) {
    return(
    <div className="inputs-container">
        <div className="col-xs-2 fields">
            <div className ="input-container">
                <InputsStyled className= {props.className}  id={props.id} value={props.value}></InputsStyled>
            </div>
        </div>
    </div>    
    );
}
function Header(props) {
    return(
       <MainHeaderStyled className="col-xs-12
       col-sm-12
       col-md-12
       col-lg-12">
        <a className="logo-link" href="#">
            <picture className="logo-container">
                <LogoImg className="main-logo" srcSet={props.srcSet} alt={props.className} width={props.width} height={props.height}/>
            </picture>
            </a>
       </MainHeaderStyled> 
    );
}


class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {toggle: none};
        // this.showText = this.showText.bind(this);
    }
    render() {
        return (  
            <div>
                <Header srcSet ={logologo} width="auto" height="100%" />
                {/* <Inputs className="input input-to" id="input-to" value="Москва" children="Откуда"/> */}
            </div>
        )
    }
}
export default HeaderComponent;
// class HeaderComponent extends React.Component {
//     constructor(props) {
//         super(props); 
//         this.buttonDescr={descr: "Найти билеты"};
//         this.labelTextFrom={fromText: "Откуда"};
//         this.labelTextTo = {toText: "Куда"};
//     }
//       render() {
//         return (
//             <div className="ticket-content">
//                 <div className="main-logo">
//                     <LogoImg className="main-logo__img" alt={props.alt}/>
//                 </div>
//                 <ButtonSearch
//                     className="btn-search"
//                     type="button"
//                     children="info"
//                     onClick={this.showText}>
//                 </ButtonSearch>
//                 <MovieTexts style={{display: this.state.toggle}}/>
//             </div>
//         )
//     }
// }