import React, { Component } from "react";
import moment from "moment";
import data from "./data";
import axios from "axios";

class ProductDetails extends Component {
  render() {
    const p = this.props;
    return (
      <section className="container">
        <h1>Product Details</h1>
      </section>
    );
  }
}

export default ProductDetails;
