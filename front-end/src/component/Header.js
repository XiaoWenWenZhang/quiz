import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";
const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <NavLink to="/">商城</NavLink>
        </li>
        <li>
          <NavLink to="/order">订单</NavLink>
        </li>
        <li>
          <NavLink to="/addgoods">添加商品</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
