import React, { useEffect, useState, useCallback } from 'react';

interface FetchDataProps {
  endpoint: string;
  symbol: string;
  children: (data: any) => JSX.Element;
}

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const FetchData: React.FC<FetchDataProps> = ({
  endpoint,
  symbol,
  children,
}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=${endpoint}&symbol=${symbol}&apikey=${API_KEY}`
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  }, [endpoint, symbol]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return <div className='text-center'>Loading...</div>;
  }

  return <>{children(data)}</>;
};

export default React.memo(FetchData);
