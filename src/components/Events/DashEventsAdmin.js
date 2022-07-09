import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import Event from './Event';
import { useSelector } from 'react-redux';

const DashEventsAdmin = () => {

    const { events } = useSelector(state => state.events);

    const noSelect = (
        <Flex
            w='100%'
            h='100%'
            justifyContent='center'
            alignItems='center'
            color='#7F8C8D'
            fontSize='20px'
            textAlign='center'
        >
            <Text>
                No hay eventos
            </Text>
        </Flex>
    )

    return (
        <>
            <Flex
                flexWrap='wrap'
                justifyContent='center'
            >
                {
                    events.length > 0 
                        ? events.map(event => (
                            <Event 
                                key={event.id} 
                                event={event} 
                                not_hours={ event.not_hours }
                                isAdmin={true}
                            />
                        ))
                        : noSelect
                }
            </Flex>
        </>
    )
}

export default DashEventsAdmin