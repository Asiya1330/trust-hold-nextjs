import {motion} from "framer-motion";
interface TeamMember {
  id: number;
  name: string;
  title: string;
  imageUrl: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Ahmad El Hage',
    title: 'CEO',
    imageUrl: '/CEO.jpg',
    description: `
      Ahmad Elhage is nothing less than a multi-talented leader in the business world. With over 35 years of experience in the marketing, finance, telecom, exports and real-estate sectors, Mr. Elhage has worked globally in Europe, North Africa and the Middle East.
      
      Certainly experienced in the business world, Mr.Elhage also has a unique ability to work within strict country-based rules and regulations, while maintaining the integrity of his contracts and the ethical values behind his signature.
      
      In 1990, Mr.Elhage established SAGEMEL, a Telecom and Airports Equipment company that represents more than 10 global corporations including Thomson France, 3M USA and Alenia Italy. A multi-million dollar per year company, Mr. Elhage smoothly transitioned into the competitive real estate sector in 1997.
      
      Since then, he has built over 120,000 square meters of offices and residential projects in France, Algeria and Lebanon.
    `,
  },
  {
    id: 2,
    name: 'Simon Abdelmasih',
    title: 'General Manager',
    imageUrl: '/management.jpg',
    description: `Simon Abdelmasih is the General Manager and the BDM. 
    He holds a Master's degree (MSc) and an Executive MBA (EMBA) from ESCP Europe and ESA.
    
    Mr Abdelmasih has over 25 years of experience in project identification and development.
    
    Throughout his career, Mr Abdelmasih has assumed positions of increasing responsibility. He has executed several major projects worth over $200 million in Lebanon and internationally. 
    In these roles, he has demonstrated competence in identifying opportunities, conducting studies, facilitating development, managing sales, and overseeing project exits.`,
  },
];

const ManagementTeam = () => {
  return (

    <section className="max-w-screen-xl mx-auto py-20 px-8 ">
      <h2 className="text-4xl xl:text-5xl capitalize text-center font-bold text-primary">Management Team</h2>
      <hr className="mx-auto w-12 h-1 outline-0 border-0 bg-gray-100 block mt-4 mb-6" />
      <div className="flex flex-col gap-6 mt-4">
        {teamMembers.map((member, index) => (
          <div key={member.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6`}>
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 1 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-2/4 rounded-3xl overflow-hidden"
            >
              <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover aspect-video lg:aspect-square" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 1 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-2/4 bg-gray-100 rounded-3xl flex flex-col justify-center p-8 lg:p-14"
            >
              <h3 className="text-2xl capitalize font-semibold text-primary">{member.name}</h3>
              <span className="inline-block capitalize text-xl font-light mt-1.5 mb-5">{member.title}</span>
              <p className="opacity-75 leading-normal whitespace-pre-line">{member.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>

  );
};

export default ManagementTeam;
