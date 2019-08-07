import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CalcBtns from './components/CalcBtns';
import Memory from './components/Memory';
import Screen from './components/Screen';
import Numbers from './components/Numbers';
import * as CalculatorActionTypes from './actions/number';
import './App.css';

class App extends Component {
  // static PropTypes = {

  // }

  render() {
    const { dispatch } = this.props;
    const addNumber = bindActionCreators(CalculatorActionTypes.addNumber, dispatch);

    return (
      <section id="calculator">
        <Screen />
        <div className="calcInner">
          <Memory />
          <div className="flex-container" style={{ display: 'flex' }}>
            <Numbers 
              addNumber={addNumber}
            />
            <CalcBtns />
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