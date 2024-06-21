import Head from 'next/head';

interface MediaItem {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

const mediaData: MediaItem[] = [
  {
    id: 1,
    imageUrl: '/media-1.jpg',
    title: 'Loft 705 and Spears 88 Ad',
    description: 'Published in the Maronite League Magazine 2016.',
  },
  {
    id: 2,
    imageUrl: '/media-2.jpg',
    title: 'Spears 1858, Rubik 1709, Loft 705, and Spears 88 Ad',
    description: 'Published in The Army Magazine 2016.',
  },
  {
    id: 3,
    imageUrl: '/LEBANON-OPPORTUNITIES-2014.png',
    title: 'Business Opportunities in Lebanon',
    description: 'Exhibitor in the Business Opportunities in Lebanon Conference and Workshop 2015. View photos.',
  },
  {
    id: 4,
    imageUrl: '/media-4.png',
    title: 'Rubik 1709 and Spears 1858 Ad',
    description: 'Published in Properties by Lebanon Opportunities magazine.',
  },
  // {
  //   id: 5,
  //   imageUrl: 'https://via.placeholder.com/400',
  //   title: 'Rubik 1709 and Spears 1858',
  //   description: 'Published in Al-Iktissad Wal-Aamal magazine.',
  // },
  {
    id: 6,
    imageUrl: '/Spears-Ad.jpg',
    title: 'Spears 1858 Ad',
    description: 'Published in Properties and Lebanon Opportunities magazine.',
  },
  {
    id: 7,
    imageUrl: '/Ashrafieh-Ad.jpg',
    title: 'Rubik 1709 Ad',
    description: 'Published in Lebanon Opportunities magazine.',
  },
  {
    id: 8,
    imageUrl: '/general-Ad.png',
    title: 'Interview with Mr. Ahmad Al Haj',
    description: 'Published in Al-Iktissad Wal-Aamal magazine.',
  },
  // Add more data as needed
];

const Media = () => {
  return (
    <>
      <Head>
        <title>Media - TrustHold Group</title>
        <meta name="description" content="Media page showcasing our events and activities." />
      </Head>
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Our Media Gallery</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaData.map((item) => (
              <div key={item.id} className="relative group overflow-hidden rounded-lg shadow-lg">
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition duration-300 ease-in-out flex items-center justify-center">
                  <div className="text-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                    <h2 className="text-white text-xl font-bold mb-2">{item.title}</h2>
                    <p className="text-white">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Media;
