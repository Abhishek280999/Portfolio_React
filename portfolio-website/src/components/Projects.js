import React, { useState, useEffect } from "react";

// import data
import { projectsData } from "../data";
import { projectsNav } from "../data";

// import components
import Project from "./Project";
const Projects = (

) => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([
    {
      name: " Full Stack Ecommerce Application",
      img: "https://github.com/Abhishek280999/Abhishek280999/assets/117111036/1b263f59-fd02-420a-9cd2-f336eae397c6",
      feature: "Ecommerce Application website where you can see all of my details of my work. Tech-stack  : [HTML,Tailwind Css,JavaScript,React Js , Redux , Node Js , MongoDB] ",
      Link: "https://full-stack-ecommerce-mern.vercel.app/",
      Github: "https://github.com/Abhishek280999/Ecommerce-Application",
    },
    {
      name: "Portfolio Website",
      img: "https://github.com/Abhishek280999/Portfolio_App/assets/117111036/163b679d-3c8a-43a9-b024-8ce5de6da220",
      feature: "Personal porfolio website where you can see all of my details of my work. Tech-stack  : [HTML,CSS,JavaScript,React Js] ",
      Link: "https://portfolio-website-abhishek280999.vercel.app/",
      Github: "https://github.com/Abhishek280999/Protfolio.git",
    },
    {
      name: "Food Villa App",
      img: "https://github.com/Abhishek280999/Portfolio_React/assets/117111036/d8a4682d-9e41-4349-a308-4ce2f450b76d",
      feature: "In this project we create Online Food App used to Search Food , Sort by Rating ,Add to Cart ,Order thr food  Tech-stack : [HTML,CSS,JavaScript,React js,Redux,Tailwind CSS]",
      Link: "https://food-villa-ten.vercel.app/",
      Github: "https://github.com/Abhishek280999/Food_Villa_App",
    },
    {
      name: "Youtube_Clone_React",
      img: "https://github.com/Abhishek280999/Portfolio_React/assets/117111036/21699fd2-4cbf-45c5-a71f-3a0d9ae3ee5e",
      feature: "In this project we create Youtube_Clone_React Search feature , Search by categories , Play the video ,Live Caht ,Comment , Realated Video Tech-stack : [React,js,HTML,Redux,Tailwind css] ",
      Link: "https://utoob-clone-abhishek280999.vercel.app/",
      Github: "https://github.com/Abhishek280999/Youtube_Clone_Using_React",
    },

    {
      name: "Daily News App",
      img: "https://github.com/Abhishek280999/Food_Villa_App/assets/117111036/162d41ea-5f5c-4582-9108-b2a790b79e65",
      feature: "Daily News  website where you can see all the types of News and read more about that news. Tech-stack  : [HTML,CSS,JavaScript,React Js,Bootstrap] ",
      Link: "https://github.com/Abhishek280999/News_App.git",
      Github: "https://github.com/Abhishek280999/News_App.git",
    },
    {
      name: "Quiz App",
      img: "https://github.com/Abhishek280999/Quiz_App/assets/117111036/2bb824ef-e91d-47f0-b816-ba23cea7c20c",
      feature: "All categories Quiz App where you can Take a Mock Quiz. Tech-stack  : [HTML,CSS,JavaScript,React Js,Material UI] ",
      Link: "https://quiz-app-react-abhishek280999.vercel.app/s",
      Github: "https://github.com/Abhishek280999/Quiz_App",
    },
    {
      name: "Bewakoof.com",
      img: "https://github.com/Abhishek280999/Portfolio_App/assets/117111036/fadb8ce7-0c32-48df-b480-814575975021",
      feature: "A fool-fleged Frontend Clone of Ecommerce website called Bewakoof.com. Tech-stack  : [HTML,CSS,Javascript] ",
      Link: "https://bewakoof-e.netlify.app/",
      Github: "https://github.com/Abhishek280999/Bewakoof.con-Ecommerce-project.git",
    },
    {
      name: "Movie Website",
      img: "https://github.com/Abhishek280999/Portfolio_App/assets/117111036/17ae62c2-df48-4135-9be7-5b0ae39968d7",
      feature: "Simple movie application where user can search for movie and get details. Teck-stack : [HTML,CSS,JavaScript]",
      Link: "https://nightowl-movie-app.netlify.app/",
      Github: "https://github.com/Abhishek280999/Movie_App.git",
    },
    {
      name: "Weather App",
      img: "https://github.com/Abhishek280999/Portfolio_App/assets/117111036/d887326c-e2ae-4d23-9c1f-22ad5deedfc9",
      feature: "In this project we create Weather App used to Search Any city Weather Tech-stack : [HTML,CSS,JavaScript]",
      Link: "https://bellavitaorganic-cloned.herokuapp.com/",
      Github: "https://github.com/Abhishek280999/Weather-app.git",
    },
    {
      name: "7 Days Weather App",
      img: "https://github.com/Abhishek280999/Portfolio_App/assets/117111036/d0582a63-dbe5-4ef6-8991-f9f979b3e2fe",
      feature: "In this project we create Weather App used to Search Any city Weather Tech-stack : [HTML,CSS,JavaScript]",
      Link: "https://plumgoodness-clone.netlify.app/",
      Github: "https://github.com/Abhishek280999/7Day_Weather_Report.git",
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
                className={`${active === index ? "active" : ""
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
