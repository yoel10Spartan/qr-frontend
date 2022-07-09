import React from 'react';
import { Box, Button, Center, Flex, FormControl, FormLabel, Select, Text } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { TiDeleteOutline } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import { attendeeAddLounge, getAttendeesWithLounge } from '../../statement/actions/attendee';
import { useParams } from 'react-router-dom';

const CategorizeAttendees = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const dispatch = useDispatch();
    const params = useParams();
    const { attendees } = useSelector(state => state.attendee);
    const { attendeesWithLounge } = useSelector(state => state.attendee);
    const { lounges } = useSelector(state => state.lounge);

    const handleAddAttendee = async (data) => {
        const _data = {
            id_attendee: data.attendee,
            id_lounge: data.lounge
        }

        await dispatch( attendeeAddLounge(_data) );
        reset();
        await dispatch( getAttendeesWithLounge(params.id) );
    }

    const handleDeleteAttendee = (id) => {
        
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
                <form style={{width: '70%'}} onSubmit={handleSubmit(handleAddAttendee)}>
                    <FormControl mb='10px'>
                        <FormLabel color='#707B7C'>Dividir asistentes</FormLabel>
                        <Select 
                            {...register('attendee', { required: true })}  
                            placeholder='Selecciona un asistente'
                            bg='#fff'
                        >
                            {
                                attendees.map(user => (
                                    <option 
                                        key={user.id} 
                                        value={user.id}
                                    >
                                        {user.id_qr}.- {user.name}
                                    </option>
                                ))
                            }
                        </Select>
                    </FormControl>
                    
                    <FormControl>
                        <Select 
                            {...register('lounge', { required: true })}  
                            placeholder='Selecciona un salon'
                            bg='#fff'
                        >
                            {
                                lounges.map(lounge => (
                                    <option 
                                        value={lounge.id}
                                    >
                                        {lounge.name}
                                    </option>
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
                    attendeesWithLounge.map(attendee => (
                        <Box
                            key={attendee.id}
                            w='100%'
                            h='100px'
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
                                Nombre: { attendee.name }
                            </Text>
                            <Text
                                color='#34495E'
                            >
                                Salon: { attendee.lounge }
                            </Text>
                            <Text
                                color='#34495E'
                            >
                                QR ID: { attendee.id_qr }
                            </Text>
                            <Box
                                position='absolute'
                                right='3'
                                top='3'
                                onClick={() => handleDeleteAttendee(attendee.id)}
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

export default CategorizeAttendees