import React, { Component } from 'react';
//import { connect } from 'react-redux';

class CalcBtns extends Component {
    render() {
        return(
            <article id="calc-buttons">
                <button className="btn calc-btn">&#247;</button>
                <button className="btn calc-btn">&#8730;</button>
                <button className="btn calc-btn">&times;</button>
                <button className="btn calc-btn">&#37;</button>
                <button className="btn calc-btn">-</button>
                <button className="btn calc-btn"><sup>1</sup>/<sub>x</sub></button>
                <button className="btn calc-btn" onClick={() => this.props.addSymbol('+')}>+</button>
                <button className="btn calc-btn" onClick={() => this.props.equalSymbol()}>=</button>
            </article>
        );
    }
}

//export default connect(mapStateToProps)(CalcBtns);
export default CalcBtns;