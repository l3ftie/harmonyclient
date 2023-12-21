import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { homeLinks } from "../utils/links";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="bg-accent">
      <div className="container mx-auto p-4 py-20 grid lg:grid-cols-4">
        <div>
          <Logo light />
        </div>
        <div>
          <h4 className="textStyled text-blue-50 mb-3">GET IN TOUCH</h4>
          <ul className="flex flex-col gap-1 text-blue-50">
            <li>Office Number</li>
            <li>Street Address</li>
            <li>State</li>
            <li>Country</li>
          </ul>
        </div>
        <div>
          <h4 className="textStyled text-blue-50 mb-3">QUICK LINKS</h4>
          <div className="flex flex-col">
            {homeLinks &&
              homeLinks.map((item) => {
                const { id, text, path } = item;
                return (
                  <Link
                    className="text-blue-50 hover:text-blue-500 transition-all"
                    key={id}
                    to={path}
                  >
                    {text}
                  </Link>
                );
              })}
          </div>
        </div>
        <div>
          <h4 className="textStyled text-blue-50 mb-3">FOLLOW US</h4>
          <div>
            <p>social link one</p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="  bg-[#071a2590] text-center text-blue-50 py-4 px-6">
        <span className="text-gray-500">
          © {new Date().getFullYear()} Harmony Health Home
        </span>
      </div>
    </div>
  );
};

export default Footer;
