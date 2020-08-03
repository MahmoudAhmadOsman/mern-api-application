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
      <section className="container" id="prod_details_page">
        <Link to="/products">
          <i className="fa fa-chevron-left" aria-hidden="true"></i>&nbsp; Back
        </Link>
        <h1>Product Details</h1> <hr />
        <p className="text-danger pt-4 pb-4 text-center">
          Product details is comming soon!
        </p>
        <div className="row">
          <div className="col-md-4">
            <img
              className="prod-details-image"
              src="/images/shirt01.png"
              alt="{}"
            />
            <hr />
            <h6 className="text-muted mt-3">Product Details</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              repudiandae recusandae quasi iste commodi eaque velit, explicabo
              exercitationem dolorem temporibus libero necessitatibus sit
              possimus expedita!
            </p>
          </div>
          <div className="col-md-2">
            <p className="list-group-item">
              <b>Quantity: 0</b>
            </p>
            <p className="list-group-item">
              <b>Category:</b>
            </p>
            <p className="list-group-item">
              <b>Brand:</b>
            </p>
            <p className="list-group-item">
              <b>Product Name: </b>
            </p>
            <p className="list-group-item">
              <b>Price: $</b>
            </p>
          </div>

          <div className="col-md-2">
            <div class="form-group list-group-item">
              <select name="qt" className="form-control form-control-sm">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>

          <div className="col-md-4">
            <h5 className="list-group-item">Product Reviews</h5>
            <p className="list-group-item">
              <b className="text-warning">4.6 </b> Stars | <b>482</b> Reviews
            </p>

            <button
              type="button"
              className="btn btn-outline-warning btn-block btn-lg mt-4"
            >
              <h4> Add to Cart</h4>
            </button>
          </div>
        </div>
      </section>
    );
  }
}
export default ProductDetails;
