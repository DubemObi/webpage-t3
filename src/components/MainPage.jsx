import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import mainImage from "../img/house.png";
import about1 from "../img/about1.png";
import about2 from "../img/about2.png";
import about3 from "../img/about3.png";
import project2 from "../img/project2.png";
import project3 from "../img/project3.png";
import project4 from "../img/project4.png";
import project5 from "../img/project5.png";
import project6 from "../img/project6.png";
import contactImage from "../img/contact.png";
import Footer from "./Footer";

function MainPage() {
  return (
    <>
      <div className="px-8 sm:px-32 w-full  sm:pt-0 pt-10">
        <div className="sm:flex justify-between w-full">
          <div className=" space-y-6 sm:space-y-14 flex flex-col justify-end pb-6 sm:pb-20">
            <div className="text-center sm:pt-10 md:pt-0 sm:text-left">
              <h1 className="text-5xl uppercase text-grey-1">Project</h1>
              <h1 className="text-5xl font-semibold">Lorum</h1>
            </div>
            <div className="flex gap-4 mx-auto sm:mx-0">
              <GoArrowLeft className="p-2 rounded-md box-content border-2 border-grey-1" />
              <GoArrowRight className="p-2 rounded-md box-content border-2 border-grey-1" />
            </div>
            <div className="text-grey-1">
              <p className="text-center sm:text-left">
                01 <span className=" mx-2 text-2xl">/</span> 02
              </p>
            </div>
          </div>
          <div className="w-full sm:w-3/5 relative mx-auto sm:mx-0">
            <div className="bg-white absolute bottom-0 left-0 py-4 flex items-center gap-4 px-6">
              <p className="text-xs uppercase tracking-wider">View Project</p>
              <GoArrowRight />
            </div>
            <img src={mainImage} alt="" className="w-full" />
          </div>
        </div>

        <div className=" my-20 bg-grey-3 min-h-72 px-6 w-full md:flex justify-end relative">
          <div className="space-y-4 md:space-y-0 flex items-center gap-4 md:absolute left-14 top-8">
            <div className="space-y-4 pt-4 md:pt-0">
              <img src={about1} alt="" className="w-40 lg:w-48" />
              <img src={about3} alt="" className="w-40 lg:w-48" />
            </div>
            <img src={about2} alt="" className="w-40 lg:w-48" />
          </div>
          <div className="md:w-1/2 pt-10 pb-6">
            <h2 className="text-5xl text-grey-1">About</h2>
            <p className="my-3 lg:w-4/5 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <button className="flex items-center gap-3 bg-white px-6 py-3 text-xs tracking-wider uppercase">
              Read More <GoArrowRight />
            </button>
          </div>
        </div>

        <div className="pt-0 sm:pt-20 pb-6">
          <h1 className="text-5xl text-grey-1 ">
            Main Focus/ Mission Statement
          </h1>
          <div className="md:flex items-center mt-8 md:mt-4 gap-16 md:px-6 space-y-8 md:space-y-0">
            <div className="flex md:items-center md:w-1/2 gap-4">
              <h1 className="text-9xl font-bold text-grey-4">1</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                efficitur, lectus et facilisis placerat.
              </p>
            </div>
            <div className="flex md:items-center md:w-1/2 gap-4">
              <h1 className="text-9xl font-bold text-grey-4">2</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                efficitur, lectus et facilisis placerat.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full my-14">
          <h1 className="text-5xl text-grey-1 mb-10">Our Projects</h1>
          <div className="w-full space-y-4">
            <div className="w-full sm:flex items-center gap-4 space-y-4 sm:space-y-0">
              <div className="sm:w-1/2 relative">
                <div className="absolute top-0 px-10 flex flex-col justify-center gap-4 h-full w-full bg-black/80 text-white cursor-pointer">
                  <p className="font-bold text-2xl md:text-5xl w-1/2 hover:text-6xl">
                    Sample Project
                  </p>
                  <p className="flex items-center gap-2 text-xs tracking-widest uppercase">
                    View More <GoArrowRight />
                  </p>
                </div>
                <img
                  src={project6}
                  alt=""
                  className="w-full h-54 object-cover"
                />
              </div>
              <img
                src={project2}
                alt=""
                className="sm:w-1/2 h-54 object-cover"
              />
            </div>
            <div className="sm:flex items-center justify-between gap-4 space-y-4 sm:space-y-0">
              <img
                src={project3}
                alt=""
                className="w-full h-36 sm:h-44 sm:w-1/4 md:w-1/3 object-cover"
              />
              <img
                src={project4}
                alt=""
                className="w-full h-36 sm:h-44 sm:w-1/3 md:w-1/2 object-cover"
              />
              <img
                src={project5}
                alt=""
                className="w-full h-36 sm:h-44 sm:w-1/4 md:w-1/3 object-cover"
              />
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <button className="uppercase bg-black text-white text-xs tracking-widest px-6 py-4 flex items-center gap-2">
              All Projects <GoArrowRight />
            </button>
          </div>
        </div>

        <div className="w-full mb-14">
          <h1 className="text-5xl text-grey-1 mb-6">Contact Us</h1>
          <div className="w-full flex items-center gap-6">
            <div className="w-full md:w-2/5 space-y-4">
              <input
                type="text"
                className="h-12 w-full bg-grey-2 px-6 block placeholder:text-sm"
                placeholder="Name"
              />
              <input
                type="text"
                className="h-12 w-full bg-grey-2 px-6 block placeholder:text-sm"
                placeholder="Phone Number"
              />
              <input
                type="text"
                className="h-12 w-full bg-grey-2 px-6 block placeholder:text-sm"
                placeholder="Email"
              />
              <input
                type="text"
                className="h-12 w-full bg-grey-2 px-6 block placeholder:text-sm"
                placeholder="interested in"
              />
              <textarea
                name=""
                id=""
                placeholder="Message"
                className="px-6 pt-2 bg-grey-2 w-full"
                rows={4}
              ></textarea>
            </div>
            <img
              src={contactImage}
              alt=""
              className="h-80 w-1/2 md:w-full object-cover hidden md:block"
            />
          </div>
          <div className="mt-4">
            <button className="uppercase bg-black text-white text-xs tracking-widest px-8 py-4 flex items-center gap-2">
              Send Email <GoArrowRight />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MainPage;
