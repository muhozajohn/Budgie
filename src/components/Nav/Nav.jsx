import "./nav.css";
import Logo from "../../assets/logo1.png";
import { BiSearch } from "react-icons/bi";
import {FaUserCircle} from "react-icons/fa"
const Nav = () => {
  return (
    <>
      <div className="container Nav">
        <div className="logo">
          <img src={Logo} alt="Budgie Logo" />
        </div>
        <div className="navWraper">
          <div className="navBar">
            <ul>
              <li> Home </li>
              <li> Finance Eduction </li>
              <li> Mentorship </li>
              <li> Mentorship </li>
              <li> Budgeting </li>
            </ul>
          </div>
          <div className="searchLogin-wraper">
            <div className="search">
              <span>
                <BiSearch />
              </span>
            </div>
            <div className="login">
              <ul>
                <span>
                  <FaUserCircle />
                </span>
                <li>Register/Login</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
