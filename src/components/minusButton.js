import React, { Component } from 'react';
import { connect } from 'react-redux';

class MinusButton extends Component {
    minusNum = () => {
        this.props.dispatch({
            type: 'DECREMENT'
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.minusNum}>Minus</button>
            </div>
        );
    }
}

export default connect()(MinusButton);