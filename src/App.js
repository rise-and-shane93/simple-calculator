import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CalcBtns from './components/CalcBtns';
import Memory from './components/Memory';
import Screen from './components/Screen';
import Numbers from './components/Numbers';
//import { calcActions, calcBtns, numberBtns } from './actionTypes/calcActionTypes';
import * as ActionCreators from './actions/number';
import './App.css';

class App extends Component {
  // static PropTypes = {

  // }

  // componentDidMount() {
  //   console.log(ActionCreators.calcActions.POWER_BUTTON);
  // }

  render() {
    const { dispatch } = this.props;
    const addNumber = bindActionCreators(ActionCreators.addNumber, dispatch);
    const addSymbol = bindActionCreators(ActionCreators.addSymbol, dispatch);
    const equalSymbol = bindActionCreators(ActionCreators.equalSymbol, dispatch);

    return (
      <section id="calculator">
        <Screen />
        <div className="calcInner">
          <Memory />
          <div className="flex-container" style={{ display: 'flex' }}>
            <Numbers 
              addNumber={addNumber}
            />
            <CalcBtns 
              addSymbol={addSymbol}
              equalSymbol={equalSymbol}
            />
          </div>
        </div>
      </section>
    );
  }
};

const mapStateToProps = state => (
  {
    state
  }
);

export default connect(mapStateToProps)(App);