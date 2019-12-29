import React, { Component } from 'react';
import '../styles/Calculator.css';

import Button from './Button.js'

class Calculator extends Component {
    render () {
        return (
            <div id="wrapper">
                <h1>This is a demo</h1>
                <p>Made by Hampus</p>
                <div id="calcBody"> 
                    <p id="preview" placeholder="..."></p>
                    <Button label="AC"/>
                    <Button label="Remove"/>
                    <Button label="sqrt"/>
                    <Button label="division"/>
                    <Button label="multiply"/>
                    <Button label="subtract"/>
                    <Button label="addition"/>
                    <Button label="equals"/>
                    <Button label="1"/>
                    <Button label="2"/>
                    <Button label="3"/>
                    <Button label="4"/>
                    <Button label="5"/>
                    <Button label="6"/>
                    <Button label="7"/>
                    <Button label="8"/>
                    <Button label="9"/>
                    <Button label="0"/>
                    <Button label="dot"/>
                </div>
            </div>
        );
    }
}

export default Calculator;
