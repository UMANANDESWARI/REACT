// import React from 'react';
// import Chart from 'react-apexcharts';

// const OrdersBarChart = () => {
//   const options = {
//     chart: { type: 'bar' },
//     xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
//     colors: ['#008FFB'],
//   };

//   const series = [{ name: 'Orders', data: [520, 610, 580, 640, 700, 680, 720] }];

//   return <Chart options={options} series={series} type="bar" height={300} />;
// };

// export default OrdersBarChart;





import React from 'react';
import Chart from 'react-apexcharts';

const MonthlyProgress = () => {
  const options = {
    chart: { type: 'radialBar' },
    labels: ['June', 'May', 'April'],
    colors: ['#00E396', '#2819feff', '#FF4560'],
  };
  const series = [80, 60, 40];

  return <Chart options={options} series={series} type="radialBar" height={300} />;
};

export default MonthlyProgress;
