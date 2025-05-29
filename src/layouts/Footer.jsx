import {Link} from "react-router-dom";
import { IoCall} from "react-icons/io5";
import { BsFillEnvelopeFill, BsInstagram } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import footerLogo from '../images/logo/logo2_footer.png';
import FooterContact from "../components/FooterContact";


function Footer() {
  return (
    <footer className="bg-primary text-white pb-4 md:pt-24">
      <div className="max-w-10/12 mx-auto px-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-50
          gap-y-4 border-b border-icon pb-14 ">
          <FooterContact icon={<IoCall className="w-6 h-6 text-secondary"/>} />
          
          
          <div className="md:text-center my-4 md:my-0">
            <Link to="#" className="block">
              <img src={footerLogo} alt="logo" className="md:mx-auto" />
            </Link>
            <p  className="text-base text-gray-500 mt-4 mb-8">
              There are many variations of passages of Lorem Ipsum available be the majority.
            </p>
            <div className="flex md:justify-center space-x-4">

              <a href="#" className="w-16 h-16 bg-icon
                hover:bg-secondary flex items-center justify-center rounded-full
                transition duration-300"
              >
                <FaFacebook className="w-6 h-6 text-white"  />
              </a>

              <a href="#" className="w-16 h-16 bg-icon
                hover:bg-secondary flex items-center justify-center rounded-full
                transition duration-300"
              >
                <FaInstagram className="w-6 h-6 text-white"  />
              </a>

              <a href="#" className="w-16 h-16 bg-icon
                hover:bg-secondary flex items-center justify-center rounded-full
                transition duration-300"
              >
                <FaLinkedin className="w-6 h-6 text-white"  />
              </a>
            </div>
          </div>
          
          <FooterContact icon={<BsFillEnvelopeFill className="w-6 h-6 text-secondary"/>} />
        </div>
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Narosundar. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;