import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="🧠 MindEase"
          des=" A mental health web app with a mood checker, symptom tracker, chatbot, and therapist booking. Designed for a clean, responsive, and supportive user experience."
          src={projectOne}
        />
        <ProjectsCard
          title="School Management System"
          des=" A school management system with admin, teacher, student, and parent portals for managing records, classes, fees, and grades."
          src={projectTwo}
        />
        <ProjectsCard
          title="Hotel Website"
          des=" A modern, responsive hotel website for showcasing rooms, services, and managing online bookings."
          src={projectThree}
        />
        <ProjectsCard
          title="🧭Zaph-Tours"
          des=" A website showcasing top tourist destinations in Kenya, with detailed information on places, attractions, and booking options."
          src={projectThree}
        />
        <ProjectsCard
          title="🛍️ E-commerce Website"
          des=" A complete e-commerce platform featuring product listings, shopping cart functionality, and payment integration. This project demonstrates your ability to build complex applications with a focus on usability and performance."
          src={projectOne}
        />
        <ProjectsCard
          title="🤖 Chatbot"
          des=" A conversational chatbot built to simulate interactive dialogues. It’s designed to showcase natural language processing and user engagement in web applications."
          src={projectTwo}
        />
      </div>
    </section>
  );
}

export default Projects