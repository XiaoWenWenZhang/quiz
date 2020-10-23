import React, { Component } from "react";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import GoodsList from "./container/GoodsList";
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
            <Route exact path="/" component={GoodsList} />
            <Route path="/order" component={Order} />
            <Route path="/addGoods" component={AddGoods} />
            <Redirect to="/" />
            <Footer />
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
