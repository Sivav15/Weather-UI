import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const HorizontalBarChart = (props) => {
    const data = {
        labels: props.lable,
        datasets: [
            {
                label: '',
                data: props.data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                ],
                borderWidth: 1
            }
        ]
    };

    const options = {
        indexAxis: 'y', // This makes the chart horizontal
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                display: false,
            },
            title: {
                display: true,
                text: 'Top categories',
                color: 'black'
            }
        },
        scales: {
            x: {
                grid: {
                    display: true,
                    color: 'rgba(200, 200, 200, 0.2)', // Change the color of the grid lines
                    borderDash: [5, 5], // Make the grid lines dashed
                    lineWidth: 0 // Adjust the width of the grid lines
                }
            },
            y: {
                grid: {
                    display: true,
                    color: 'rgba(200, 200, 200, 0.2)', // Change the color of the grid lines
                    borderDash: [5, 5], // Make the grid lines dashed
                    lineWidth: 0 // Adjust the width of the grid lines
                }
            }
        }
    };

    return <Bar data={data} options={options} />;
};

export default HorizontalBarChart;
