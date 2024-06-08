import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenuOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      {isOpen && <MobileMenu onHandleMenu={handleMenuOpen} />}

      <nav className="hidden bg-white shadow-md py-4 px-32 sm:flex items-center  justify-between">
        <img src={logo} alt="" />
        <ul className="flex gap-8 md:gap-20 uppercase text-xs  pr-4">
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/">Certifications</Link>
          </li>
          <li>
            <Link to="/">Contacts</Link>
          </li>
        </ul>
      </nav>
      <nav className="sm:hidden bg-white shadow-md flex justify-between items-center h-20 px-8">
        <img src={logo} alt="" className="w-14" />
        <AiOutlineMenu className="text-xl" onClick={handleMenuOpen} />
      </nav>
    </>
  );
};

export default Navbar;
