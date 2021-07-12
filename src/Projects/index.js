import React from 'react';
import Container from '@material-ui/core/Container';
import ProjectCard from "./ProjectCards";
import Projectlayout from './layout'

import './style.css';

function Projects() {

  return (
    <Container >
      <h1 className="project-heading">
        Projects
      </h1>
      <Projectlayout>
        <ProjectCard title='Employee Directory' image='https://github.com/bduran04/Portfolio/blob/main/public/project_gifs/employee_directory.gif?raw=true' description='This application is an employee directory that displays a list of employees and enables the user to sort the table alphabetically by employee name as well as filter based on the search bar input. This application utilizes React and uses the Random User API to obtain the employee list.' link='https://github.com/bduran04/Employee_Directory' />
        <ProjectCard title='Budget Tracker' image='https://github.com/bduran04/Portfolio/blob/main/public/project_gifs/budget_tracker.gif?raw=true' description='This application allows the user to track their spending with or without a data/internet connection. This application utilizes Javascript, HTML, CSS and ensures that data is saved in the cache in order to maintain offline functionality.' link='https://github.com/bduran04/Budget_Tracker' />
        <ProjectCard title='Weather Dashboard' image='https://github.com/bduran04/Portfolio/blob/main/build/project_gifs/WeatherApp.gif?raw=true' description='This project displays live weather information from the Open Weather API for select cities, including forecasted weather for the next 5 days. It was created using 60% Javascript' link='https://github.com/bduran04/Weather_dashboard'/>
        <ProjectCard title='Book Club' image='https://github.com/bduran04/Portfolio/blob/main/build/project_gifs/book_club2.gif?raw=true' description='This project is called Book Club and it allows users view a list of selected books and reviews from registered users. It is made up of Javascript, Handlebars.js, and CSS.' link='https://github.com/amandardz/Book-Club' />
        <ProjectCard title='Read-Me Generator' image='https://github.com/bduran04/Portfolio/blob/main/build/project_gifs/readme.gif?raw=true' description='This application generates a detailed readme.md file by asking the user a myriad of questions pertaining to the new project. This readme file also returns links to the Github account of the user and licensing information' link='https://github.com/bduran04/ReadMe_Generator'/>
        <ProjectCard title='Tech Blog' image='https://github.com/bduran04/Portfolio/blob/main/build/project_gifs/tech_blog.gif?raw=true' description='This application is a CMS-style blog where developers can publish their blog posts and comment on other posts of developers as well. This app follows he MVC paradigm in its architectural structure, uses Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.' link='https://github.com/bduran04/Tech_Blog'/>
      </Projectlayout>
    </Container>
  );
};

export default Projects;