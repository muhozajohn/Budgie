import isomo1 from "../assets/isomo1.png";
import isomo2 from "../assets/isomo2.png";
import isomo3 from "../assets/isomo3.png";
import profile from "../assets/isomo.jpg";
import {AiFillStar} from "react-icons/ai"
import Testimonials from "./Testimonials";
const Courses = () => {
  return (
    <>
    <section id="courses">
      <div className="container courses-co-wraper">
        <p>Our courses</p>
        <div className="courses-wraper">
          <div className="course-header-container">
            <div>
              <h2>Our Most Popular Courses</h2>
            </div>
            <div className="courses-button">
              <ul>
                <li>New Courses</li>
                <li>Featured Courses</li>
                <li>Popular Courses</li>
              </ul>
            </div>
          </div>
          <div className="courses-card-wraper">
            <div className="courses-card">
              <div className="courses-img">
                <img src={isomo1} alt="courses img" />
              </div>
              <div className="course-owner">
                <div className="course-img">
                  <img src={profile} alt="" />
                  <p>Sthephine Smith</p>
                </div>
                <div className="course-text">
                  <p>16 lessons</p>
                </div>
              </div>
              <div className="courses-paragraphy">
                <p>The Complete HTML & CSS bootcamp editon 2023 for you now </p>
              </div>
              <hr />
              <div className="course-rating">
                <p>$45.00</p>
                <div className="star">
                    <span> <AiFillStar /> </span>
                    <span> <AiFillStar /> </span>
                    <span> <AiFillStar /> </span>
                    <span> <AiFillStar /> </span>
                </div>
              </div>
            </div>
            <div className="courses-card">
              <div className="courses-img">
                <img src={isomo2} alt="courses img" />
              </div>
              <div className="course-owner">
                <div className="course-img">
                  <img src={profile} alt="" />
                  <p>Zxus</p>
                </div>
                <div className="course-text">
                  <p>36 lessons</p>
                </div>
              </div>
              <div className="courses-paragraphy">
                <p>Grow Personal Financiol Security Thinking & Principle </p>
              </div>
              <hr />
              <div className="course-rating">
                <p>$45.00</p>
                <div className="star">
                    <span> <AiFillStar /> </span>
                    <span> <AiFillStar /> </span>
                    <span> <AiFillStar /> </span>
                    <span> <AiFillStar /> </span>
                </div>
              </div>
            </div>
            <div className="courses-card">
              <div className="courses-img">
                <img src={isomo3} alt="courses img" />
              </div>
              <div className="course-owner">
                <div className="course-img">
                  <img src={profile} alt="" />
                  <p>Sheriff Theresa</p>
                </div>
                <div className="course-text">
                  <p>16 lessons</p>
                </div>
              </div>
              <div className="courses-paragraphy">
                <p>The Complete HTML & CSS bootcamp editon 2023 for you now </p>
              </div>
              <hr />
              <div className="course-rating">
                <p>$45.00</p>
                <div className="star">
                    <span> <AiFillStar /> </span>
                    <span> <AiFillStar /> </span>
                    <span> <AiFillStar /> </span>
                    <span> <AiFillStar /> </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Testimonials />
    </>
  );
};

export default Courses;
