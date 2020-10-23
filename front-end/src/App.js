import React, { Component } from "react";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import GoodsList from "./container/GoodsList";
import Header from "./component/Header";
import Order from "./container/Order";
import "./styles/App.css";
import AddGoods from "./container/AddGoods";
import Footer from "./component/Footer";

class App extends Component {
  state = {
    cartGoodsList: {},
  };

  addToCart = (goods) => {
    let cartGoods = this.state.cartGoodsList[goods.name];
    if (cartGoods) {
      cartGoods.count += 1;
    } else {
      cartGoods = {
        count: 1,
        goods,
      };
    }
    this.setState({
      cartGoodsList: Object.assign(
        { [goods.name]: cartGoods },
        this.state.cartGoodsList
      ),
    });
  };
  render() {
    return (
      <div>
        <div className="app">
          <BrowserRouter>
            <Header />
            <Route exact path="/">
              <GoodsList onAddToCart={this.addToCart} />
            </Route>
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
