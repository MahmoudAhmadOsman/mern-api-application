import React, { Component } from "react";

import { BrowserRouter, Route } from "react-router-dom";

import "./App.scss";

import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";

class App extends Component {
  render() {
    return (
      <section className="" id="main_container">
        <BrowserRouter>
          <div>
            <Navigation />
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/contact" component={Contact} />
            {/* <Route path="/product/:id" component={ProductDetails} /> */}

            <Route path="/product/:id" exact component={ProductDetails} />
          </div>
        </BrowserRouter>

        <Footer />
      </section>
    );
  }
}
export default App;
