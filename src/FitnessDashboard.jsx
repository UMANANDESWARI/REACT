import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import './FitnessDashboard.css';

function FitnessDashboard() {
  useEffect(() => {
    const stepsCaloriesOptions = {
      chart: { type: 'line', height: 220 },
      series: [
        { name: 'Steps', data: [5000, 7000, 4000, 6000, 9000, 5000, 7500] },
        { name: 'Calories', data: [2000, 3500, 2500, 4000, 3600, 4000, 3000] },
      ],
      xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      colors: ['#f8b500', '#ff9f43'],
      stroke: { curve: 'smooth' },
      title: { text: 'Steps & Calories Burned', align: 'center' },
    };

    const workoutTypeOptions = {
      chart: { type: 'donut', height: 220 },
      series: [40, 25, 20, 15],
      labels: ['Cardio', 'Strength', 'Yoga', 'HIIT'],
      colors: ['#f8b500', '#ff9f43', '#ffd180', '#ffeaa7'],
      title: { text: 'Workout Types', align: 'center' },
      legend: { position: 'bottom' },
    };

    const sleepQualityOptions = {
      chart: { type: 'bar', height: 220 },
      series: [{ name: 'Sleep Hours', data: [6, 7.5, 5, 8, 6.5, 7, 7.2] }],
      xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      colors: ['#f8b500'],
      title: { text: 'Sleep Quality', align: 'center' },
      plotOptions: { bar: { borderRadius: 6 } },
    };

    const hydrationOptions = {
      chart: { type: 'radialBar', height: 220 },
      series: [75],
      labels: ['Hydration %'],
      colors: ['#ff9f43'],
      title: { text: 'Hydration Tracker', align: 'center' },
    };

    const sweatGridOptions = {
        chart: { type: 'heatmap', height: 240 },
        plotOptions: {
            heatmap: {
            shadeIntensity: 0.5,
            colorScale: {
                ranges: [
                { from: 0, to: 3, name: 'Low', color: '#ffeaa7' },
                { from: 4, to: 6, name: 'Medium', color: '#fbc531' },
                { from: 7, to: 10, name: 'High', color: '#e17055' }
                ]
            }
            }
        },
        dataLabels: { enabled: false },
        xaxis: {
            type: 'category',
            categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        title: { text: 'Workout Intensity – Sweat Grid', align: 'center' },
        series: [
            {
            name: 'Cardio',
            data: [7, 6, 8, 5, 9, 4, 6]
            },
            {
            name: 'Strength',
            data: [5, 4, 6, 7, 5, 3, 4]
            },
            {
            name: 'Yoga',
            data: [2, 3, 2, 4, 3, 2, 3]
            },
            {
            name: 'HIIT',
            data: [8, 9, 7, 6, 8, 7, 9]
            }
        ]
    };

    const chart1 = new ApexCharts(document.querySelector('#stepsCalories'), stepsCaloriesOptions);
    const chart2 = new ApexCharts(document.querySelector('#workoutTypes'), workoutTypeOptions);
    const chart3 = new ApexCharts(document.querySelector('#sleepQuality'), sleepQualityOptions);
    const chart4 = new ApexCharts(document.querySelector('#hydration'), hydrationOptions);
    const chart5 = new ApexCharts(document.querySelector('#sweatGrid'), sweatGridOptions);

    chart1.render();
    chart2.render();
    chart3.render();
    chart4.render();
    chart5.render();

    return () => {
      chart1.destroy();
      chart2.destroy();
      chart3.destroy();
      chart4.destroy();
      chart5.destroy();
    };
  }, []);

  return (
    <div className="fitness-dashboard">
      <header className="dashboard-header">
        <h1>🏋️ Vital Vibes Tracker</h1>
        <p>Monitor your weekly wellness metrics</p>
      </header>

      <div className="info-grid">
        <div className="info-box"><h4>👣 Steps</h4><p>8,200</p></div>
        <div className="info-box"><h4>🔥 Calories</h4><p>320 kcal</p></div>
        <div className="info-box"><h4>💧 Water</h4><p>2.5 L</p></div>
        <div className="info-box"><h4>😴 Sleep</h4><p>7.2 hrs</p></div>
        <div className="info-box"><h4>😊 Mood</h4><p>Energized</p></div>
        <div className="info-box"><h4>🔥 Streak</h4><p>5 days</p></div>
        {/* <div className="info-box"><h4>📅 Challenge</h4><p>10K Steps Daily</p></div> */}
      </div>

      <div className="milestone-meter">
        <h4>🏁 Challenge Progress</h4>
        <div className="progress-bar">
            <div className="progress-fill" style={{ width: '60%' }}></div>
        </div>
        <p className="progress-label">60% Complete - Hydration Hero</p>
    </div>

      <div className="chart-row">
        <div id="stepsCalories" className="chart-box"></div>
        <div id="workoutTypes" className="chart-box"></div>
      </div>

      <div className="chart-row">
        <div id="sleepQuality" className="chart-box"></div>
        <div id="hydration" className="chart-box"></div>
      </div>

      <div className="chart-row">
        <div id="sweatGrid" className="chart-box1"></div>
      </div>

    </div>
  );
}

export default FitnessDashboard;
