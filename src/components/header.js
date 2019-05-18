import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import logo from "../images/SVG/logo-light.svg"
import facebookImg from "../images/facebook.svg";
import instagramImg from "../images/instagram.svg";


function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false);


  return (
    <nav className="bg-white">
      <div className="flex flex-wrap justify-around p-4  ">
      
        <Link to="/" className="flex items-center no-underline text-black">
        <img src={logo} className="logo flex sm:p-1 " height="20px"/>
          <span className="font-light text-lg tracking-tight">  {siteTitle}</span>
        </Link>
        

        <button
          className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-black"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-6 w-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title className="text-black">Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          <div className="text-sm">
            

           

            <Link
              to="/#form"
              className="block md:inline-block mt-4 md:mt-0 no-underline text-black text-center"
            >
              Contact
            </Link>
            <Link
              to="/"
              className="block md:inline-block mt-4 md:mt-0 no-underline text-black text-center socialIcon"
            >
              <img src={facebookImg}/>
            </Link>
            <Link
              to="/"
              className="block md:inline-block mt-4 md:mt-0 no-underline text-black text-center socialIcon"
            >
              <img src={instagramImg}/>
            </Link>
          </div>
        </div>
        
      </div>
    </nav>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
