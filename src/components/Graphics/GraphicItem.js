import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { Pie } from 'react-chartjs-2';

const GraphicItem = ({ numbers, name }) => {

    const data = {
        labels: ['Horas programadas', '% Horas cubiertas', '% Horas por cubrir'],
        datasets: [
            {
                label: '',
                data: numbers,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <>
            <Text
                m='10px'
                fontSize='xl'
                textAlign='center'
            >
                {name}
            </Text>
            <Box
                textAlign='center'
                m='20px'
            >
                <Text>
                    Horas programadas - { numbers[0] }
                </Text>
                <Text>
                    % Horas cubiertas - { numbers[1] }
                </Text>
                <Text>
                    % Horas por cubrir - { numbers[2] }
                </Text>
            </Box>
            <Pie data={data} />
        </>
    )
}

export default GraphicItem