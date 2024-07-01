import React from 'react';

interface NewsItemProps {
  date: string;
  title: string;
  status: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ date, title, status }) => {
  return (
    <div className="bg-gray-100 shadow-md rounded-lg p-6 m-4">
      <p className="text-gray-600 text-sm">{date}</p>
      <h2 className="text-xl font-bold text-red-600">{title}</h2>
      <p className={`text-lg ${status.includes('finalized') ? 'text-green-600' : 'text-yellow-600'}`}>
        {status}
      </p>
    </div>
  );
};

export default NewsItem;
