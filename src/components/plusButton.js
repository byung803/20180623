import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlusButton extends Component {

    addNum = () => {
        this.props.dispatch({
            type: "INCREMENT"
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.addNum}>Plus</button>
            </div>
        );
    }
}

export default connect()(PlusButton);