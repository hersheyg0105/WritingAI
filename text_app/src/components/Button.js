import React from 'react';
import './Button.css';


const Button = props => {

    return <button class="button" onClick={props.link}><span id="button-text">{props.text}</span></button>

};

export default Button;