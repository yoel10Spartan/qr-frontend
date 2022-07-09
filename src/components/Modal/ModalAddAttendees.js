import React, { useEffect } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';
import { BsFillPeopleFill } from 'react-icons/bs';
import { Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { attendeeRegister, getGroupsAttendees, resetAddAttendees } from '../../statement/actions/attendee';

const ModalAddAttendees = () => {

    const dispatch = useDispatch();
    const { load } = useSelector(state => state.loading);
    const { success_add } = useSelector(state => state.attendee);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { 
        register, 
        handleSubmit,
    } = useForm();

    useEffect(() => {
        if(success_add){
            dispatch( resetAddAttendees() );
            onClose();
            dispatch( getGroupsAttendees() );
        }
    }, [success_add]);

    const handleSendData = (data) => {
        const _data = {
            'name': data.name,
            'file': data.file[0]
        }
        dispatch( attendeeRegister(_data) );
    }

    const formAttendees = (
        <>
            <FormControl as='fieldset'>
                <FormLabel as='legend'>Nombre</FormLabel>
                <Input 
                    type='text' 
                    {...register("name", { required: true })}
                />
            </FormControl>
            <Form.Group controlId="formFile" className="mb-3 mt-3">
                <Form.Label>Agregar un archivo CSV</Form.Label>
                <Form.Control 
                    {...register("file", { required: true })}
                    type="file" 
                />
            </Form.Group>
        </>
    )

    const modal = (
        <Modal size='xl' blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay
                bg='blackAlpha.300'
                backdropFilter='blur(10px) hue-rotate(90deg)'
            />
            <ModalContent>
                <ModalHeader>Agregar asistentes</ModalHeader>
                <ModalCloseButton />
                <form onSubmit={handleSubmit(handleSendData)}>
                    <ModalBody>
                        { formAttendees }
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Cancelar
                        </Button>
                        <Button 
                            variant='ghost'
                            type='submit'
                            isLoading={load.loadAddAttendees}
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
                    leftIcon={<BsFillPeopleFill />} 
                    colorScheme='teal' 
                    variant='solid'
                    w='60%'
                    onClick={onOpen}
                    m='10px'
                >
                    Agregar asistentes
                </Button>
            </Box>
            {modal}
        </>
    )
}

export default ModalAddAttendees