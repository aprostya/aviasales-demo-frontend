import React, {Component} from 'react';
import logo from './logo.svg';
import './TicketHeader.css';
import styled from "styled-components";

function logoImg(props) {
    return <img src={props.src} className={props.className} alt={props.alt}/>;
}

const ButtonSearch = styled(Buttons) `
    width: 194px;
    height: 58px;
    font-size: 20px;
`;


class MovieTexts extends React.Component {
    constructor(props) {
        super(props);
        this.descr = {description: "Кто мы? Какое место мы занимаем во Вселенной? Эти вопросы стоят перед героями фильма. Экипаж космического корабля С. С. Дискавери — капитаны Дэйв Боумэн, Фрэнк Пул и их бортовой компьютер ХЭЛ-9000 — должны исследовать район галактики и понять, почему инопланетяне следят за Землей. На этом пути их ждет множество неожиданных открытий…"};
    }
    render(props) {
        return (
            {/*<p children={this.descr.description}/>*/},
                <p {...this.props} children={this.descr.description}/>
        )
    }
    // render(props) {
    //     return <p {...this.props}/>
    // }
}

class ToggleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {toggle: none};
        this.showText = this.showText.bind(this);
    }

    showText() {
        const changeText = this.state.toggle == none ? inline : none;
        this.setState({toggle: changeText});
    }

    render() {
        return (
            <div className="movie-content">
                <StButtons
                    className="btn-test"
                    type="button"
                    children="info"
                    onClick={this.showText}>
                </StButtons>
                <MovieTexts style={{display: this.state.toggle}}/>
            </div>
        )
    }
}
