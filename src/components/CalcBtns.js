import React, { Component } from 'react';
//import { connect } from 'react-redux';

class CalcBtns extends Component {
    render() {
        return(
            <article id="calc-buttons">
                <button className="btn calc-btn" onClick={() => this.props.addSymbol('/')}>&#247;</button>
                <button className="btn calc-btn" onClick={() => this.props.addSymbol('√')}>&#8730;</button>
                <button className="btn calc-btn" onClick={() => this.props.addSymbol('x')}>&times;</button>
                <button className="btn calc-btn" onClick={() => this.props.addSymbol('%')}>&#37;</button>
                <button className="btn calc-btn" onClick={() => this.props.addSymbol('-')}>-</button>
                <button className="btn calc-btn" onClick={() => this.props.addSymbol('1/x')}><sup>1</sup>/<sub>x</sub></button>
                <button className="btn calc-btn" onClick={() => this.props.addSymbol('+')}>+</button>
                <button className="btn calc-btn" onClick={() => this.props.equalSymbol()}>=</button>
            </article>
        );
    }
}

//export default connect(mapStateToProps)(CalcBtns);
export default CalcBtns;