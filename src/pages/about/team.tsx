import Head from 'next/head';

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
    imageUrl: 'https://via.placeholder.com/400',
    description: `
      Ahmad Elhage is nothing less than a multi-talented leader in the business world. With over 35 years of experience in the marketing, finance, telecom, exports and real-estate sectors, Mr. Elhage has worked globally in Europe, North Africa and the Middle East.
      
      Certainly experienced in the business world, Mr.Elhage also has a unique ability to work within strict country-based rules and regulations, while maintaining the integrity of his contracts and the ethical values behind his signature.
      
      In 1990, Mr.Elhage established SAGEMEL, a Telecom and Airports Equipment company that represents more than 10 global corporations including Thomson France, 3M USA and Alenia Italy. A multi-million dollar per year company, Mr. Elhage smoothly transitioned into the competitive real estate sector in 1997.
      
      Since then, he has built over 120,000 square meters of offices and residential projects in France, Algeria and Lebanon.
    `,
  },
  {
    id: 2,
    name: 'Zaher Diab',
    title: 'General Manager',
    imageUrl: 'https://via.placeholder.com/400',
    description: `
      Zaher Diab is an accomplished civil engineer with over 15 years experience in Construction & Project Management. Mr. Diab assumed positions of increasing responsibilities and oversaw the execution of a number of landmark projects worth over $400 million in Beirut, Dubai and Algeria, where he competently participated in the overall development process, including planning, organization/management, marketing & sales administration, contract administration, budgeting, cost and cash flow estimation and monitoring of variation orders.
      
      Since the beginning of his career, Mr.Diab has been known for his commitment to ethical practices in the business world, making him a leader with a reliable and trusted reputation.
      
      Mr. Diab holds a Bachelor of Science in Civil Engineering from Beirut Arab University, and a Master’s Degree in Business Administration from Lebanese American University. Furthermore, Mr. Diab holds a Project Management Professional (PMP) certificate, as well as other professional certifications in the fields of Risk Management, Time Management, Scheduling, Cost Control and Safety Regulations in Construction Management.
    `,
  },
];

const ManagementTeam = () => {
  return (

    <section className="max-w-screen-xl mx-auto py-20 px-8 lg:px-10">
      <h2 className="text-4xl xl:text-5xl capitalize text-center text-red-900 font-bold">Management Team</h2>
      <hr className="mx-auto w-12 h-1 outline-0 border-0 bg-red-300 block mt-4 mb-6" />
      <p className="text-center text-xl text-gray-800">Our team consists only of the best talents</p>

      <div className="flex flex-col gap-6 mt-16">
        {teamMembers.map((member, index) => (
          <div key={member.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6`}>
            <div className="w-full lg:w-1/4 rounded-3xl overflow-hidden">
              <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover aspect-video lg:aspect-square" />
            </div>
            <div className="w-full lg:w-9/12 bg-red-100 rounded-3xl flex flex-col justify-center p-8 lg:p-14">
              <h3 className="text-2xl capitalize text-red-900 font-semibold">{member.name}</h3>
              <span className="inline-block capitalize text-xl text-red-900 font-light mt-1.5 mb-5">{member.title}</span>
              <p className="text-red-900 opacity-75 leading-normal whitespace-pre-line">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

  );
};

export default ManagementTeam;
