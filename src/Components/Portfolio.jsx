/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Building a React Native App with Firebase Authentication",
    description:
      "A tutorial on how to build a React Native app with Firebase Authentication to handle user authentication and authorization.",
    url: "https://dev.to/myusername/building-a-react-native-app-with-firebase-authentication-1234",
  },
  {
    title: "Creating a RESTful API with Node.js and Express",
    description:
      "A step-by-step guide on how to create a RESTful API using Node.js and Express, including CRUD operations and error handling.",
    url: "https://dev.to/myusername/creating-a-restful-api-with-node-js-and-express-5678",
  },
  {
    title: "Introduction to Machine Learning with Python",
    description:
      "An overview of machine learning concepts and techniques, with practical examples using Python and popular libraries like scikit-learn.",
    url: "https://dev.to/myusername/introduction-to-machine-learning-with-python-9012",
  },
  {
    title: "Building a Full-Stack Web App with React and Node.js",
    description:
      "A tutorial on how to build a full-stack web app using React for the front-end and Node.js for the back-end, with a PostgreSQL database.",
    url: "https://dev.to/myusername/building-a-full-stack-web-app-with-react-and-node-js-3456",
  },
  {
    title: "Getting Started with TypeScript",
    description:
      "An introduction to TypeScript, including its benefits, syntax, and how to integrate it into a JavaScript project.",
    url: "https://dev.to/myusername/getting-started-with-typescript-7890",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
