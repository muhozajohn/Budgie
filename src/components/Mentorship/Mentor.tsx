import "./mentor.css";
import Stephine from "../../assets/JobSeeker Stephine 20230711_132629.jpg";
import Mj from "../../assets/mj.jpg";
import Sheriff from "../../assets/Sheriff Theresa 20230711_132618.jpg";
import brand from "../../assets/png.png"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
const Mentor = () => {
  return (
    <>
      <header>
        <div className="container mentorHeader-Wraper">
          <div className="mentor-card">
            <h3>
              Get Connected To The <br /> Best Mentor
            </h3>
            <p>
              Book And Meet Over 3579+ Mentor for 1:1 Mentorship <br /> In Our
              Global Community
            </p>
            <div className="mentor-search">
              <input
                type="text"
                name="serch"
                placeholder="What do you need help with"
              />
              <input type="button" value="Search" />
            </div>
            <p>Learn More About Mentor</p>
          </div>
        </div>
      </header>
      <section>
        <div className="container discover-mentor-wraper">
          <div className="discover-header">
            <h3>Discover the world top mentors</h3>
            <div className="discover-arrow">
              <span>
                {" "}
                <BsArrowLeft />{" "}
              </span>
              <span>
                {" "}
                <BsArrowRight />{" "}
              </span>
            </div>
          </div>
          <div className="discover-card-wraper">
            <div className="discover-cardi">
              <div className="dimage-container">
                <img src={Stephine} alt="" />
              </div>
              <div className="dDetails">
                <h3>Sthephine</h3>
                <p>Senior manager - Solutions Engineering</p>
              </div>
            </div>
            <div className="discover-cardi">
              <div className="dimage-container">
                <img src={Mj} alt="" />
              </div>
              <div className="dDetails">
                <h3>Zxus</h3>
                <p>Junior manager - Software Engineering</p>
              </div>
            </div>
            <div className="discover-cardi">
              <div className="dimage-container">
                <img src={Sheriff} alt="" />
              </div>
              <div className="dDetails">
                <h3>Sherriff Theresa</h3>
                <p>Market Manager</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="brandi">
        <div className="container mentor-brand">
          <div className="brand-img">
            <img src={brand} alt="" />
          </div>
          <div className="chua">
            <h3>Invite your Friend</h3>
            <p>invite your friend and share experience to your friends</p>
            <div className="mentor-search">
              <input
                type="text"
                name="serch"
                placeholder="Sending Invite to your friends"
              />
              <input type="button" value="Send Invite" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mentor;
