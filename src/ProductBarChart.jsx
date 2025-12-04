// import React from 'react';
// import Chart from 'react-apexcharts';

// const SellThroughChart = () => {
//   const options = {
//     chart: { type: 'scatter' },
//     xaxis: { title: { text: 'Price ($)' } },
//     yaxis: { title: { text: 'Units Sold' } },
//   };

//   const series = [{
//     name: 'Products',
//     data: [
//       [50, 450],
//       [99, 750],
//       [199, 280],
//       [40, 500],
//     ],
//   }];

//   return <Chart options={options} series={series} type="scatter" height={300} />;
// };

// export default SellThroughChart;




import React from 'react';
import Chart from 'react-apexcharts';

const ProductBarChart = () => {
  const options = {
    chart: { type: 'bar' },
    xaxis: { categories: ['Q1', 'Q2', 'Q3', 'Q4'] },
  };
  const series = [
    { name: 'Mobiles', data: [40, 60, 70, 80] },
    { name: 'Laptops', data: [30, 50, 60, 70] },
    { name: 'Appliances', data: [20, 40, 50, 60] },
  ];

  return <Chart options={options} series={series} type="bar" height={300} />;
};

export default ProductBarChart;
