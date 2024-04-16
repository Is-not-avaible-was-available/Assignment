import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Legend, Tooltip } from 'chart.js';
import {Line} from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip
);

const EventChart = ({ eventsData, xAxisVariable }) => {
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [],
    });

    useEffect(() => {
        if (eventsData) {
            const sortedEventsData = eventsData.sort((a,b) => {
                const valueA = a[xAxisVariable];
                const valueB = b[xAxisVariable];

                // Check if the values are numeric
                if (!isNaN(valueA) && !isNaN(valueB)) {
                    return valueA - valueB; // Numerical comparison
                } else {
                    // Resort to lexical comparison
                    return String(valueA).localeCompare(String(valueB));
                }});

            let chartLabels = sortedEventsData.map((event) => event[xAxisVariable]);
            const datasets = [];

            // Handle different data availability (intensity, impact, relevance, likelihood)
            const availableData = Object.keys(sortedEventsData[0]).filter(
                (key) =>
                    key === 'intensity' ||
                    key === 'impact' ||
                    key === 'relevance' ||
                    key === 'likelihood'
            );

            availableData.forEach((dataKey) => {
                datasets.push({
                    label: dataKey,
                    data: sortedEventsData.map((event) => event[dataKey]),
                    backgroundColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
                        Math.random() * 256
                    )}, ${Math.floor(Math.random() * 256)}, 0.5)`, // Random colors for each dataset
                    borderColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
                        Math.random() * 256
                    )}, ${Math.floor(Math.random() * 256)}, 1)`,
                });
            });

            setChartData({
                labels: chartLabels,
                datasets: datasets,
            });
        }
    }, [eventsData, xAxisVariable]);

    const chartOptions = {
        responsive: true,
        scales: {
            xAxes:[
                {
                    scaleLabel: {
                        display:true,
                        labelString: xAxisVariable
                    },
                    ticks:{
                        beginAtZero: true
                    }
                },
            ]
        },
    };

    return (
        <div>
            {eventsData && (
                <div>
                    <h2>Event Chart Based on {xAxisVariable}:</h2>
                        <Line options={chartOptions} data={chartData} />
                </div>
            )}
        </div>
    );
};

export default EventChart;