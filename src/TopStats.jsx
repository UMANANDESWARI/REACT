
import React from 'react';
import Chart from 'react-apexcharts';

const TopStats = () => {
  const options = {
    chart: {
      type: 'bar',
      height: 300,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '60%',
        distributed: true,
      },
    },
    colors: ['#00E396', '#008FFB', '#19fef6ff', '#FF4560'],
    dataLabels: {
      enabled: true,
      style: { fontSize: '14px', fontWeight: 'bold' },
    },
    xaxis: {
      categories: ['Revenue', 'Orders', 'Customers', 'Returns'],
    },
  };

  const series = [
    {
      data: [120000, 42020, 31160, 22000], 
    },
  ];

  return <Chart options={options} series={series} type="bar" height={300} />;
};

export default TopStats;
