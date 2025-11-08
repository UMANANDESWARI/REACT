import React from 'react';
import Chart from 'react-apexcharts';
import './Dashboard_Task.css';

// ====================== TopStats ======================
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
    colors: ['#6C5CE7', '#00B894', '#FD79A8', '#E17055'],

    // colors: ['#00E396', '#008FFB', '#FEB019', '#FF4560'],
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
      data: [12000, 22020, 10160, 22000],
    },
  ];

  return <Chart options={options} series={series} type="bar" height={300} />;
};


// ====================== MonthlyProgress ======================
const MonthlyProgress = () => {
  const options = {
    chart: { type: 'radialBar' },
    labels: ['August' ,'June', 'May', 'April'],
    colors: ['#0984E3', '#D63031', '#00CEC9', '#093760'],
    // colors: ['#00E396', '#FEB019', '#FF4560'],
  };
  const series = [30, 80, 60, 40];

  return <Chart options={options} series={series} type="radialBar" height={300} />;
};

// ====================== SalesLineChart ======================
const SalesLineChart = () => {
  const options = {
    chart: { type: 'line' },
    xaxis: { categories: ['01/01', '01/02', '01/03'] },
    stroke: { curve: 'smooth' },
    colors: ['#E84393', '#00B894', '#FAB1A0'],
  };
  const series = [
    { name: 'Electronics', data: [30, 40, 35] },
    { name: 'Fashion', data: [20, 30, 25] },
    { name: 'Home', data: [10, 20, 15] },
  ];

  return <Chart options={options} series={series} type="line" height={300} />;
};

// ====================== ProductBarChart ======================
const ProductBarChart = () => {
  const options = {
    chart: { type: 'bar' },
    xaxis: { categories: ['Q1', 'Q2', 'Q3', 'Q4'] },
    // colors: ['#2D3436', '#636E72', '#B2BEC3'],
    colors: ['#0984E3', '#D63031', '#00CEC9'],

  };
  const series = [
    { name: 'Mobiles', data: [40, 60, 70, 80] },
    { name: 'Laptops', data: [30, 50, 60, 70] },
    { name: 'Appliances', data: [20, 40, 50, 60] },
  ];

  return <Chart options={options} series={series} type="bar" height={300} />;
};

// ====================== CategoryAreaChart ======================
const CategoryAreaChart = () => {
  const options = {
    chart: { type: 'area' },
    xaxis: { categories: ['Q1', 'Q2', 'Q3', 'Q4'] },
    // colors: ['#55EFC4', '#81ECEC', '#74B9FF'],
    colors: ['#6C5CE7', '#00B894', '#E17055'],

  };
  const series = [
    { name: 'Electronics', data: [20, 80, 30, 80, 20] },
    { name: 'Fashion', data: [60, 15, 55, 45, 10] },
    { name: 'Home', data: [10, 30, 10, 70, 50] },
  ];

  return <Chart options={options} series={series} type="area" height={300} />;
};

// ====================== ConversionStats ======================
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
      categories: [
        '01/15/2002',
        '01/16/2002',
        '01/17/2002',
        '01/18/2002',
        '01/19/2002',
        '01/20/2002',
      ],
      labels: { style: { fontSize: '12px' } },
    },
    yaxis: {
      min: 0,
      max: 60,
      tickAmount: 6,
      labels: { style: { fontSize: '12px' } },
    },
    colors: ['#6C5CE7', '#00B894', '#E17055'],
    // colors: ['#008FFB', '#00E396', '#FEB019'],
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
    { name: 'Visitors', data: [10, 30, 20, 50, 30, 60] },
    { name: 'Added to Cart', data: [5, 35, 10, 45, 10, 50] },
    { name: 'Completed Purchase', data: [2, 10, 30, 25, 45, 10] },
  ];

  return <Chart options={options} series={series} type="line" height={350} />;
};

// ====================== Dashboard ======================
const Dashboard_Task = () => (
  <body className='by'>
  <div className="container mt-4">
    <h5 className="chart-title">Top Stats</h5>
    <TopStats />

    <div className="row">
      <div className="col-md-6">
        <h5 className="chart-title">Monthly Progress</h5>
        <MonthlyProgress />
      </div>
      <div className="col-md-6">
        <h5 className="chart-title">Sales Overview</h5>
        <SalesLineChart />
      </div>
    </div>

    <div className="row mt-4">
      <div className="col-md-6">
        <h5 className="chart-title">Product Performance</h5>
        <ProductBarChart />
      </div>
      <div className="col-md-6">
        <h5 className="chart-title">Category Trends</h5>
        <CategoryAreaChart />
      </div>
    </div>

    <div className="row mt-4">
      <div className="col-md-6">
        <h5 className="chart-title">Conversion Funnel</h5>
        <ConversionStats />
      </div>
    </div>
  </div>
  </body>
);

export default Dashboard_Task;

