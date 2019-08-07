import React, { Component } from 'react';

class Memory extends Component {
    render() {
        return(
            <article id="memory-buttons">
                <button className="btn memory-btn">MC</button>
                <button className="btn memory-btn">MR</button>
                <button className="btn memory-btn">M+</button>
                <button className="btn memory-btn">M-</button>
                <button className="btn power-btn">CE</button>
            </article>
        );
    }
}

export default Memory;