import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 text-gray-800 p-4 text-center">
      &copy; {new Date().getFullYear()} Your Company Name
    </footer>
  );
};

export default Footer;
