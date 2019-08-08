import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

class Screen extends Component {

    static propTypes = {
        num: propTypes.string.isRequired
    };

    render() {
        const { displayNum } = this.props;
        console.log(displayNum);
        return(
            <article id="screen">
                <h2 className="screenText">{displayNum}</h2>
            </article>
        );
    }
}

const mapStateToProps = state => (
    {
      displayNum: state.calculate.displayNum,
    }
  );  

export default connect(mapStateToProps)(Screen);