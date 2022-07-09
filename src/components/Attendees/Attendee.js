import React from 'react';
import { Box, Flex, Tag, Text } from '@chakra-ui/react';
import { BsPeople } from 'react-icons/bs';
import { TiDeleteOutline } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';

const Attendee = ({ id, name, total }) => {

    const navigate = useNavigate();

    return (
        <Flex
            w='250px'
            h='120px'
            boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
            m='20px'
            p='20px'
            textAlign='center'
            userSelect='none'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            onClick={() => navigate(`/attendees/${id}`)}
            position='relative'
        >
            <Text>
                Asistentes: <Tag>{ name }</Tag>
            </Text>
            <Text>
                Total: <Tag>{ total }</Tag>
            </Text>
        </Flex>
    )
}

export default Attendee