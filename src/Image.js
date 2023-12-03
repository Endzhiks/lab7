import {Component} from 'react';
import image from "./kyiv.webp";
import './index.css';

export default class Image extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imageSize: 472,
            imageClassName: "",
        };
    }

    onIncreaseImageClick = () => {
        this.setState((prevState) => ({
            imageSize: prevState.imageSize + 20,
        }));
    }

    onDecreaseImageClick = () => {
        this.setState((prevState) => ({
            imageSize: prevState.imageSize > 20 ? prevState.imageSize - 20 : prevState.imageSize,
        }));
    }

    onAddImageClick = () => {
        this.setState(() => ({
            imageClassName: ""
        }));
    }

    onDeleteImageClick = () => {
        console.log("aboba: ", this);
        this.setState(() => ({
            imageClassName: "hidden"
        }));
    }


    render() {
        return <div>
            <div>
                <a href="https://visitukraine.today/de/blog/1807/interesting-places-in-kyiv-10-places-worth-visiting-in-the-ukrainian-capital"
                   target="_blank" rel="noreferrer">
                    <img className={this.state.imageClassName}
                         style={{width: `${this.state.imageSize}px`}}
                         src={image}
                         alt="kyiv"
                    />
                </a>
            </div>

            <button id="add" onClick={this.onAddImageClick}>Додати</button>
            <button id="increase" onClick={this.onIncreaseImageClick}>Збільшити</button>
            <button id="decrease" onClick={this.onDecreaseImageClick}>Зменшити</button>
            <button id="delete" onClick={this.onDeleteImageClick}>Видалити</button>
        </div>
    }
}
