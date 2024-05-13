export const filterDataByHour = responseData => {
  const timeSeriesData = responseData.data.time_series;
  const hourlyData = {};

  // Get the data before time series
  hourlyData.afterTimeSeries = {
    price: responseData.data.price,
    previous_close: responseData.data.previous_close,
    change: responseData.data.change,
    change_percent: responseData.data.change_percent,
    pre_or_post_market: responseData.data.pre_or_post_market,
    pre_or_post_market_change: responseData.data.pre_or_post_market_change,
    pre_or_post_market_change_percent:
      responseData.data.pre_or_post_market_change_percent,
    last_update_utc: responseData.data.last_update_utc,
  };

  // Extract data for each hour from 9:00 to 16:00
  for (let hour = 10; hour <= 16; hour++) {
    const hourDataKey = `2024-05-10 ${hour < 10 ? '0' + hour : hour}:00:00`;
    hourlyData[hourDataKey] = timeSeriesData[hourDataKey];
  }

  return hourlyData;
};
