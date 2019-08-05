import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // static PropTypes = {

  // }

  render() {
    return (
      <section id="calculator">
        <Screen />
        <Memory />
        <CalcBtns />
        <Numbers />
      </section>
    );
  }
};

// const mapStateToProps = state => (
//   {

//   }
// );

export default App;