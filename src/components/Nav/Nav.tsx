import "./nav.css";
import { useState } from "react";
import Logo from "../../assets/logo1.png";
import { Link } from "react-router-dom";
import { FaUserCircle, FaSearch, FaBars, FaTimes } from "react-icons/fa";
// import {HiOutlineBars3BottomRight} from "react-icons/hi"
const Nav = () => {
  const [DisplayMenu, SetDisplayMenu] = useState(false);
  return (
    <>
      <nav>
        <div className="container Nav">
          <div className="logo Footer-Icon">
            <Link to="/">
              <img src={Logo} alt="Budgie Logo" />
            </Link>
          </div>
          <div className="navWraper">
            <div className="navBar">
              <ul className={`${DisplayMenu ? "display-nav" : "hide-nav"}`}>
                <li>
                  <Link to="/" onClick={()=>SetDisplayMenu(prev => !prev)}> Home </Link>
                </li>
                <li>
                  <Link to="/" onClick={()=>SetDisplayMenu(prev => !prev)}> Finance Eduction </Link>
                </li>
                <li>
                  <Link to="/Mentorship" onClick={()=>SetDisplayMenu(prev => !prev)}> Mentorship </Link>
                </li>
                <li>
                  <Link to="/Budgeting" onClick={()=>SetDisplayMenu(prev => !prev)}> Budgeting </Link>
                </li>
                <li className="hid">
                  <Link to="/Budgeting" onClick={()=>SetDisplayMenu(prev => !prev)}> Profile </Link>
                </li>
                
              </ul>
            </div>
            <div className="searchLogin-wraper">
              <div className="search">
                <span>
                  <FaSearch />
                </span>
              </div>
              <div className="login">
                <ul>
                  <span>
                    <FaUserCircle />
                  </span>
                  <li>Profile</li>
                </ul>
              </div>
            </div>
            <button
              className="clikMe"
              onClick={() => SetDisplayMenu((prev) => !prev)}
            >
              {DisplayMenu ? <FaTimes /> : <FaBars />} 
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
