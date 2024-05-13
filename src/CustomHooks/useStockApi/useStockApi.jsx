import axios from 'axios';
import {filterDataByHour} from '../../utils/TimeFunctions';

export const useStockApi = () => {
  const getStockSymbol = async comapny => {
    const options = {
      method: 'GET',
      url: 'https://real-time-finance-data.p.rapidapi.com/search',
      params: {
        query: comapny,
        language: 'en',
      },
      headers: {
        'X-RapidAPI-Key': '7feb43de13msh3d763dcb818324ap171020jsn45318599ce35',
        'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com',
      },
    };
    try {
      const response = await axios.request(options);
      console.log('sda', response?.data?.data?.stock[0]?.symbol);
      return response?.data?.data?.stock[0]?.symbol || null;
    } catch (error) {
      console.error(error);
    }
  };
  const getStocks = async companyName => {
    // const companySymbol = await getStockSymbol(companyName);
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
      console.log('API', response?.data?.data?.stock[0]?.symbol);
      return response?.data;
    } catch (error) {
      console.error(error);
    }
  };
  const getStocksTimePeriod = async (companyName, timePeriod) => {
    const companySymbol = await getStockSymbol(companyName);
    const options = {
      method: 'GET',
      url: 'https://real-time-finance-data.p.rapidapi.com/stock-time-series',
      params: {
        symbol: companySymbol,
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
      if (response?.data && timePeriod === '1D') {
        const result = filterDataByHour(response?.data);
        return result;
      }
      // return response?.data?.data;
    } catch (error) {
      console.error(error);
    }
  };
  const getCompanyInfo = async companyName => {
    const companySymbol = await getStockSymbol(companyName);
    const options = {
      method: 'GET',
      url: 'https://real-time-finance-data.p.rapidapi.com/stock-overview',
      params: {
        symbol: companySymbol,
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

  return {getStocksTimePeriod, getStockSymbol, getStocks, getCompanyInfo};
};
