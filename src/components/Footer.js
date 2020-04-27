import React from "react";
import "../style/_main.scss";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaPhoneSquare,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footercontainer">
        <div>
          <h3 className="logotype">DANIELS SPA</h3>
        </div>
        <div>
          <ul className="footerlinks">
            <li>Contact us</li>
            <li>Follow us</li>
            <li>More about us</li>
          </ul>
        </div>
        <div className="footericons">
          <i>
            <FaFacebookSquare /> {"   "}
          </i>
          <i>
            <FaInstagramSquare /> {"   "}
          </i>
          <i>
            <FaEnvelope /> {"   "}
          </i>
          <i>
            <FaPhoneSquare /> {"   "}
          </i>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
