import React from 'react';
import { Box, Center, chakra, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NavBar = ({ items }) => {
    return (
        <Flex
            justifyContent='space-evenly'
            height='60px'
            w='100%'
        >
            {
                items.map((item, index) => (
                    <Box
                        width='100%'
                        as={Link} 
                        key={index}
                        to={item.href}
                        onClick={item.onClick}
                    >
                        <NavBarItem>
                            { item.icon }
                            <Text>{ item.title }</Text>
                        </NavBarItem>
                    </Box>
                ))
            }
        </Flex>
    )
}

export default NavBar

const NavBarItem = chakra(Center, {
    baseStyle: {
        width: '100%',
        flexDirection: 'column',
        h: '100%',
        _hover: {
            bg: '#F2F4F4',
            '& p': {
                transition: '0.5s ease all',
                transform: 'translateY(-50%)',
            },
            '& svg': {
                transition: '0.5s ease all',
                color: 'transparent',
            }
        }
    }
});