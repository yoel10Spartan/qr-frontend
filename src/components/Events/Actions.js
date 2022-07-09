import React, { useEffect, useState } from 'react';
import { Flex, Button, Box, chakra } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const Actions = ({ showAction }) => {

    const { event } = useSelector(state => state.events);
    const [action, setAction] = useState('');

    useEffect(() => {
        const getAction = localStorage.getItem('action');
        setAction(getAction);
    }, []);

    const setEntry = () => {
        localStorage.setItem('action', 'entry');
        setAction('entry');
        if(showAction){showAction('entry')}
    }

    const setOut = () => {
        localStorage.setItem('action', 'output');
        setAction('output');
        if(showAction){showAction('output')}
    }

    return (
        <Box
            display='flex'
            justifyContent='center'
        >
            <Flex
                flexDirection='column'
                w={['90%', '50%']}
            >
                <ButtonUI 
                    isDisabled={action=='entry'} 
                    variant='outline'
                    colorScheme='teal'
                    onClick={setEntry}
                >
                    MARCAR ENTRADAS
                </ButtonUI>
                <ButtonUI 
                    isDisabled={action=='output'} 
                    variant='outline'
                    colorScheme='teal'
                    onClick={setOut}
                >
                    MARCAR SALIDAS
                </ButtonUI>

                {
                    event.count_trade_show_hours 
                        && (
                            <>
                                <ButtonUI 
                                    isDisabled={action=='entry'} 
                                    variant='outline'
                                    colorScheme='teal'
                                    onClick={setEntry}
                                >
                                    MARCAR ENTRADAS A LA EXPO
                                </ButtonUI>
                                <ButtonUI 
                                    isDisabled={action=='output'} 
                                    variant='outline'
                                    colorScheme='teal'
                                    onClick={setOut}
                                >
                                    MARCAR SALIDAS DE LA EXPO
                                </ButtonUI>
                            </>
                        )
                }
            </Flex>
        </Box>
    )
}

const ButtonUI = chakra(Button, {
    baseStyle: {
        m: '10px',
        variant: 'outline',
        colorScheme: 'teal'
    },
})

export default Actions