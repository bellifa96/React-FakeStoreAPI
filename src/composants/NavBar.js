import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {link} from 'react-dom'
import {Nav} from "react-bootstrap";
import {NavDropdown} from "react-bootstrap";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

const Navbar = ({nbItem})=>{
    return(
        <nav class="navbar navbar-expand-md navbar-light mb-4" id="navbar">
           <div class='col-md-auto'>
            <a class="navbar-brand" href="#">
                React Shop
            </a>
           </div>


            <div class="collapse navbar-collapse fa-pull-right" >

                <div className="col-sm-2">
                    <a className="cart-button">
                    <FontAwesomeIcon icon={faShoppingCart} />
                      <span className="item-number "> 2</span> </a>
                </div>

            </div>

        </nav>
    )
}

export default Navbar;
