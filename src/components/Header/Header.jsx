import React from "react";
import cls from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";

function Header(props) {
  return (
    <div className={cls.header}>
      <div className={cls.nav}>
        <h1>AquaticKingdom</h1>
        <NavLink
          exact
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "#b5b5b5",
          })}
        >
          Главная
        </NavLink>
        <NavLink
          exact
          to="/food"
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "#b5b5b5",
          })}
        >
          Еда
        </NavLink>
        <NavLink
          exact
          to="/shop"
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "#b5b5b5",
          })}
        >
          Магазин
        </NavLink>
      </div>
      <div className={cls.headerRight}>
        <div className={cls.search}>
          <input type="text" placeholder="Искать" />
        </div>
        <div className={cls.auth}>
          <Link to={"/registration"}>
            Войти
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
