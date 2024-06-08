import logo from "../img/logo-white.png";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookF, FaLinkedin, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="px-8 sm:px-32 w-full bg-black pt-14 pb-6 text-white">
      <div className="flex sm:items-start items-end   sm:flex-row flex-wrap-reverse sm:flex-nowrap gap-6 justify-between w-full mb-10">
        <img src={logo} alt="" className="w-24 mt-4 sm:mt-0" />
        <div className="text-sm space-y-2">
          <h2 className="font-bold text-base mb-5">Information</h2>
          <p>Main</p>
          <p>Gallery</p>
          <p>Projects</p>
          <p>Certifications</p>
          <p>Contacts</p>
        </div>
        <div className="text-sm space-y-4">
          <h1 className="font-bold text-base mb-5">Contacts</h1>
          <div className="flex gap-2 items-center">
            <CiLocationOn className="text-xl" />
            <p className="w-36">1234 Sample Street Austin Texas 78704</p>
          </div>
          <div className="flex gap-3 items-center ">
            <BsTelephone />
            <p>512 333 2222</p>
          </div>
          <div className="flex gap-2 items-center">
            <MdOutlineMail className="text-lg" />
            <p>sampleemail@gmail.com</p>
          </div>
        </div>
        <div className="text-sm space-y-2">
          <h1 className="font-bold text-base mb-5">Social Media</h1>
          <div className="flex items-center text-lg space-x-4">
            <FaFacebookF />
            <FaXTwitter />
            <FaLinkedin />
            <FaPinterestP />
          </div>
        </div>
      </div>
      <p className="text-center text-sm text-grey-1">
        &copy; 2024 All Rights Reserved
      </p>
    </div>
  );
}

export default Footer;
