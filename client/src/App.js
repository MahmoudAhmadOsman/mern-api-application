import React, { Component } from "react";
import moment from "moment";
import { useFormik } from "formik";
import "./App.scss";
import axios from "axios";
import mahmoud from "./images/mahmoud.jpg";
import Footer from "./Footer";

class App extends Component {
  // State for form items
  state = {
    title: "",
    author: "",
    body: "",
    //2 for getAllPost
    posts: [],
  };

  //4 getAllPost . Call this fucntion when component did mount
  componentDidMount = () => {
    this.getAllPost();
  };

  // GET ALl posts /1
  getAllPost = () => {
    axios
      .get("/api")
      .then((response) => {
        const data = response.data;
        //3 for getAllPost
        this.setState({ posts: data });
        console.log("Data has been fetched!");
      })
      .catch(() => {
        alert("Error occured while retrieving data!");
      });
  };

  //Desctructuring the function data
  /*
    handleFormData = ({target}) => {
      const {name, value} = target;

        //Now update the state using setState() function
        this.setState({
          [name]: value,
        });
      };
*/

  handleFormData = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    //Now update the state //Dynamically pass the value of name
    this.setState({
      [name]: value,
    });
  };

  // On submit function
  submitHandler = (e) => {
    e.preventDefault();
    // alert(this.state.title + this.state.author + this.state.body);

    //Send the data to the server/MongoDB ---> this is the data you are sending to the server from the HTML form
    const payload = {
      title: this.state.title,
      author: this.state.author,
      body: this.state.body,
    };

    //alert(this.state.title + this.state.author + this.state.body);
    //Bring Axios in order to make post request
    axios({
      url: "/api/save",
      method: "POST",
      data: payload,
    })
      .then(() => {
        console.log("Successfully sumitted data!");
        //Call the function here
        this.resetFormInputData();
        //After a post is submitted, refresh the page and show post data
        this.getAllPost();
      })
      .catch(() => {
        console.log("Internal server error!");
      });
  };

  //Cleare the form data after submitting the form. Call this function after axios submits the form data successfully
  resetFormInputData = () => {
    this.setState({
      title: "",
      author: "",
      body: "",
    });
  };

  //btn alert
  activatebtnAlert = () => {
    alert("Bummer! You can't edit this!");
  };
  activatebtnDelAlert = () => {
    alert("Bummer! You can't delete this!");
  };
  //Display all the posts now
  displayAllPost = (posts) => {
    if (!posts.length) return null;
    return posts.map((post, index) => (
      <div key={index} className="display_blog_post">
        <h3>
          <a href="#">{post.title}</a>
        </h3>
        <p className="post-details">{post.body}</p>
        <div className="author-and-date">
          <b>
            <i className="fa fa-user" aria-hidden="true" title="Author"></i>
          </b>
          &nbsp; Written By &nbsp;
          {post.author}
          <span className="published">
            <b>
              <i
                className="fa fa-calendar-check-o"
                aria-hidden="true"
                title="Published Date"
              ></i>
            </b>
            &nbsp; &nbsp;{moment(post.publishedDate).format("MM/DD/YYYY")}
          </span>
        </div>
        <div className="action">
          <a
            href="#"
            className="btn btn-outline-info btn-sm text-uppercase mr-3 font-weight-bold"
            onClick={this.activatebtnAlert}
          >
            edit
          </a>
          <a
            href="#"
            className="btn btn-outline-danger btn-sm text-uppercase font-weight-bold"
            onClick={this.activatebtnDelAlert}
          >
            Delete
          </a>
        </div>
        <hr />
      </div>
      // post.publishedDate.format()
    ));
  };

  render() {
    console.log(this.state);
    return (
      <section className="container" id="main_container">
        <h1>
          Blog Post Demo -
          <small> Built with React.js, Axios, Express.js & MongoDB.</small>
        </h1>
        <span>
          <small className="text-muted">
            <img src={mahmoud} className="dev-img" alt="Mahmoud Osman" />
            Developed by <a href="http://mahmoudosman.com/">Mahmoud Osman</a>
          </small>
        </span>
        <hr />
        <div className="row">
          <div className="col-md-6 post__content" id="post__content">
            <h1 className="text-danger">All Posts</h1> <hr />
            {/* [posts] is comming from the State at the top */}
            {this.displayAllPost(this.state.posts)}
          </div>

          <div className="col-md-6" id="post_form">
            <h1 className="text-success text-center">Enter Your Post Here</h1>
            <hr />
            <form method="POST" onSubmit={this.submitHandler}>
              <div className="form-group">
                <label htmlFor="title" className="h5">
                  Post Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  placeholder="Enter post title"
                  onChange={this.handleFormData}
                  value={this.state.title}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="author" className="h5">
                  Author Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="author"
                  placeholder="Enter author name"
                  onChange={this.handleFormData}
                  value={this.state.author}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="body" className="h5">
                  Post Body
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  name="body"
                  cols="8"
                  rows="8"
                  placeholder="Enter post body"
                  onChange={this.handleFormData}
                  value={this.state.body}
                  required
                ></textarea>
                <button className="btn btn-outline-success mt-3 text-uppercase font-weight-bold">
                  Submit
                </button>
                <p className="mt-4 text-muted">
                  <b>Note:</b> Add a post and see how the demo application is
                  functioning!
                </p>
              </div>
            </form>
          </div>
        </div>{" "}
        <Footer />
      </section>
    );
  }
}
export default App;
