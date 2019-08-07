import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

class Screen extends Component {
    static propTypes = {
        num: propTypes.string.isRequired
    };

    componentWillUpdate() {
        console.log(this.props.num);
    }

    render() {
        const { num } = this.props;
        return(
            <article id="screen">
                <h2 className="screenText">{num}</h2>
            </article>
        );
    }
}

const mapStateToProps = state => (
    {
      num: state.startValue
    }
  );  

export default connect(mapStateToProps)(Screen);