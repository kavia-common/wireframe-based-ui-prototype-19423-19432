import React from "react";
import "./Navigation.css";

/**
 * PUBLIC_INTERFACE
 * Navigation
 * A top navigation bar using design tokens. Includes a title and simple links.
 */
export default function Navigation() {
  return (
    <nav className="nav">
      <div className="nav__inner container">
        <div className="nav__brand">
          <span className="nav__logo" aria-hidden="true">●</span>
          <span className="nav__title">Kavia UI</span>
        </div>
        <ul className="nav__links" role="menubar" aria-label="Primary">
          <li role="none"><a role="menuitem" href="#home" className="nav__link is-active">Home</a></li>
          <li role="none"><a role="menuitem" href="#components" className="nav__link">Components</a></li>
          <li role="none"><a role="menuitem" href="#about" className="nav__link">About</a></li>
        </ul>
      </div>
    </nav>
  );
}
