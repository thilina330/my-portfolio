"use client";

import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
} from "react-icons/fa"; // Importing icons from react-icons library
import {
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiMysql,
  
} from "react-icons/si"; // Importing icons from react-icons library

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
//import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion"; // Importing framer-motion library

// about data
const aboutMe = {
  title: "About Me",
  description:
    "I am a full stack developer with a passion for learning and building new things. I have experience in building web applications using JavaScript, React, Node.js, and MongoDB. I am always looking for new opportunities to learn and grow.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Thilina Lakshan",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+94) 768808137",
    },
    {
      fieldName: "Skype",
      fieldValue: "Thilna.12",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Sri Lankan",
    },
    {
      fieldName: "Email",
      fieldValue: "Thilinalakshan763@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "Sinhala & English",
    },
  ],
};

// skills data
const skills = {
  title: "Skills",
  description:
    "I have experience in building web applications using JavaScript, React, Node.js, and MongoDB. I am always looking for new opportunities to learn and grow.",
  skillsList: [
    {
      skillName: "HTML",
      icon: <FaHtml5 />,
    },
    {
      skillName: "CSS",
      icon: <FaCss3 />,
    },
    {
      skillName: "JavaScript",
      icon: <SiJavascript />,
    },
    {
      skillName: "React",
      icon: <FaReact />,
    },
    {
      skillName: "Tailwind CSS",
      icon: <SiTailwindcss />,
    },
    {
      skillName: "Next.js",
      icon: <SiNextdotjs />,
    },
    {
      skillName: "Node.js",
      icon: <FaNodeJs />,
    },
    {
      skillName: "MongoDB",
      icon: <SiMongodb />,
    },
    {
      skillName: "MySQL",
      icon: <SiMysql />,
    },
    {
      skillName: "Java",
      icon: <FaJava />,
    },
    {
      skillName: "Python",
      icon: <FaPython />,
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 2,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
         <Tabs defaultValue="Experiacne" className="flex flex-col xl:flex-row gap-[60px]">
           <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
             
              <TabsTrigger  value="experiance">Experiance</TabsTrigger>
              <TabsTrigger  value="about ">About Me</TabsTrigger>
              <TabsTrigger  value="ssd">Skills</TabsTrigger>
              <TabsTrigger  value="aboutsds ">About Me</TabsTrigger>
           </TabsList>
           {/* content */}
           <div>
             <TabsContent value="experiance" className="w-full">Skils</TabsContent>
             <TabsContent value="about" className="w-full">About </TabsContent>
             <TabsContent value="ssd" className="w-full">Skils</TabsContent>
             <TabsContent value="aboutsds" className="w-full">About </TabsContent>
            
            
           </div>
           
         </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
