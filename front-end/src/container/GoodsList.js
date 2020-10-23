import React, { Component } from "react";
import Goods from "./Goods";

class GoodsList extends Component {
  state = {
    goodsList: [],
  };
  componentDidMount = () => {
    fetch("http://localhost:8080/goodsList", { method: "GET" })
      .then((Response) => {
        if (Response.status === 200) {
          return Response.json();
        } else {
          Promise.reject();
        }
      })
      .then((jsonData) => {
        this.setState({
          goodsList: jsonData,
        });
      });
  };

  render() {
    return (
      <div className="goods-list">
        {this.state.goodsList.map((goods, index) => (
          <Goods key={index} AddToCart={this.props.AddToCart} goods={goods} />
        ))}
      </div>
    );
  }
}

export default GoodsList;
