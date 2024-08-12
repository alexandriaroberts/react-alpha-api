'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import FetchData from '../components/FetchData';
import Table from '../components/Table';
import Footer from '../components/Footer';
import { ThemeProvider } from '../context/ThemeContext';

const App: React.FC = () => {
  const [selectedSymbol, setSelectedSymbol] = useState('IBM');

  return (
    <ThemeProvider>
      <div className='min-h-screen flex flex-col'>
        <Header symbol={selectedSymbol} />
        <main className='flex-grow'>
          <FetchData endpoint='TIME_SERIES_DAILY' symbol={selectedSymbol}>
            {(data) => <Table symbol={selectedSymbol} data={data} />}
          </FetchData>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
