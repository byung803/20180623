import React, { Component } from 'react';
import { connect } from 'react-redux';

class CounterHome extends Component {
    render() {
        return (
            <div>CounterHome
            <p>{this.props.count}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    count: state.count
})

export default connect(mapStateToProps)(CounterHome);