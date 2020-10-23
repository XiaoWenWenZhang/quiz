import React, { Component } from "react";

class AddGoods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: 0,
      unit: "",
      img: "",
    };
  }

  handleClick = (event) => {
    event.pritemDefault();
    let data = {
      method: "POST",
      body: JSON.stringify(...this.state),
      headers: {
        "content-type": "application/json",
      },
    };
    fetch("http://localhost:8080/add", data);
  };

  render() {
    return (
      <div className="addGoods">
        <form>
          <h4>添加商品</h4>

          <div>
            <label htmlFor="name">*名称</label>
            <input
              name="name"
              placeholder="名称"
              onChange={(item) => this.setState({ name: item.target.value })}
            />
          </div>

          <div>
            <label htmlFor="name">*价格</label>
            <input
              name="price"
              placeholder="价格"
              onChange={(item) => this.setState({ price: item.target.value })}
            />
          </div>

          <div>
            <label htmlFor="name">*单位</label>
            <input
              name="unit"
              placeholder="单位"
              onChange={(item) => this.setState({ unit: item.target.value })}
            />
          </div>

          <div>
            <label htmlFor="name">*图片</label>
            <input
              name="url"
              placeholder="URL"
              onChange={(item) => this.setState({ img: item.target.value })}
            />
          </div>

          <div>
            <input
              className="submit-goods"
              type="submit"
              name="提交"
              disabled={
                !(
                  this.state.name &&
                  this.state.price &&
                  this.state.unit &&
                  this.state.img
                )
              }
              onClick={this.handleClick}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default AddGoods;
