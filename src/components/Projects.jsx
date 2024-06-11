import Footer from "./Footer";
import SingleProject from "./SingleProject";
import singleProject1 from "../img/single-project1.png";
import singleProject2 from "../img/single-project2.png";
import singleProject3 from "../img/single-project3.png";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

function Projects() {
  return (
    <>
      <div className="px-8 sm:px-16 md:px-32 w-full pt-10 sm:pt-12 pb-14">
        <h1 className="text-5xl text-grey-1">
          Our <span className="block font-bold text-black">Projects</span>
        </h1>
        <div className="w-full mt-8 mb-12 border-t-2 border-grey-2 pt-8 space-y-8">
          <SingleProject image={singleProject1} title={"Sample Project"} />
          <SingleProject image={singleProject2} title={"Sample Project 2"} />
          <SingleProject image={singleProject3} title={"Sample Project 3"} />
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

export default Projects;
