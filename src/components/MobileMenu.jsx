import { IoMdClose } from "react-icons/io";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

function MobileMenu({ onHandleMenu }) {
  return (
    <div className="w-dvw h-dvh fixed z-20 ">
      <div className="h-full w-[70%] sm:w-1/2 pt-10 pb-4 fixed top-0 left-0 z-10 bg-white px-6 flex flex-col justify-between">
        <div className="w-full text-sm ">
          <div className="flex justify-between items-center text-2xl">
            <img src={logo} alt="" className="w-12" />
            <IoMdClose onClick={onHandleMenu} />
          </div>

          <ul className="uppercase text-sm font-semibold pr-4 space-y-6 mt-12">
            <li onClick={onHandleMenu}>
              <Link to="/">Main</Link>
            </li>
            <li onClick={onHandleMenu}>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li onClick={onHandleMenu}>
              <Link to="/projects">Projects</Link>
            </li>
            <li onClick={onHandleMenu}>
              <Link to="/">Certifications</Link>
            </li>
            <li onClick={onHandleMenu}>
              <Link to="/">Contacts</Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="bg-black/60 fixed top-0 left-0 h-full w-full"
        onClick={onHandleMenu}
      ></div>
    </div>
  );
}

export default MobileMenu;
