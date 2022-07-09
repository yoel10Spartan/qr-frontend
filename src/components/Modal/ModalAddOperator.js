import React, { useEffect } from 'react';
import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';
import { MdWork } from 'react-icons/md';
import Operators from '../Operators/Operators';
import { useDispatch } from 'react-redux';
import { getOperators } from '../../statement/actions/operators';
import { getLounges } from '../../statement/actions/lounge';

const ModalAddOperator = ({ idEvent, idGroupUsers }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();

    // useEffect(() => {
    // }, []);
    
    const handleOpen = async () => {
        onOpen();
        await dispatch( getOperators(idEvent) );
        await dispatch( getLounges(idGroupUsers) );
    }

    const modal = (
        <Modal size='3xl' blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay
                bg='blackAlpha.300'
                backdropFilter='blur(10px) hue-rotate(90deg)'
            />
            <ModalContent>
                <ModalHeader>Crear un operador</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Operators idEvent={idEvent} />
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                        OK
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )

    return (
        <>
            <MdWork 
                onClick={handleOpen}
            />
            {modal}
        </>
    )
}

export default ModalAddOperator