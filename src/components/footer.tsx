import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#bb272d] text-white p-4 text-center">
      &copy; {new Date().getFullYear()} <span className='text-black hover:text-white hover:decoration-white'>TRUSTHOLD</span>
    </footer>
  );
};

export default Footer;
