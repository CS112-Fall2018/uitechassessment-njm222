import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Nav extends Component {

    render() {
        return (
            <nav className="navbar my-5">
                <ul className="navbar-nav justify-content-around flex-row w-100">
                    <li className="nav-item btn btn-outline-dark btn-block m-1">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item btn btn-outline-dark btn-block m-1">
                        <Link className="nav-link" to="/cart/">Cart</Link>
                    </li>
                    <li className="nav-item btn btn-outline-dark btn-block m-1">
                        <Link className="nav-link" to="/item/">Item</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;