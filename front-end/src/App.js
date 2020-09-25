
import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Header from "./Header"
import Order from "./Order"
import './App.css';
import AddGoods from "./AddGoods";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div>

        <div className="app">
          <BrowserRouter>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/order" component={Order} />
            <Route path="/addGoods" component={AddGoods} />
            <Footer />
          </BrowserRouter>
        </div>


      </div>
    );
  }
}

export default App;

