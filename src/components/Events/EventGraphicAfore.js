import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
    },
};
  
const labels = ['Aforo'];

const EventGraphicAfore = ({ numbers }) => {

    const data = {
        labels,
        datasets: [
            {
                label: 'Aforo actual',
                data: [numbers[0]],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Aforo total',
                data: [numbers[1]],
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return (
        <Bar options={options} data={data} />
    )
}

export default EventGraphicAfore