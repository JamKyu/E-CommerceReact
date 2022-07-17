import React from "react";
import Logo from "../assets/Emporium.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row row__column">
          <Link to="/">
            <figure className="footer__logo">
              <img src={Logo} className="footer__logo--img" alt="" />
            </figure>
          </Link>
          <div className="footer__list">
            <Link to="/" className="footer__link">
              Home
            </Link>
            <span className="footer__link no-cursor">About</span>
            <Link to="/MagicItems" className="footer__link">
              Magic Items
            </Link>
            <Link to="/cart" className="footer__link">
              Bag
            </Link>
          </div>
          <div className="footer__copyright">
            Copyright &copy; 2022 Kyu's Emporium
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
