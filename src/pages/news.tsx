import NewsItem from '@/components/newsItem';
import React from 'react';

const newsData = [
  { date: 'June 2024', title: 'Loft 55 - Construction works are in progress.', status: 'Construction works are in progress.' },
  { date: 'June 2019', title: 'Loft 705 – Project is finalized and handed-over', status: 'Project is finalized and handed-over' },
  { date: 'June 2019', title: 'Spears 88 – Project is finalized and handed-over', status: 'Project is finalized and handed-over' },
  { date: 'June 2019', title: 'Rubik 1709 – Project is finalized and handed-over', status: 'Project is finalized and handed-over' },
  { date: 'June 2019', title: 'Spears 1858 - Project is finalized and handed-over', status: 'Project is finalized and handed-over' },
];

const News: React.FC = () => {
  return (
    <div className="min-h-screen py-10">
      <h1 className="text-3xl font-bold text-center text-red-700 mb-8">Latest News</h1>
      <div className="max-w-4xl mx-auto">
        {newsData.map((news, index) => (
          <NewsItem
            key={index}
            date={news.date}
            title={news.title}
            status={news.status}
          />
        ))}
      </div>
    </div>
  );
};

export default News;
