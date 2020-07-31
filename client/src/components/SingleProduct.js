import React, { Component } from "react";
//import axios from "axios";
import moment from "moment";
import data from "./data";

class SingleProduct extends Component {
  state = {
    id: null,
    post: [],
  };

  componentDidMount() {
    console.log(this.props);
    let id = this.props.match.params.post_id;
    this.setState({
      id: id,
    });
  }
  render() {
    return (
      <section className="container">
        <div className="row">
          <div className="col-md-10">
            <h3>Post Details</h3> <hr />
            <p>{this.state.id}</p>
            {data.products.map((product) => (
              <div>
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default SingleProduct;
