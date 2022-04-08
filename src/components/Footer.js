import React, {useContext} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";
import {NavDropdown, NavDropdownItem, NavDropdownDivider, NavDropdownHeader} from 'react-bootstrap';
import {UserContext} from "../App";
import MadeWithLove from 'react-made-with-love';

const Footer = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid justify-content-center">
                    
                      
                <MadeWithLove
                by="Manish Pritmani  "
                emoji
                /> <a>
                    &nbsp; | &nbsp; Innovaccer - 2022
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default Footer;