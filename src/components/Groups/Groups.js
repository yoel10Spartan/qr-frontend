import React, { useEffect, useState } from 'react';
import { Box, Button, Center, Flex, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { TiDeleteOutline } from 'react-icons/ti';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loungeAdd } from '../../statement/actions/lounge';

const Groups = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const dispatch = useDispatch();
    let params = useParams();
    const { lounges } = useSelector(state => state.lounge);

    const handleAddGroup = (data) => {
        const _data = {
            ...data, 
            attendees_group: params.id
        }
        
        dispatch( loungeAdd(_data) );
        reset();
    }

    const handleDelete = (id) => {
        
    }

    return (
        <Flex
            flexDirection='column'
            alignItems='center'
        >
            <Center
                w={[ '100vw', '50vw' ]}
                m='20px'
                bg='#F8F9F9'
                borderRadius='20px'
                h='250px'
            >
                <form style={{width: '70%'}} onSubmit={handleSubmit(handleAddGroup)}>
                    <FormControl>
                        <FormLabel color='#707B7C'>Crear un salon</FormLabel>
                        <Input 
                            {...register('name', { required: true })}  
                            bg='#fff' 
                            type='text' 
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel color='#707B7C'>Aforo</FormLabel>
                        <Input 
                            {...register('aforo', { required: true })}  
                            bg='#fff' 
                            type='number' 
                        />
                    </FormControl>
                    <Button 
                        colorScheme='blue' 
                        mt='10px'
                        type='submit'
                    >
                        Agregar
                    </Button>
                </form>
            </Center>
            <Box
                w={[ '100vw', '50vw' ]}
                height='50vh'
                overflow='scroll'
                flexWrap='wrap'
            >
                {
                    lounges.map(group => (
                        <Box
                            key={group.id}
                            w='100%'
                            h='100px'
                            borderRadius='20px'
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                            bg='#EBEDEF'
                            m='5px 0 5px 0'
                            position='relative'
                        >
                            <Box>

                                <Text
                                    color='#34495E'
                                >
                                    Salon: { group.name }
                                </Text>
                                <Text
                                    color='#34495E'
                                >
                                    Aforo: { group.aforo }
                                </Text>
                                <Text
                                    color='#34495E'
                                >
                                    Aforo actual: { group.aforo_current }
                                </Text>
                            </Box>
                            <Box
                                position='absolute'
                                right='3'
                                top='3'
                                onClick={() => handleDelete(group.id)}
                            >
                                <TiDeleteOutline size='25px' />
                            </Box>
                        </Box>
                    ))
                }
            </Box>
        </Flex>
    )
}

export default Groups