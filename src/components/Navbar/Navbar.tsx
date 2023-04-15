import { useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/img/logo.png";
import { IonIcon } from "@ionic/react";
import { menu, close, search } from "ionicons/icons";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showSearchBox, setShowSearchBox] = useState<boolean>(false);

  const handleMenu = () => {
    setShowSearchBox(false);
    setShowMenu((prev) => !prev);
  };

  const handleSearchBox = () => {
    setShowMenu(false);
    setShowSearchBox((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="movie app logo" className="logo" />

      {showSearchBox && (
        <form>
          <input
            type="text"
            placeholder="Buscar Película"
            className="searchBoxInput"
          />
        </form>
      )}

      <div className="iconsWrapper">
        <IonIcon
          icon={search}
          className="searchIcon"
          onClick={handleSearchBox}
        />

        <IonIcon
          icon={showMenu ? close : menu}
          className="menuIcon"
          onClick={handleMenu}
        />
      </div>

      {showMenu && (
        <ul className="menu">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
      )}
    </nav>
  );
};
