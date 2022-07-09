import React from 'react';
import { Box, Divider, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const EventStatistics = () => {

    const { statistics } = useSelector(state => state.events);
    const {
        aforo,
        asistentes,
        entradas_totales,
        salidas_totales,
        codigos_no_usados,
    } = statistics;

    return (
        <Box>
            <Text>
                Aforo: {aforo}
            </Text>
            <Divider />
            <Text>
                Asistentes: {asistentes}
            </Text>
            <Divider />
            <Text>
                Entradas totales: {entradas_totales}
            </Text>
            <Divider />
            <Text>
                Salidas totales: {salidas_totales}
            </Text>
            <Divider />
            <Text>
                Codigos no usados: {codigos_no_usados}
            </Text>
        </Box>
    )
}

export default EventStatistics