import { motion } from 'framer-motion';
import { FaCheckCircle, FaMapMarkerAlt } from 'react-icons/fa';

type ProjectProps = {
  name: string;
  location: string;
  description: string[];
  image: string;
};

const Project: React.FC<{ project: ProjectProps }> = ({ project }) => {
  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2">
        <motion.h1 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold mb-4 text-primary"
        >
          {project.name}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg mb-4 flex"
        >
          <FaMapMarkerAlt className="text-primary mr-2"/>{project.location}
        </motion.p>
        <ul className='list'>
          {project.description.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
              className="mb-2 flex"
            >
              <span className='mt-1'>
            <FaCheckCircle size={10} className="text-primary mr-2" />
              </span>
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="md:w-1/2 mt-4 md:mt-0 md:ml-4">
        <motion.img
          src={project.image}
          alt={project.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full rounded"
        />
      </div>
    </div>
  );
};

export default Project;
