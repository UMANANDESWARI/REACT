// import React from 'react';
// import Chart from 'react-apexcharts';

// const FunnelChart = () => {
//   const options = {
//     chart: { type: 'bar' },
//     plotOptions: {
//       bar: {
//         horizontal: true,
//         barHeight: '80%',
//         distributed: true,
//       },
//     },
//     xaxis: { categories: ['Browsing', 'Cart', 'Checkout', 'Purchase'] },
//     colors: ['#FEB019', '#FF4560', '#775DD0', '#00E396'],
//   };

//   const series = [{ data: [1000, 700, 500, 400] }];

//   return <Chart options={options} series={series} type="bar" height={300} />;
// };

// export default FunnelChart;



import React from 'react';
import Chart from 'react-apexcharts';

const CategoryAreaChart = () => {
  const options = {
    chart: { type: 'area' },
    xaxis: { categories: ['Q1', 'Q2', 'Q3', 'Q4'] },
  };
  const series = [
    { name: 'Electronics', data: [20, 40, 60, 80] },
    { name: 'Fashion', data: [15, 35, 55, 75] },
    { name: 'Home', data: [10, 30, 50, 70] },
  ];

  return <Chart options={options} series={series} type="area" height={300} />;
};

export default CategoryAreaChart;
