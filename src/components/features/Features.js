import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign,SiChatbot} from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import Title from '../layouts/Title';
import Card from './Card';


const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="APP Development"
          des="I create smooth, user-friendly, and reliable mobile applications tailored to client needs. Focused on delivering intuitive designs, seamless performance, and solutions that make an impact."
          icon={<FaMobile />}
         
        />
        <Card
          title="Web Development"
          des="I build clean, responsive, and high-performance websites that deliver seamless user experiences. Focused on modern designs, functionality, and customized solutions for businesses and individuals."
          icon={<CgWebsite /> }
        />
        <Card
          title="SEO Optimisation"
          des="Improving website visibility, search rankings, and online reach through smart, effective SEO strategies."
          icon={<SiProgress />}
        />
        <Card
          title="API Integration"
          des="Connecting apps and systems seamlessly by integrating reliable third-party APIs and services."
          icon={<FaMobile />}
        />
        <Card
          title="UI/UX Design"
          des="Creating clean, modern, and user-friendly interfaces for websites and mobile apps that enhance user experience."
          icon={<SiAntdesign />}
        />
        <Card
          title="Chatbot Dev"
          des="Building smart, interactive chatbots for websites and apps to improve customer support and automate services"
          icon={<SiChatbot />}
        />
      </div>
    </section>
  );
}

export default Features