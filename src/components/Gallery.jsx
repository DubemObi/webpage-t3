import gallery1 from "../img/gallery1.png";
import gallery2 from "../img/gallery2.png";
import gallery3 from "../img/gallery3.png";
import gallery4 from "../img/gallery4.png";
import gallery5 from "../img/gallery5.png";
import gallery6 from "../img/gallery6.png";
import gallery7 from "../img/gallery7.png";
import gallery8 from "../img/gallery8.png";
import gallery9 from "../img/gallery9.png";
import gallery10 from "../img/gallery10.png";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Footer from "./Footer";

function Gallery() {
  return (
    <>
      <div className="px-8 sm:px-32 w-full pt-10 sm:pt-12 pb-14">
        <h1 className="text-5xl text-grey-1">
          Photo <span className="block font-bold text-black">Gallery</span>
        </h1>
        <div className="w-full my-8 border-t-2 border-grey-2 pt-8 flex flex-wrap gap-6">
          <img src={gallery1} alt="" className="w-36 sm:w-44 " />
          <img src={gallery2} alt="" className="w-36 sm:w-44 " />
          <img src={gallery3} alt="" className="w-36 sm:w-44 " />
          <img src={gallery4} alt="" className="w-36 sm:w-44 " />
          <img src={gallery5} alt="" className="w-36 sm:w-44 " />
          <img src={gallery6} alt="" className="w-36 sm:w-44 " />
          <img src={gallery7} alt="" className="w-36 sm:w-44 " />
          <img src={gallery8} alt="" className="w-36 sm:w-44 " />
          <img src={gallery9} alt="" className="w-36 sm:w-44 " />
          <img src={gallery10} alt="" className="w-36 sm:w-44 " />
        </div>
        <div className="flex gap-6">
          <div className="text-grey-1">
            <p className="text-center sm:text-left">
              01 <span className=" mx-2 text-2xl">/</span> 02
            </p>
          </div>
          <div className="flex gap-4 mx-auto sm:mx-0">
            <GoArrowLeft className="p-2 rounded-md box-content border-2 border-grey-2" />
            <GoArrowRight className="p-2 rounded-md box-content border-2 border-grey-2" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Gallery;
