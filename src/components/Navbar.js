import React, {useContext} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";
import {NavDropdown, NavDropdownItem, NavDropdownDivider, NavDropdownHeader} from 'react-bootstrap';
import {UserContext} from "../App";

const Navbar = () => {
    const RenderMenu = () => {
        return ( 
            <>
            <NavLink to="/" className="nav-item nav-link active">Home</NavLink>
            <NavLink to="/generate-token" className="nav-item nav-link">Generate Token</NavLink>
            <NavLink to="/redeem-reward" className="nav-item nav-link">Redeem Rewards</NavLink>
            <NavLink to="/track-status" className="nav-item nav-link">Track Status</NavLink>
            <NavLink to="/submit-feedback" className="nav-item nav-link">Feedback</NavLink>
            </>
          );
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand ms-4" href="/">
                        <img src="https://storage.googleapis.com/infinity_bucket_static/staticfiles/image/site-logo/innovaccer-logo-black.svg" alt="ecovia-logo" width="200" height="45" />
                    </a>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>   
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto me-auto">
                            <RenderMenu />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;