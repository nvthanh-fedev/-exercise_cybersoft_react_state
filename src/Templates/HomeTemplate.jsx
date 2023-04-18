import React, { Component } from "react";
//Component này sẽ đại diện cho component được load trên url
import { Outlet, NavLink } from "react-router-dom";

export default class HomeTemplate extends Component {
  render() {
    return (
      <div>
        <header className="header p-1 bg-secondary text-light">
          <nav className="d-flex">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "mx-2 nav-link p-2 text-decoration-underline"
                  : "text-light mx-2 nav-link p-2"
              }
              style={({ isActive }) =>
                isActive ? { textTransform: "uppercase" } : {}
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive
                  ? "mx-2 nav-link p-2 text-decoration-underline"
                  : "text-light mx-2 nav-link p-2"
              }
              style={({ isActive }) =>
                isActive ? { textTransform: "uppercase" } : {}
              }
            >
              Try Glass
            </NavLink>
          </nav>
        </header>
        <main style={{ minHeight: "1000px" }}>
          <Outlet></Outlet>
        </main>
        <footer className="p-3 text-center ">
          <h1>Footer</h1>
        </footer>
      </div>
    );
  }
}
