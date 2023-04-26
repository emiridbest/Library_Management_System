import React from "react";

import logo from "./logo512.png";

const NavbarItem = ({ title, classprops }) => <li>{title}</li>;

const Navbar = () => {
  return (
    <div className="white-glassmorphism">
      <nav className="text-gradient">
        <ul>
          <img src={logo} alt="logo" className="logo" />
          {[
            "About Us",
            "Mission",
            "FAQ",
            "Partners",
            "Contact",
            "Return Policy",
            "Terms of Use",
          ].map((item, index) => (
            <NavbarItem key={item + index} title={item} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
