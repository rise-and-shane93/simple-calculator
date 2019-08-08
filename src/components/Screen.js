import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

class Screen extends Component {

    static propTypes = {
        num: propTypes.string.isRequired
    };

    render() {
        const { num } = this.props;
        console.log(num);
        return(
            <article id="screen">
                <h2 className="screenText">{num === '' ? '0' : num}</h2>
            </article>
        );
    }
}

const mapStateToProps = state => (
    {
      num: state.calculate.startValue
    }
  );  

export default connect(mapStateToProps)(Screen);