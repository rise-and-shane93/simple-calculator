import React, { Component } from 'react';

const Numbers = (props) => {
    return (
        <article id="number-buttons">
            <button className="btn number-btn" onClick={() => props.addNumber(7)}>7</button>
            <button className="btn number-btn" onClick={() => props.addNumber(8)}>8</button>
            <button className="btn number-btn" onClick={() => props.addNumber(9)}>9</button>
            <button className="btn number-btn" onClick={() => props.addNumber(4)}>4</button>
            <button className="btn number-btn" onClick={() => props.addNumber(5)}>5</button>
            <button className="btn number-btn" onClick={() => props.addNumber(6)}>6</button>
            <button className="btn number-btn" onClick={() => props.addNumber(1)}>1</button>
            <button className="btn number-btn" onClick={() => props.addNumber(2)}>2</button>
            <button className="btn number-btn" onClick={() => props.addNumber(3)}>3</button>
            <button className="btn number-btn" onClick={() => props.addNumber(0)}>0</button>
            <button className="btn number-btn">.</button>
            <button className="btn number-btn"><sup>+</sup>/<sub>-</sub></button>
        </article>
    );
}

export default Numbers;