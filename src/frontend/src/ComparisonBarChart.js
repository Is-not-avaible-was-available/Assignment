import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

function ComparisonBarChart({ category, data }) {
    useEffect(() => {
        if (data.length > 0) {
            createChart(data);
        }
        return()=>{
            destroyChart();
        }
    }, [data]);

    const createChart = (data) => {
        destroyChart();
        const labels = data.map(event => event[category]);
        const values = data.map(event => event.impact);

        const ctx = document.getElementById(`${category}Chart`).getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Intensity',
                    data: values,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    };
        const destroyChart = () => {
            const chartElement = document.getElementById(`${category}Chart`);
            Chart.getChart(chartElement)?.destroy()
    };

    return (
        <div className="card">
            <div className="card-header">{category} Comparison</div>
            <div className="card-body">
                <canvas id={`${category}Chart`} width="400" height="400"></canvas>
            </div>
        </div>
    );
}

export default ComparisonBarChart;
