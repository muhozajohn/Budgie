import "./nav.css";
import Logo from "../../assets/logo1.png";
import { Link } from "react-router-dom";
import { FaUserCircle, FaSearch } from "react-icons/fa";
const Nav = () => {
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
              <ul>
                <li>
                  <Link to="/"> Home </Link>
                </li>
                <li>
                  <Link to="/Finance"> Finance Eduction </Link>
                </li>
                <li>
                  <Link to="/Mentorship"> Mentorship </Link>
                </li>
                <li>
                  <Link to="/Budgeting"> Budgeting </Link>
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
                  <li>Register/Login</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
