import "./section.css"
import about from "../assets/student.png"
const About = () => {
  return (
    <section id="About">
      <div className="container About-waraper">
        <div className="about-card-left">
          <img src={about} alt="About Gallery" />
          <div className="left-card"></div>
        </div>
        <div className="about-card-right">
          <h3>About us</h3>
          <h2>
            Learn A<span>nytime</span> And <br /> Any where Now
          </h2>
          <p>
            You can access course materials and lectures at any time, which is
            especially beneficial for individuals with busy lifestyles or those
            who need to balance work, family, or other commitments. You can
            learn from the comfort of your home or any location with internet
            access.
          </p>
          <button className="btn">Read more about us</button>
        </div>
      </div>
    </section>
  );
}

export default About