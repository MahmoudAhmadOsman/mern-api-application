import React, { Component } from "react";
import data from "./data";
const Products = () => {
  return (
    <section className="home__product">
      <h1 className="text-center">Products</h1>
      {data.products.map((product) => (
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-xs-12">
              <div className="card">
                <a href={"/product/" + product._id}>
                  <img src={product.image} alt="{product.image}" />
                </a>
                <p className="card-text">
                  <h3>{product.name}</h3>
                  <h6 className="text-muted">Category: {product.category}</h6>
                  <span>
                    <b>Brand Name:</b> {product.brand}
                  </span>
                  <div className="card-body">
                    <div>
                      <b>Product Details:</b> {product.details}
                    </div>
                    <div className="product-price">
                      <b>Price:</b> ${product.price}
                    </div>
                    <hr />
                    <div className="product-rating">
                      <span className="rating"> {product.rating}</span> Stars |{" "}
                      {product.numReviews}
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
};

export default Products;
