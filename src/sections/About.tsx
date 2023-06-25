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
          {/* <p>
            To support this objective, Budgie offers a range of valuable
            resources. We provide a monthly budget template that enables users
            to track their expenses, set financial goals, and develop effective
            budgeting strategies. Our user-friendly template simplifies the
            budgeting process, helping individuals gain control over their
            finances and make informed decisions.
          </p>
          <p>
            In addition to the budgeting tool, Budgie places great emphasis on
            personalized mentorship. We believe that having a mentor who can
            guide and provide insights based on their own financial experiences
            can greatly enhance the learning process. Our mentorship program
            connects students with knowledgeable and experienced professionals
            who can offer personalized advice, answer questions, and provide
            valuable tips and tricks for financial success.
          </p>
          <p>
            At Budgie, we understand that financial education is a lifelong
            journey, and we are committed to supporting individuals at every
            stage. Whether you're a student just starting to explore the world
            of personal finance or an experienced professional looking to refine
            your financial skills, Budgie is here to empower you with the
            knowledge and resources you need to thrive. Join us on our mission
            to foster financial literacy, take control of your financial future,
            and unlock a world of possibilities. Budgie is your partner in
            financial education and mentorship.
          </p> */}
          <button className="btn">Read more about us</button>
        </div>
      </div>
    </section>
  );
}

export default About