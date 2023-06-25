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
            Learn A<span>nytime</span> And  Any where Now
          </h2>
          <p>
            At Budgie, we are on a mission to equip individuals with the
            knowledge and tools they need to achieve financial success. We
            believe that financial education is an essential aspect of personal
            growth and can pave the way for a more secure and prosperous future.
          </p>
          <p>
            Our primary focus is on building a comprehensive system that
            addresses the "why" behind the need for financial education. We
            understand that financial decisions can have a profound impact on
            individuals' lives, and we aim to empower our users with the
            understanding of why financial literacy matters.
          </p>
          <button className="btn">Read more about us</button>
        </div>
      </div>
    </section>
  );
}

export default About