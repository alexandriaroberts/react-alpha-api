import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='bg-blue-600 text-white py-2 text-center'>
      <p>&copy; 2024 Stock Data Viewer</p>
    </footer>
  );
};

export default React.memo(Footer);
