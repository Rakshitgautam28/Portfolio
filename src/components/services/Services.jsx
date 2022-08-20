import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Designing</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icons" />
              <p>Worked on Semantic HTML and knows how to structure it.</p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>
                Have knowledge of CSS and make up the beginner friendly designs.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>
                Knows the Preprocessor of CSS like Sass which leads to advance
                designing.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>
                Pretty Much Confortable with frameworks like Bootstrap, Material
                UI.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>Worked on various third party frameworks like DevExpress.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icons" />
              <p>
                Have a good knowledge of frontend frameworks and Libraries like
                React.js, Angular, etc.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>
                knows to Implement the third party libraries and company
                specific as well.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>
                Good Understanding of Backend Programming specially when it
                comes to Node and Asp.Net.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>
                Can solve the integration issues and understand both monolithic
                and microservices architecture.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>
                Knows both SQL and Non-SQL Languages like MySQL, MsSQL, MongoDb.
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Devops</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icons" />
              <p>
                Knows how to work as a team using technologies like Git/Github.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>
                Can help you integrating the Cloud Services like EC2, S3,
                Cloudfront and more.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>
                Understand the basic stuffs and can do the Developer machine
                setup.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>Knows the basics of Docker/Kubernetes.</p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>
                Can create Pipelines with the help of internet and some support.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
