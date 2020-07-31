import React, { Component } from "react";
import { Link } from "react-router-dom";

import data from "./data";
class Products extends Component {
  render() {
    return (
      <section className="container home__product">
        <h1 className="text-center">Products</h1> <hr />
        {data.products.map((product) => (
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <Link to={"/product/" + product._id}>
                    <img src={product.image} alt={product.name} />
                  </Link>
                  <p className="card-text">
                    <Link to={"/product/" + product._id}>
                      <h3>{product.name}</h3>
                    </Link>

                    <h6 className="text-muted">Category: {product.category}</h6>
                    <span>
                      <b>Brand Name:</b> {product.brand}
                    </span>
                    <div className="card-body">
                      <p>
                        <b>Product Details:</b> {product.details}
                      </p>

                      <div className="product-price">
                        <b>Price:</b> ${product.price}
                      </div>
                      <hr />
                      <div className="product-rating">
                        <span className="rating"> {product.rating}</span> Stars
                        | {product.numReviews}
                        <span className="reviews"> Reviews</span>
                      </div>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    );
  }
}

export default Products;
