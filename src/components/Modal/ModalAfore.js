import React from 'react';
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';
import { SiGoogleclassroom } from 'react-icons/si';
import EventGraphicAfore from '../Events/EventGraphicAfore';

const ModalAfore = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const modal = (
        <Modal size='2xl' blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay
                bg='blackAlpha.300'
                backdropFilter='blur(10px) hue-rotate(90deg)'
            />
            <ModalContent>
                <ModalHeader>Aforo</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <EventGraphicAfore numbers={[50, 100]} />
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
        onOpen();
    }

    return (
        <>
            <SiGoogleclassroom 
                onClick={handleOpen}
            />
            {modal}
        </>
    )
}

export default ModalAfore