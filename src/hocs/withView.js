import React from 'react'
import { Box } from '@chakra-ui/react';

import { 
    MdOutlineEventAvailable
} from 'react-icons/md';
import { 
    BiQrScan,
    BiExit
} from 'react-icons/bi';
import { 
    AiOutlineSetting
} from 'react-icons/ai';

import NavBar from '../components/NavBar/NavBar';

const withView = (Component) => {

    const handleGetOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('refresh');
    }

    const items = [
        { title: 'Eventos', icon: <MdOutlineEventAvailable />, href: '/events' },
        { title: 'Lector QR', icon: <BiQrScan />, href: '/' },
        { title: 'Cofig.', icon: <AiOutlineSetting />, href: '/setting' },
        { 
            title: 'Salir', 
            icon: <BiExit />, 
            href: '/signin',
            onClick: handleGetOut
        },
    ]

    return (props) => (
        <Box
            w='100vw'
            h='100vh'
        >
            <NavBar items={items} /> 
            <Component />
        </Box>
    )
}

export default withView