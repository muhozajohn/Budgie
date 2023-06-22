import "./footer.css";
import logo from "../../assets/logo1.png";
import { MdLocationOn } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import {
  FaLongArrowAltRight,
  FaCcVisa,
  FaCcApplePay,
  FaCcPaypal,
  FaCcMastercard,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
const Footer = () => {
  return (
    <section id="Footer">
      <div className="container footer-wraper">
        <div className="footer-header">
          <div className="footer-img">
            <img src={logo} alt="" className="Footer-Icon" />
          </div>
          <div>
            <h2 className="umusa-margin">About</h2>
          </div>
          <div>
            <h2 className="umusa-margini">Categories</h2>
          </div>
          <div>
            <h2>Get In Touch</h2>
          </div>
        </div>
        <div className="footer-body">
          <div className="footer-location">
              <h2 className="hidden">Location</h2>
            <div className="footer-loc-card">
              
              <span>
                {" "}
                <MdLocationOn className="Footer-Icons" />{" "}
              </span>
              <p>Kigali , Rwanda</p>
            </div>
            <div className="footer-loc-card">
              <span>
                {" "}
                <BsFillTelephoneFill className="FooterIcons" />{" "}
              </span>
              <p>+250 781 366 463</p>
            </div>
            <div className="footer-loc-card">
              <span>
                {" "}
                <FiMail className="FooterIcons" />{" "}
              </span>
              <p>bbudgie0@gmail.com </p>
            </div>
          </div>
          <div className="footer-location">
            <h2 className="hidden">About</h2>
            <p>Courses</p>
            <p>Coach</p>
            <p>Refunds</p>
            <p>Conditions</p>
            <p>Payments</p>
          </div>
          <div className="footer-location">
            <h2 className="hidden">Categories</h2>
            <p>Finance</p>
            <p>Budgeting</p>
            <p>Computer science</p>
            <p>Mentorship</p>
          </div>
          <div className="footer-location">
            <p>We don’t Send Spam So Don’t Worry</p>
            <div className="footer-searcWaraper">
              <input type="text" placeholder="Email" />
              <button className="footer-arrow">
                <FaLongArrowAltRight className="footerIicon" />
              </button>
            </div>
                        {/* <h2>Get In Touch</h2> */}
                      <div className="footer-pay-card">
            <span> <FaInstagram /> </span>
            <span> <FaLinkedin /> </span>
            <span> <FaTwitter /> </span>
            <span> <FaFacebookF /> </span>
            <span> <FaYoutube /> </span>
          </div>
          </div>
        </div>
        <div className="footer-hr">
          <hr />
        </div>
        <div className="footer-copyright">
          <p>Copyright 2023 Budgie All Right Reserved</p>
          <div className="footer-pay-card">
            <span> <FaCcVisa /> </span>
            <span> <FaCcApplePay /> </span>
            <span> <FaCcMastercard /> </span>
            <span> <FaCcPaypal /> </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
