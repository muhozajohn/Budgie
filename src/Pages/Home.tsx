import {FaUserGraduate} from "react-icons/fa"
import { ImPlay2 } from "react-icons/im";
import { HiStatusOnline } from "react-icons/hi";
import { FaElementor } from "react-icons/fa";
import { TbPigMoney } from "react-icons/tb";
import { GiCash } from "react-icons/gi";
import About from "../sections/About";
import Courses from "../sections/Courses";
const Home = () => {
  return (
    <>
      <section className="header">
        <div className="container home">
          <p className="online">
            <small>Online education</small>{" "}
          </p>
          <h3>
            Providing <span>multilingual</span> <br />
            Courses
          </h3>
          <p>
            Budgie is aiming to educate and support university students in
            <br />
            managing their finances effectively.
          </p>
          <div className="searcWaraper">
            <input type="text" placeholder="Search Courses" />
            <input type="button" value="Search Courses" />
          </div>
          <div className="rating-review">
            <div className="rating-card">
              <div className="rating-icon">
                <span>
                  {" "}
                  <FaUserGraduate />{" "}
                </span>
              </div>
              <p>Over 3M students</p>
            </div>
            <div className="rating-card">
              <div className="rating-icon">
                <span>
                  {" "}
                  <ImPlay2 />{" "}
                </span>
              </div>
              <p>2.5k Courses</p>
            </div>
            <div className="rating-card">
              <div className="rating-icon">
                <span>
                  {" "}
                  <HiStatusOnline />{" "}
                </span>
              </div>
              <p>Learn anything online</p>
            </div>
          </div>
        </div>
      </section>
      <div className="container main-wraper">
        <div className="main-card">
          <div className="main-card-icon">
            <span>
              <FaElementor className="icon" />
            </span>
          </div>
          <div className="main-detail-waraper">
            <h2>Mentorship</h2>
            <p>
              Personal mentorship sessions with financial experts in other to
              help our user accomplish their personal financial goals
            </p>
          </div>
        </div>
        <div className="main-card">
          <div className="main-card-icon">
            <span>
              <TbPigMoney />
            </span>
          </div>
          <div className="main-detail-waraper">
            <h2>Personalized Budgeting</h2>
            <p>
              Students can create a customized budget that caters to their
              specific needs and goals for the semester, school year, or even
              their entire university experience
            </p>
          </div>
        </div>
        <div className="main-card">
          <div className="main-card-icon">
            <span>
              <GiCash />
            </span>
          </div>
          <div className="main-detail-waraper">
            <h2>Financial Education</h2>
            <p>
              In addition to helping students manage their finances more
              effectively, our app provides valuable financial education
              resources to help users learn about investing, debt management,
              credit scores, and more.
            </p>
          </div>
        </div>
      </div>
      <About />
      <Courses />
    </>
  );
};

export default Home;
