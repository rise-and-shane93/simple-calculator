import React, { Component } from 'react';

class Memory extends Component {
    render() {
        return(
            <article id="memory-buttons">
                <button className="btn memory-btn" onClick={() => this.props.memoryButton('MC')}>MC</button>
                <button className="btn memory-btn" onClick={() => this.props.memoryButton('MR')}>MR</button>
                <button className="btn memory-btn" onClick={() => this.props.memoryButton('M+')}>M+</button>
                <button className="btn memory-btn" onClick={() => this.props.memoryButton('M-')}>M-</button>
                <button className="btn power-btn" onClick={() => this.props.powerButton()}>CE</button>
            </article>
        );
    }
}

export default Memory;