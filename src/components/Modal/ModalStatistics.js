import React from 'react';
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';
import { BsGraphUp } from 'react-icons/bs';
import EventStatistics from '../Events/EventStatistics';
import { useDispatch } from 'react-redux';
import { getStatistics } from '../../statement/actions/events';

const ModalStatistics = ({ idEvent }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();

    const modal = (
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay
                bg='blackAlpha.300'
                backdropFilter='blur(10px) hue-rotate(90deg)'
            />
            <ModalContent>
                <ModalHeader>Estadisticas</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <EventStatistics />
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Ok
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )

    const handleOpen = (e) => {
        e.stopPropagation();
        dispatch( getStatistics(idEvent) );
        onOpen();
    }
    
    return (
        <>
            <BsGraphUp 
                onClick={handleOpen}
            />
            {modal}
        </>
    )
}

export default ModalStatistics