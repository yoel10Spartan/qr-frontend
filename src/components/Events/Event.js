import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { BsFillTrashFill, BsFillPeopleFill } from 'react-icons/bs';
import ModalStatistics from '../Modal/ModalStatistics';
import { Link } from 'react-router-dom';
import ModalAfore from '../Modal/ModalAfore';
import ModalAddOperator from '../Modal/ModalAddOperator';
import GetDB from './GetDB';

const Event = ({ event, onClick, select, not_hours=false, isAdmin }) => {
    const { id, name, group_users, group_users_id, place, date } = event;

    const downloadDB = (
        <Box
            m='10px'
        >
            <GetDB idEvent={id} />
        </Box>
    )

    const modalStatistics = (
        <Box
            m='10px'
        >
            <ModalStatistics idEvent={id} />
        </Box>
    )

    const viewGraphics = (
        <Box
            m='10px'
        >
            <Link to={`/graphics/${id}`}>
                <BsFillPeopleFill />
            </Link>
        </Box>
    )

    const modalAfore = (
        <Box
            m='10px'
        >
            <ModalAfore />
        </Box>
    )

    const modalOperator = (
        <Box
            m='10px'
        >
            <ModalAddOperator 
                idEvent={id} 
                idGroupUsers={group_users_id}
            />
        </Box>
    )

    const noHours = (
        <>
            { viewGraphics }
        </>
    )

    const withHours = (
        <>
            { modalAfore }
        </>
    )

    return (
        <Box
            w='250px'
            h='250px'
            boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
            m='20px'
            p='20px'
            textAlign='center'
            userSelect='none'
            onClick={onClick}
            border={ select ? '1px solid black' : 'none' }
        >
            <Text>
                { name }
            </Text>
            <Text>
                { group_users }
            </Text>
            <Text>
                { place }
            </Text>
            <Text>
                { date }
            </Text>
            <Flex
                justifyContent='center'
                alignItems='center'
                height='50%'
                fontSize='30px'
            >
                { modalStatistics }
                { not_hours ? withHours : noHours }
                { isAdmin ? modalOperator : '' }
                { isAdmin ? <Box
                    m='10px'
                >
                    <BsFillTrashFill />
                </Box> : ''}
                { downloadDB }
            </Flex>
        </Box>
    )
}

export default Event