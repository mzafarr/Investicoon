import axios from 'axios';

export const useStockApi = () => {
  const getStocks = async companyName => {
    const options = {
      method: 'GET',
      url: 'https://real-time-finance-data.p.rapidapi.com/search',
      params: {
        query: companyName,
        language: 'en',
      },
      headers: {
        'X-RapidAPI-Key': '7feb43de13msh3d763dcb818324ap171020jsn45318599ce35',
        'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data?.data?.stock[0]);
    } catch (error) {
      console.error(error);
    }
  };
  const getStocksTimePeriod = async (companyName, timePeriod) => {
    const options = {
      method: 'GET',
      url: 'https://real-time-finance-data.p.rapidapi.com/stock-time-series',
      params: {
        symbol: companyName,
        period: timePeriod,
        language: 'en',
      },
      headers: {
        'X-RapidAPI-Key': '7feb43de13msh3d763dcb818324ap171020jsn45318599ce35',
        'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return {getStocksTimePeriod, getStocks};
};
