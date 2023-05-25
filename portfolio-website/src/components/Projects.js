import React, { useState, useEffect } from "react";

// import data
import { projectsData } from "../data";
import { projectsNav } from "../data";

// import components
import Project from "./Project";

const Projects = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([
    {
      name: "Youtube_Clone_React",
      img: "https://github.com/Abhishek280999/Portfolio_App/assets/117111036/6c4e2d7e-1493-46a1-9a32-54244a16a955",
      feature:
        "In this project we create Youtube_Clone_React Search feature , Search by categories , Play the video. Tech-stack : [React,js,HTML,Redux,Tailwind css] ",
      Link: "https://youtube-app-kappa-three.vercel.app/",
      Github: "https://github-production-user-asset-6210df.s3.amazonaws.com/117111036/238535423-5ef6923b-7c70-48a1-ba19-7154bc004ac4.mp4",
    },
    {
      name: "Bewakoof.com",
      img: "https://github.com/Abhishek280999/Portfolio_App/assets/117111036/fadb8ce7-0c32-48df-b480-814575975021",
      feature: "A fool-fleged Frontend Clone of Ecommerce website called Bewakoof.com. Tech-stack  : [HTML,CSS,JS] ",
      Link: "https://bewakoof-e.netlify.app/",
      Github: "https://github.com/Abhishek280999/Bewakoof.con-Ecommerce-project.git",
    },
    {
      name: "Portfolio Website",
      img: "https://github.com/Abhishek280999/Portfolio_App/assets/117111036/163b679d-3c8a-43a9-b024-8ce5de6da220",
      feature:
        "Personal porfolio website where you can see all of my details of my work. Tech-stack  : [HTML,CSS,JS] ",
      Link: "https://vaibhav-dev-portfolio.netlify.app/",
      Github: "https://github.com/Abhishek280999/Protfolio.git",
    },
    {
      name: "Weather App",
      img: "https://github.com/Abhishek280999/Portfolio_App/assets/117111036/d887326c-e2ae-4d23-9c1f-22ad5deedfc9",
      feature:
        "In this project we create Weather App used to Search Any city Weather Tech-stack : [HTML,CSS,JavaScript]",
      Link: "https://bellavitaorganic-cloned.herokuapp.com/",
      Github:
        "https://github.com/Abhishek280999/Weather-app.git",
    },
    {
      name: "7 Days Weather App",
      img: "https://github.com/Abhishek280999/Portfolio_App/assets/117111036/d0582a63-dbe5-4ef6-8991-f9f979b3e2fe",
      feature:
        "In this project we create Weather App used to Search Any city Weather Tech-stack : [HTML,CSS,JavaScript]",
      Link: "https://plumgoodness-clone.netlify.app/",
      Github: "https://github.com/Abhishek280999/7Day_Weather_Report.git",
    },
    {
      name: "Movie Website",
      img: "https://github.com/Abhishek280999/Portfolio_App/assets/117111036/17ae62c2-df48-4135-9be7-5b0ae39968d7",
      feature:
        "Simple movie application where user can search for movie and get details. Teck-stack : [HTML,CSS,JavaScript]",
      Link: "https://nightowl-movie-app.netlify.app/",
      Github: "https://github.com/Abhishek280999/Movie_App.git",
    },
  ]);
  const [active, setActive] = useState(0);
  useEffect(() => {
    // get projects based on item
    if (item.name === "all") {
      // setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      // setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      {/* projects nav */}
      <nav className="mb-12 max-w-xl mx-auto">
        <ul className="flex flex-col md:flex-row justify-evenly items-center text-white">
          {projectsNav.map((item, index) => {
            return (
              <li
                onClick={(e) => {
                  handleClick(e, index);
                }}
                className={`${
                  active === index ? "active" : ""
                } cursor-pointer capitalize m-4`}
                key={index}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </nav>
      {/* projects */}
      <section className="grid gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
        {projects.map((item) => {
          return <Project item={item} key={item.id} />;
        })}
      </section>
    </div>
  );
};

export default Projects;
