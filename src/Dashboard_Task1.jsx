import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import './Dashboard_Task1.css';

const ChartCard = ({ title, children }) => (
  <div className="chart-card">
    <h3 className="chart-heading">{title}</h3>
    <div className="chart-wrapper">{children}</div>
  </div>
);

// ================= Chart Components =================
const TopStats = () => {
  const options = {
    chart: { type: 'bar', toolbar: { show: false } },
    plotOptions: { bar: { horizontal: true, distributed: true } },
    colors: ['#6C5CE7', '#00B894', '#FD79A8', '#E17055'],
    dataLabels: { enabled: true },
    xaxis: { categories: ['Revenue', 'Orders', 'Customers', 'Returns'] },
  };
  const series = [{ data: [12000, 22020, 10160, 22000] }];
  return <Chart options={options} series={series} type="bar" height={250} />;
};

const MonthlyProgress = () => {
  const options = {
    chart: { type: 'radialBar' },
    labels: ['August', 'June', 'May', 'April'],
    colors: ['#0984E3', '#D63031', '#00CEC9', '#093760'],
  };
  const series = [30, 80, 60, 40];
  return <Chart options={options} series={series} type="radialBar" height={250} />;
};

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
  return <Chart options={options} series={series} type="line" height={250} />;
};

const ProductBarChart = () => {
  const options = {
    chart: { type: 'bar' },
    xaxis: { categories: ['Q1', 'Q2', 'Q3', 'Q4'] },
    colors: ['#0984E3', '#D63031', '#00CEC9'],
  };
  const series = [
    { name: 'Mobiles', data: [40, 60, 70, 80] },
    { name: 'Laptops', data: [30, 50, 60, 70] },
    { name: 'Appliances', data: [20, 40, 50, 60] },
  ];
  return <Chart options={options} series={series} type="bar" height={250} />;
};

const CategoryAreaChart = () => {
  const options = {
    chart: { type: 'area' },
    xaxis: { categories: ['Q1', 'Q2', 'Q3', 'Q4'] },
    colors: ['#6C5CE7', '#00B894', '#E17055'],
  };
  const series = [
    { name: 'Electronics', data: [20, 80, 30, 80, 20] },
    { name: 'Fashion', data: [60, 15, 55, 45, 10] },
    { name: 'Home', data: [10, 30, 10, 70, 50] },
  ];
  return <Chart options={options} series={series} type="area" height={250} />;
};

const ConversionStats = () => {
  const options = {
    chart: {
      type: 'line',
      toolbar: { show: false },
      animations: { enabled: true, easing: 'easeinout', speed: 800 },
    },
    stroke: { curve: 'smooth', width: 4 },
    markers: { size: 5, strokeWidth: 2, hover: { size: 7 } },
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
    colors: ['#6C5CE7', '#00B894', '#E17055'],
    legend: {
      position: 'top',
      horizontalAlign: 'center',
      fontSize: '14px',
    },
    grid: { borderColor: '#e0e0e0', strokeDashArray: 4 },
  };
  const series = [
    { name: 'Visitors', data: [10, 30, 20, 50, 30, 60] },
    { name: 'Added to Cart', data: [5, 35, 10, 45, 10, 50] },
    { name: 'Completed Purchase', data: [2, 10, 30, 25, 45, 10] },
  ];
  return <Chart options={options} series={series} type="line" height={250} />;
};

// ================= Right Panel =================
const RightPanel = ({ activeTab }) => {
  const widgets = [
    <>
      <div className="widget">
        <h4>Quick Stats</h4>
        <ul>
          <li>💰 Revenue: ₹12.5L</li>
          <li>🛒 Orders: 22K</li>
          <li>👥 Users: 10K</li>
          <li>✅ Conversion: 42%</li>
        </ul>
      </div>
    </>,
    <>
      <div className="widget">
        <h4>Monthly Goals</h4>
        <ul>
          <li>📈 Target: ₹15L</li>
          <li>📅 Deadline: Oct 31</li>
          <li>✅ Achieved: 60%</li>
        </ul>
      </div>
    </>,
    <>
      <div className="widget">
        <h4>Sales Breakdown</h4>
        <ul>
          <li>🖥 Electronics: ₹5L</li>
          <li>👗 Fashion: ₹3L</li>
          <li>🏠 Home: ₹2L</li>
        </ul>
      </div>
    </>,
    <>
      <div className="widget">
        <h4>Top Products</h4>
        <ul>
          <li>📱 Mobiles: 80K units</li>
          <li>💻 Laptops: 70K units</li>
          <li>🧊 Appliances: 60K units</li>
        </ul>
      </div>
    </>,
    <>
      <div className="widget">
        <h4>Trending Categories</h4>
        <ul>
          <li>📦 Electronics: +40%</li>
          <li>👚 Fashion: -10%</li>
          <li>🛋 Home: +25%</li>
        </ul>
      </div>
    </>,
    <>
      <div className="widget">
        <h4>Conversion Funnel</h4>
        <ul>
          <li>👀 Visitors: 60K</li>
          <li>🛒 Cart Adds: 50K</li>
          <li>💳 Purchases: 10K</li>
        </ul>
      </div>
    </>,
  ];

  return <aside className="right-panel">{widgets[activeTab]}</aside>;
};

// ================= Main Dashboard =================
const tabs = [
  { label: 'Overview', component: <TopStats /> },
  { label: 'Progress', component: <MonthlyProgress /> },
  { label: 'Sales', component: <SalesLineChart /> },
  { label: 'Products', component: <ProductBarChart /> },
  { label: 'Categories', component: <CategoryAreaChart /> },
  { label: 'Conversions', component: <ConversionStats /> },
];

const Dashboard_Task1 = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
  <div className="dashboard">
    <aside className="sidebar">
      <h2>📊 Insights</h2>
      <ul>
        {tabs.map((tab, i) => (
          <li
            key={i}
            className={activeTab === i ? 'active' : ''}
            onClick={() => setActiveTab(i)}
          >
            {tab.label}
          </li>
        ))}
      </ul>
      <button
        className="theme-toggle"
        onClick={() => document.body.classList.toggle('dark-mode')}
      >
        Toggle Theme
      </button>
    </aside>

    <div className="content-wrapper">
      <main className="main-content">
        <ChartCard title={tabs[activeTab].label}>
          {tabs[activeTab].component}
        </ChartCard>
      </main>

      <RightPanel activeTab={activeTab} />
    </div>
  </div>
);
}
export default Dashboard_Task1;
