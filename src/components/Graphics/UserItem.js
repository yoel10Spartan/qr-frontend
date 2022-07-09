import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const UserItem = ({ name, id_qr, onClick }) => {
    return (
        <Box
            onClick={onClick}
            borderRadius='10px'
            display='flex'
            p='20px'
            alignItems='center'
            height='50px'
            border='1px solid #58D68D'
            userSelect='none'
            cursor='pointer'
            margin='10px'
        >
            <Text>{id_qr}.- {name}</Text>
        </Box>
    )
}

export default UserItem