import React from "react";
import "./Portfolio.css";
import Ecommerce from "../../assets/Ecommerce.jpg";
import BoxOffice from "../../assets/Box-Office.jpg";
import TechBlog from "../../assets/Tech-Blog.jpg";

const data = [
  {
    id: 1,
    image: Ecommerce,
    title: "Ecommerce Web Application",
    github: "https://www.github.com/Ecommerce",
    demo: "https://www.demoproject.com/",
  },
  {
    id: 2,
    image: BoxOffice,
    title: "Box Office Web Application",
    github: "https://github.com/Rakshitgautam28/box-office",
    demo: "https://rakshitgautam28.github.io/box-office/#/",
  },
  {
    id: 3,
    image: TechBlog,
    title: "Blogging Web Application",
    github: "https://www.github.com/Ecommerce",
    demo: "https://www.demoproject.com/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-img">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
