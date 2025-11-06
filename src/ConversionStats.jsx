import React from 'react';
import Chart from 'react-apexcharts';

const ConversionStats = () => {
  const options = {
    chart: {
      type: 'line',
      toolbar: { show: false },
      animations: { enabled: true, easing: 'easeinout', speed: 800 },
    },
    stroke: {
      curve: 'smooth',
      width: 4,
    },
    markers: {
      size: 5,
      strokeWidth: 2,
      hover: { size: 7 },
    },
    xaxis: {
      categories: ['01/15/2002', '01/16/2002', '01/17/2002', '01/18/2002', '01/19/2002', '01/20/2002'],
      labels: { style: { fontSize: '12px' } },
    },
    yaxis: {
      min: 0,
      max: 60,
      tickAmount: 6,
      labels: { style: { fontSize: '12px' } },
    },
    colors: ['#008FFB', '#00E396', '#19fed0ff'],
    legend: {
      position: 'top',
      horizontalAlign: 'center',
      fontSize: '14px',
    },
    grid: {
      borderColor: '#e0e0e0',
      strokeDashArray: 4,
    },
  };

  const series = [
    {
      name: 'Visitors',
      data: [10, 20, 30, 40, 50, 60],
    },
    {
      name: 'Added to Cart',
      data: [5, 25, 35, 45, 55, 50],
    },
    {
      name: 'Completed Purchase',
      data: [2, 15, 25, 35, 45, 40],
    },
  ];

  return <Chart options={options} series={series} type="line" height={350} />;
};

export default ConversionStats;
