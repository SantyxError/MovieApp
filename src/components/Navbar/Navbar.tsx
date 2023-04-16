import { useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/img/logo.png";
import { IonIcon } from "@ionic/react";
import { search } from "ionicons/icons";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="movie app logo" className="logo" />

      <div className="menuWrapper">
        <ul className="menu">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>

        <form className="searchWrapper">
          <input placeholder="Buscar película" className="searchBox" />
          <button type="submit" className="searchButton" aria-label="Búsqueda">
            <IonIcon icon={search} />
          </button>
        </form>
      </div>
    </nav>
  );
};
