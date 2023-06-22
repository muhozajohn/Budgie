import Testi from "../assets/isomo.jpg";
import {LuCalendarDays} from "react-icons/lu"
const Testimonials = () => {
  return (
    <section id="Testmoniols">
      <h4>Testimonials</h4>
      <h2>
        Our Lovely <span>Students</span> Reviews
      </h2>
      <div className="container testimoniols-wraper">
        <div className="test-card">
          <div className="test-card-header-wraper">
            <div className="test-card-img-wraper">
              <img src={Testi} alt="" />
            </div>
            <div className="test-header-desc">
              <h5>ZeusDeGreat</h5>
              <small>SoftWare Developer</small>
            </div>
          </div>
          <div className="test-desc">
            <p>
              " Great work on the new feature! I love how it enhances the user
              experience and adds valuable functionality to our app. "
            </p>
          </div>
          <div className="test-date">
            <span> <LuCalendarDays /> </span>
            <p>12 june 2023</p>
          </div>
          <div className="test-rotate"></div>
        </div>
        <div className="test-card">
          <div className="test-card-header-wraper">
            <div className="test-card-img-wraper">
              <img src={Testi} alt="" />
            </div>
            <div className="test-header-desc">
              <h5>Sthephine</h5>
              <small>UI & UX Desgner</small>
            </div>
          </div>
          <div className="test-desc">
            <p>
              " Congratulations on the successful launch! It's been an incredible team effort, and I'm proud to be a part of this project. Well done, everyone!"
            </p>
          </div>
          <div className="test-date">
            <span> <LuCalendarDays /> </span>
            <p>14 june 2023</p>
          </div>
          <div className="test-rotate"></div>
        </div>
        <div className="test-card">
          <div className="test-card-header-wraper">
            <div className="test-card-img-wraper">
              <img src={Testi} alt="" />
            </div>
            <div className="test-header-desc">
              <h5>Theresa Sheriff</h5>
              <small>Sociolmedia Influencer</small>
            </div>
          </div>
          <div className="test-desc">
           <p>
            " Thank you for your suggestion. We'll take it into consideration for future updates and evaluate its feasibility. We appreciate your input."
           </p>
          </div>
          <div className="test-date">
            <span> <LuCalendarDays /> </span>
            <p>18 june 2023</p>
          </div>
          <div className="test-rotate"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
