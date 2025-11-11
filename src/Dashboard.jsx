// import React from 'react';
// import RevenueChart from './RevenueChart';
// import OrdersBarChart from './OrdersBarChart';
// import ProductTable from './ProductTable';
// import SellThroughChart from './SellThroughChart';
// import FunnelChart from './FunnelChart';
// import UserStats from './UserStats';

// const Dashboard = () => (
//   <div style={{ padding: '2rem' }}>
//     <h2>📊 Sales & Revenue Overview</h2>
//     <RevenueChart />
//     <OrdersBarChart />

//     <h2>📦 Product Performance</h2>
//     <ProductTable />
//     <SellThroughChart />

//     <h2>👥 User & Order Analytics</h2>
//     <UserStats />
//     <FunnelChart />
//   </div>
// );

// export default Dashboard;


import React from 'react';
import TopStats from './TopStats';
import MonthlyProgress from './MonthlyProgress';
import SalesLineChart from './SalesLineChart';
import ProductBarChart from './ProductBarChart';
import CategoryAreaChart from './CategoryAreaChart';
import ConversionStats from './ConversionStats';

const Dashboard = () => (
  <div className="container mt-4">
    <TopStats />

    <div className="row">
      <div className="col-md-6"><MonthlyProgress /></div>
      <div className="col-md-6"><SalesLineChart /></div>
    </div>

    <div className="row mt-4">
      <div className="col-md-6"><ProductBarChart /></div>
      <div className="col-md-6"><CategoryAreaChart /></div>
    </div>

    <div className="row mt-4">
      <div className="col-md-6"><ConversionStats /></div>
    </div>

  </div>
);

export default Dashboard;
