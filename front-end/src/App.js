import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./container/Home";
import Header from "./component/Header";
import Order from "./container/Order";
import "./styles/App.css";
import AddGoods from "./container/AddGoods";
import Footer from "./component/Footer";

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
