import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <p><NavLink to="/">Home</NavLink></p>
                <p><NavLink to="/plus">Plus</NavLink></p>
                <p><NavLink to="/minus">Minus</NavLink></p>
                <p><NavLink to="/reset">Reset</NavLink></p>
            </div>
        )
    }
}

export default Header;