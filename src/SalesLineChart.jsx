// import React from 'react';

// const products = [
//   { id: 'A3652', name: 'Cotten Toy', price: 50, sold: 450, inventory: 550, stock: 'In Stock' },
//   { id: 'A4454', name: 'Watch', price: 99, sold: 750, inventory: 0, stock: 'Out of Stock' },
//   { id: 'A5632', name: 'Headphone', price: 199, sold: 280, inventory: 220, stock: 'In Stock' },
//   { id: 'A9632', name: 'Dark Coffee', price: 40, sold: 500, inventory: 1000, stock: 'Out of Stock' },
// ];

// const ProductTable = () => (
//   <table>
//     <thead>
//       <tr><th>ID</th><th>Name</th><th>Price</th><th>Sold</th><th>Inventory</th><th>Status</th></tr>
//     </thead>
//     <tbody>
//       {products.map(p => (
//         <tr key={p.id}>
//           <td>{p.id}</td><td>{p.name}</td><td>${p.price}</td><td>{p.sold}</td><td>{p.inventory}</td><td>{p.stock}</td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
// );

// export default ProductTable;



import React from 'react';
import Chart from 'react-apexcharts';

const SalesLineChart = () => {
  const options = {
    chart: { type: 'line' },
    xaxis: { categories: ['01/01', '01/02', '01/03'] },
    stroke: { curve: 'smooth' },
  };
  const series = [
    { name: 'Electronics', data: [30, 40, 35] },
    { name: 'Fashion', data: [20, 30, 25] },
    { name: 'Home', data: [10, 20, 15] },
  ];

  return <Chart options={options} series={series} type="line" height={300} />;
};

export default SalesLineChart;
