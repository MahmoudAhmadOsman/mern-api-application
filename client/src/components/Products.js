import React, { Component } from "react";
import { Link } from "react-router-dom";
//import data from "./data";
import ProductItems from "./ProductItems";
import ProductsApi from "../api/products";

class Products extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    ProductsApi.getAll().then((data) => {
      this.setState({
        products: data,
      });
    });
  }

  render() {
    return (
      <section className="container home__product">
        <h1 className="text-center">Products</h1> <hr />
        <div className="row">
          {this.state.products.map((product) => (
            <div className={"col-md-4"} key={product.id}>
              <ProductItems product={product} />
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Products;
