import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Legend, Tooltip } from 'chart.js';
import { Bar} from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip
);

const EventChart = ({ eventsData }) => {
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [],
    });

    useEffect(() => {
        if (eventsData) {
            const sortedEventsData = eventsData.sort((a,b) => a.startYear - b.startYear);
            let chartLabels = sortedEventsData.map((event) => event.startYear);
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
    }, [eventsData]);

    const chartOptions = {
        responsive: true,
        scales: {
            xAxes:[
                {
                    scaleLabel: {
                        display:true,
                        labelString: 'Start Year'
                    },
                    ticks:{

                    }
                },
            ]
        },
    };

    return (
        <div>
            {eventsData && (
                <div>
                    <h2>Event Chart Based on Start Year:</h2>
                        <Bar options={chartOptions} data={chartData} />
                </div>
            )}
        </div>
    );
};

export default EventChart;