import React, { useEffect } from 'react';
import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';
import { IoAddOutline } from 'react-icons/io5';
import EventForm from '../Events/EventForm';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { eventCreate, getAllEvents, resetCreateEvent } from '../../statement/actions/events';

const ModalAddEvent = () => {
    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { load } = useSelector(state => state.loading);
    const { success_create_event } = useSelector(state => state.events);

    const {
        register, 
        handleSubmit,
        reset,
    } = useForm();

    useEffect(() => {
        if(success_create_event){
            dispatch( resetCreateEvent() );
            onClose();
            reset();
        }
        dispatch( getAllEvents() );
    }, [success_create_event]);

    const handleCreateEvent = (data) => {
        dispatch( eventCreate(data) );
    }

    const modal = (
        <Modal size='xl' blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay
                bg='blackAlpha.300'
                backdropFilter='blur(10px) hue-rotate(90deg)'
            />
            <ModalContent>
                <ModalHeader>Crear un evento</ModalHeader>
                <ModalCloseButton />

                <form onSubmit={handleSubmit(handleCreateEvent)}>
                    <ModalBody>
                        <EventForm  
                            register={register}
                        />
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Cancelar
                        </Button>
                        <Button 
                            type='submit'
                            variant='ghost'
                            isLoading={load.loadCreateEvent}
                        >
                            Agregar
                        </Button>
                    </ModalFooter>
                </form>

            </ModalContent>
        </Modal>
    )

    return (
        <>
            <Box
                w='100%'
                textAlign='center'
            >
                <Button 
                    leftIcon={<IoAddOutline />} 
                    colorScheme='teal' 
                    variant='solid'
                    w='60%'
                    onClick={onOpen}
                >
                    Crear un nuevo evento
                </Button>
            </Box>
            {modal}
        </>
    )
}

export default ModalAddEvent