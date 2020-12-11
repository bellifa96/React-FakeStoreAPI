import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {link} from 'react-dom'
import {Nav} from "react-bootstrap";
import {NavDropdown} from "react-bootstrap";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {faShoppingBag} from "@fortawesome/free-solid-svg-icons";

const Products = ({products})=>{
    return(
        <div className="col-md-8 row">
            {products.map(item => (
            <div className="card col-md-5 mr-2 mb-2" >
                <img height="200px" key={item.image} src={item.image} />
                <div className="card-body">
                    <h5 className="card-title" key={item.title}>{item.title}</h5>
                    <p className="card-text" key={item.description}>{item.description}</p>
                    <p className='card-category' key={item.id}> {item.category}</p>

                    <div className="row card-foot">
                        <p className="" key={item.price} >{item.price} €</p>
                        <a href="#"> <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon></a>
                  </div>
                </div>
            </div>
                ))}

        </div>
    )
}

export default Products;
