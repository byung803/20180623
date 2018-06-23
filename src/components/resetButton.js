import React from 'react';
import { connect } from 'react-redux';

const ResetButton = (props) => {
    return (
        <div>
            <button onClick={() => {
                props.dispatch({
                    type: 'RESET'
                })
            }}>Reset</button>
        </div>
    );
}

export default connect()(ResetButton);