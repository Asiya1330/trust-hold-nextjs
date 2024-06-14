import { FC } from 'react';
import { Variants, motion } from 'framer-motion';
import Image from 'next/image';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  animation: Variants;
}

const ProjectCard: FC<ProjectCardProps> = ({ image, title, description, animation }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg my-5 p-2  max-w-xs"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial="hidden"
      animate="visible"
      variants={animation}
    >
      <div className="relative h-64 w-full">
        <Image src={image} alt={title} layout="fill" objectFit="cover" className="rounded-lg" />
      </div>
      <h2 className="text-2xl font-bold mt-4">{title}</h2>
      <p className="mt-2 text-gray-600">{description}</p>
      <div className="flex justify-end mt-4">
        <button className="text-red-500 flex items-center">
          Learn More
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

const ProjectCards: FC = () => {
  const projects = [
    {
      image: '/spears1858.jpeg',
      title: 'Project One',
      description: 'This is a brief description of Project One.',
      animation: {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
      }
    },
    {
      image: '/rubik1709.jpeg',
      title: 'Project Two',
      description: 'This is a brief description of Project Two.',
      animation: {
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
      }
    },
    {
      image: '/loft705.jpeg',
      title: 'Project Three',
      description: 'This is a brief description of Project Three.',
      animation: {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
      }
    },
  ];

  return (
    <div className="flex flex-wrap justify-around">
      {projects.map((project, index) => (
        <ProjectCard 
          key={index} 
          image={project.image} 
          title={project.title} 
          description={project.description} 
          animation={project.animation}
        />
      ))}
    </div>
  );
};

export default ProjectCards;
