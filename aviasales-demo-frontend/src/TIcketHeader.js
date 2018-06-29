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
    padding: 18px;
    background-color: #fff;
    border: 1px solid blue;
    position: relative;
`

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
            <Header srcSet= {logologo} width="auto" height="100%" />
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