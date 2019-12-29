import React, { Component } from 'react';
import '../styles/Button.css';

import calc, { division } from './Calculate'

function handleClick(e) {
    if (e.target.classList.contains('divide')) {
        console.log('divide');
    } else if (e.target.classList.contains('sqrt')) {
        console.log('sqrt');
    } else if (e.target.classList.contains('times')) {
        console.log('times');
    } else if (e.target.classList.contains('minus')) {
        console.log('minus');
    } else if (e.target.classList.contains('plus')) {
        console.log('plus');
    } else if (e.target.classList.contains('equals')) {
        console.log('equals');
    } else if (e.target.classList.contains('dot')) {
        console.log('dot');
    } else if (e.target.classList.contains('AC')) {
        console.log('AC');
    } else if (e.target.classList.contains('remove')) {
        console.log('remove');
    } else {
        calc(e.target.innerHTML);
    } 
}

function createButton (label) {
    switch (label) {
        case 'sqrt':
            return <button onClick={handleClick}><i className="fas fa-square-root-alt sqrt"></i></button>;
        case 'division':
            return <button onClick={handleClick}><i className="fas fa-divide divide"></i></button>;
        case 'multiply':
            return <button onClick={handleClick}><i className="fas fa-times times"></i></button>;
        case 'subtract':
            return <button onClick={handleClick}><i className="fas fa-minus minus"></i></button>;
        case 'addition':
            return <button onClick={handleClick}><i className="fas fa-plus plus"></i></button>;
        case 'equals':
            return <button onClick={handleClick}><i className="fas fa-equals equals"></i></button>;
        case 'dot':
            return <button onClick={handleClick}><i className="fas fa-circle dot"></i></button>;
        default:
            return <button onClick={handleClick}>{label}</button>;
    }
            
}

class Button extends Component {
    constructor (props) {
        super(props);
        this.state = {
            btn: {
                label: this.props.label
            }
        }
    }

    render () {
        return (
            <span className={'num' + this.state.btn.label}>
                {createButton(this.state.btn.label)}
            </span>
        );
    }
}

export default Button;