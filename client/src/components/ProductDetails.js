import React, { Component } from "react";
import { getById } from "../api/products";
import { Link } from "react-router-dom";

class ProductDetails extends Component {
  state = {
    product: {},
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);

    getById(parseInt(id)).then((product) => {
      this.setState({
        loading: false,
        product,
      });
    });
  }
  render() {
    if (this.state.loading) return "Loading ..";
    const product = this.state.product;
    return (
      <section className="container">
        <Link to="/products">
          <i className="fa fa-chevron-left" aria-hidden="true"></i>&nbsp; Back
        </Link>
        <h1>Product Details</h1> <hr />
        <div className="row">
          <div className="col-md-6">
            <img src="/images/comming-soon.jpg" alt="{}" />
          </div>
          <div className="com-md-6">
            <p className="text-primary">Product details is comming soon!</p>
          </div>
        </div>
      </section>
    );
  }
}
export default ProductDetails;
