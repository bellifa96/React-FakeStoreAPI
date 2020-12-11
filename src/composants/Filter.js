import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {link} from 'react-dom'
import {Nav} from "react-bootstrap";
import {NavDropdown} from "react-bootstrap";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

const Filter = ({handleChange,nbItem})=>{
    return(
      <div class="col-md-4">
          <div className="md-form mt-0">
              <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
          </div>
          <div>
              <input type="checkbox" id="men" name="men clothing" onChange={handleChange}/>
                  <label htmlFor="men clothing">Men clothing</label>
          </div>
          <div>
              <input type="checkbox" id="women" name="women clothing" onChange={handleChange}/>
              <label htmlFor="women clothing">Women clothing</label>
          </div>
          <div>
              <input type="checkbox" id="jewelery" name="jewelery" onChange={handleChange}/>
              <label htmlFor="jewelery">Jewelery</label>
          </div>
          <div>
              <input type="checkbox" id="elec" name="electronics" onChange={handleChange}/>
              <label htmlFor="electronics">Electronics</label>
          </div>

          <div>
              <input type="number" id="min" name="min" onChange={handleChange}/>
              <label htmlFor="min">minimum</label>
          </div>
          <div>
              <input type="number" id="max" name="max" onChange={handleChange}/>
              <label htmlFor="max">minimum</label>
          </div>
      </div>
    );
}

export default Filter;
