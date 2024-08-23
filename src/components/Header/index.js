import React, { Component } from "react";
import { Link } from "react-router-dom";
import './index.css'

class Header extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-body-tertiary nav-bar">
                    <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img className="career-carve-logo" src="https://www.careercarve.com/Career_Carve_Logo__1_-removebg-preview%202.png" alt='career-carve-logo'/></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/* Move the unordered list to the end */}
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item list-items">
                                    <Link className="nav-link" aria-current="page" to='/'>Home</Link>
                                </li>
                                <li className="nav-item list-items">
                                    <Link className="nav-link" to="/">About</Link>
                                </li>
                                <li className="nav-item list-items">
                                    <Link className="nav-link" to="/">Events</Link>
                                </li>
                                <li className="nav-item list-items">
                                    <Link className="nav-link" to="/">Mentors</Link>
                                </li>
                                <li className="nav-item list-items">
                                    <Link className="nav-link" to="/">Blogs</Link>
                                </li>
                                <li className="nav-item list-items">
                                    <Link className="nav-link" to="/">Pricing</Link>
                                </li>
                                <li className="nav-item list-items">
                                    <Link className="nav-link" to="/">Contact</Link>
                                </li>
                                <li className="nav-item list-items">
                                    <Link className="nav-link" to="/">Become a Mentor</Link>
                                </li>
                                {/* <li className="nav-item dropdown list-items">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default Header