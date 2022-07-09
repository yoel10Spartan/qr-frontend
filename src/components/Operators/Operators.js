import React from 'react';
import { Box, Button, Center, Flex, FormControl, FormLabel, Input, Select, Text } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { TiDeleteOutline } from 'react-icons/ti';
import { useSelector, useDispatch } from 'react-redux';
import { getOperators, operatorAdd } from '../../statement/actions/operators';

const Operators = ({ idEvent }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const { operators } = useSelector(state => state.operators);
    const { lounges } = useSelector(state => state.lounge);
    const dispatch = useDispatch();

    const handleAddOperator = async (data) => {
        reset();

        const _data = {
            ...data,
            id_event: idEvent
        }

        await dispatch( operatorAdd(_data) );
        await dispatch( getOperators(idEvent) );
    }

    const handleDeleteOperator = (id) => {
        
    }

    // aldo50
    // Fibga&

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
                <form style={{width: '70%'}} onSubmit={handleSubmit(handleAddOperator)}>
                    <FormControl mb='10px'>
                        <FormLabel color='#707B7C'>Crear un operador</FormLabel>
                        <Input 
                            {...register('name', { required: true })}  
                            bg='#fff' 
                            type='text' 
                            placeholder='Nombre'
                        />
                    </FormControl>
                    
                    <FormControl>
                        <Select 
                            {...register('id_lounge', { required: true })}  
                            placeholder='Selecciona un salon'
                            bg='#fff'
                        >
                            {
                                lounges.map(lounge => (
                                    <option key={lounge.id} value={lounge.id}>{lounge.name}</option>
                                ))
                            }
                        </Select>
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
                    operators.map(operator => (
                        <Box
                            key={operator.id}
                            w='100%'
                            h='150px'
                            borderRadius='20px'
                            display='flex'
                            flexDirection='column'
                            justifyContent='center'
                            alignItems='center'
                            bg='#EBEDEF'
                            m='5px 0 5px 0'
                            position='relative'
                        >
                            <Text
                                color='#34495E'
                            >
                                Nombre: { operator.name }
                            </Text>
                            <Text
                                color='#34495E'
                            >
                                Salon: { operator.lounge }
                            </Text>
                            <Text
                                color='#34495E'
                            >
                                Username: { operator.username }
                            </Text>
                            <Text
                                color='#34495E'
                            >
                                Contraseña: { operator.password }
                            </Text>
                            <Box
                                position='absolute'
                                right='3'
                                top='3'
                                onClick={() => handleDeleteOperator(operator.id)}
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

export default Operators