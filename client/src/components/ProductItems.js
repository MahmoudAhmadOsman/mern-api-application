import React, { Component } from "react";
import { Link } from "react-router-dom";
import data from "./data";

function ProductItems(props) {
  //Now extact items
  const { product } = props;

  return (
    <section className="card">
      <Link to={"/products/product-details/"}>
        <img className="card-img-top" src={product.image} alt="Tasteful Ts" />
      </Link>

      <div className="card-body">
        {/* <Link to={"/products/product-details/"}>
          <h4 className="card-title">{product.name}</h4>
        </Link> */}
        <Link to={"/product/" + product.id + "/" + product.name}>
          <h3>{product.name}</h3>
        </Link>

        <h6>
          Category: <span className="text-muted">{product.category}</span>
        </h6>
        <h6>
          Brand: <span className="text-muted">{product.brand}</span>
        </h6>
        <div className="price">
          <p>
            <b>Price:</b> $ {product.price}
          </p>
        </div>
        <hr />
        <p className="card-text">
          <div className="product-details">
            <h6> Product Details </h6>
            <p>{product.details}</p>
          </div>
        </p>
        <hr />
        <div className="starts">
          <p>
            <b className="rating">
              {/* <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-half-o" aria-hidden="true"></i>  */}
              {product.rating}
            </b>
            &nbsp; Stars | <b>{product.numReviews}</b> Reviews
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProductItems;
