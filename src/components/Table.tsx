import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface TableProps {
  data: any;
  symbol: string;
}

const Table: React.FC<TableProps> = ({ data, symbol }) => {
  const { theme } = useTheme();

  if (!data || !data['Time Series (Daily)']) {
    return <div className='text-center'>No data available</div>;
  }

  const timeSeries = data['Time Series (Daily)'];
  const entries = Object.entries(timeSeries);

  return (
    <div
      className={`py-12  md:lg:py-16 px-4 lg:px-32 ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'
      }`}
    >
      <div className='overflow-x-auto'>
        <table className='min-w-full'>
          <thead>
            <tr>
              <th className='py-2 px-4 border-b text-left uppercase text-xs md:text-sm lg:text-base'>
                Date
              </th>
              <th className='py-2 px-4 border-b text-left uppercase text-xs md:text-sm lg:text-base'>
                Open
              </th>
              <th className='py-2 px-4 border-b text-left uppercase text-xs md:text-sm lg:text-base'>
                High
              </th>
              <th className='py-2 px-4 border-b text-left uppercase text-xs md:text-sm lg:text-base'>
                Low
              </th>
              <th className='py-2 px-4 border-b text-left uppercase text-xs md:text-sm lg:text-base'>
                Close
              </th>
              <th className='py-2 px-4 border-b text-left uppercase text-xs md:text-sm lg:text-base'>
                Volume
              </th>
            </tr>
          </thead>
          <tbody>
            {entries.map(([date, values]: [string, any]) => (
              <tr key={date}>
                <td className='py-2 px-4 border-b text-xs md:text-sm lg:text-base'>
                  {date}
                </td>
                <td className='py-2 px-4 border-b text-xs md:text-sm lg:text-base'>
                  {values['1. open']}
                </td>
                <td className='py-2 px-4 border-b text-xs md:text-sm lg:text-base'>
                  {values['2. high']}
                </td>
                <td className='py-2 px-4 border-b text-xs md:text-sm lg:text-base'>
                  {values['3. low']}
                </td>
                <td className='py-2 px-4 border-b text-xs md:text-sm lg:text-base'>
                  {values['4. close']}
                </td>
                <td className='py-2 px-4 border-b text-xs md:text-sm lg:text-base'>
                  {values['5. volume']}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
