import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

function DataVisualizationCard({ factor, data }) {
    useEffect(() => {
        if (data.length > 0) {
            createChart(data);
        }
        return () => {
            destroyChart();
        }
    }, [data]);

    const createChart = (data) => {
        destroyChart();
        const labels = data.map(event => event.start_year);
        const values = data.map(event => event[factor]);

        const ctx = document.getElementById(`${factor}Chart`).getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: factor,
                    data: values,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
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
                const chartElement = document.getElementById(`${factor}Chart`);
                Chart.getChart(chartElement)?.destroy();
    };

    return (
        <div className="card">
            <div className="card-header">{factor} Chart</div>
            <div className="card-body">
                <canvas id={`${factor}Chart`} width="400" height="400"></canvas>
            </div>
        </div>
    );
}

export default DataVisualizationCard;
