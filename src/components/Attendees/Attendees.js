import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Attendee from './Attendee';
import { useSelector } from 'react-redux';

const Attendees = () => {

    const { group_attendees } = useSelector(state => state.attendee);

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
                No has agreado asistentes
            </Text>
        </Flex>
    )

    return (
        <Box
            m='20px'
            h='50%'
        >
            <Heading textAlign='center'>Asistentes</Heading>

            <Flex
                flexWrap='wrap'
                justifyContent='center'
            >
                {
                    group_attendees.length > 0
                        ? (
                            group_attendees.map(attendee => (
                                <Attendee key={attendee.id} { ...attendee } />
                            ))
                        )
                        : noSelect
                }
            </Flex>
        </Box>
    )
}

export default Attendees