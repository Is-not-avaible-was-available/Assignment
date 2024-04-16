import React, {useEffect, useState} from 'react';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Legend, Tooltip } from 'chart.js'
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

const EventChart2 = ({eventsData}) => {
    const [chartData, setChartData] = useState({
        labels: [],
        datasets:[],
    });

    useEffect(() => {
        if(eventsData){
            const sortedEventsData = eventsData.sort((a,b)=> a.endYear - b.endYear);
            const chartLabels = sortedEventsData.map((event) => event.endYear);
            const datasets = [];

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
                    <h2>Event Chart Based on End Year:</h2>
                    <Line options={chartOptions} data={chartData} />
                </div>
            )}
        </div>
    );
}

export default EventChart2;