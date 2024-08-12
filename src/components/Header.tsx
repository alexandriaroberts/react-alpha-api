'use client';

import React from 'react';
import { Poppins } from 'next/font/google';
import { useTheme } from '../context/ThemeContext';
import { MoonIcon, SunIcon } from './Icons';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

interface HeaderProps {
  symbol: string;
}

const Header: React.FC<HeaderProps> = ({ symbol }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className={`py-8 md:py-48 shadow-lg flex justify-center relative bg-blue-500 ${poppins.className}`}
    >
      <h1 className='text-center text-2xl md:text-6xl lg:text-6xl text-white font-bold'>
        “Stock Data for {symbol}!”
      </h1>
      <button
        onClick={toggleTheme}
        className='absolute ml-auto p-2 top-3 right-3'
        title='Change Theme'
      >
        {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
      </button>
    </header>
  );
};

export default React.memo(Header);
