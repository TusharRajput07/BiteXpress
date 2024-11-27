import RamenDiningIcon from "@mui/icons-material/RamenDining";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-upper">
        <div className="footer-container footer-container-left">
          <RamenDiningIcon className="footer-logo" />
          <Link to="/">
            <div className="footer-name">BiteXpress</div>
          </Link>
          <div className="footer-items tagline">
            Bringing Cravings to Your Doorstep
          </div>
        </div>
        <div className="footer-container">
          <div className="footer-contact-container">
            <div className="footer-heading">Contact</div>
            <Link to="/contact">
              <div className="footer-items footer-button">Contact Us</div>
            </Link>
            <div className="footer-items">care@namastefood.com</div>
            <div className="footer-items">45, XYZ Lane, New Delhi, IN</div>
            <div className="footer-items">+91 110-442-2334</div>
            <div className="footer-heading">About</div>
            <Link to="/about">
              <div className="footer-items footer-button">About Company</div>
            </Link>
            <Link to="/grocery">
              <div className="footer-items footer-button">Grocery</div>
            </Link>
          </div>
        </div>
        <div className="footer-container">
          <div className="footer-legal-container">
            <div className="footer-heading">Legal</div>
            <div className="footer-items footer-button">Privacy Policy</div>
            <Link to="/terms">
              <div className="footer-items footer-button">Terms & Services</div>
            </Link>
            <div className="footer-items footer-button">Security</div>
            <div className="footer-items footer-button">Cookie Policy</div>
            <div className="footer-heading">Connect with us</div>
            <div className="footer-socials">
              <InstagramIcon className="footer-social-icon" />
              <FacebookIcon className="footer-social-icon" />
              <XIcon className="footer-social-icon" />
              <LinkedInIcon className="footer-social-icon linkedin" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-copyright">
        By continuing past this page, you agree to our Terms of Service, Cookie
        Policy, Privacy Policy and Content Policies. All trademarks are
        properties of their respective owners.
        <br /> 2024 © BiteXpress Ltd. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
