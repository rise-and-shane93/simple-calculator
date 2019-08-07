import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

class Screen extends Component {
    static propTypes = {
        num: propTypes.number.isRequired
    };

    render() {
        const { num } = this.props;
        return(
            <article id="screen">
                <h2 className="screenText">{num}</h2>
            </article>
        );
    }
}

// Screen.PropTypes = {
//     num: PropTypes.number.isRequired
// }

const mapStateToProps = state => (
    {
      num: state.calculate
    }
  );  

export default connect(mapStateToProps)(Screen);