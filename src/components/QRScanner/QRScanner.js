import React, { useState } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import BarcodeScannerComponent from 'react-qr-barcode-scanner';
import { useDispatch, useSelector } from 'react-redux';
import { QRInputsOutputs } from '../../statement/actions/assists';
import Actions from '../Events/Actions';
import InputScanner from './InputScanner';

const QRScanner = () => {

    const dispatch = useDispatch();
    const [action, setAction] = useState(localStorage.getItem('action'));
    const { currentOperator } = useSelector(state => state.operators);
    const { event } = useSelector(state => state.events);

    const handleGetData = (err, result) => {
        if(!result){return}

        const action = localStorage.getItem('action');
        
        const data = {
            id_event: event.id,
            id_operator: currentOperator.id
        }

        dispatch( QRInputsOutputs(action, result.text, data) );
    }

    return (
        <>
            <Text
                textAlign='center'
                fontSize='30px'
                fontWeight='600'
            >
                {
                    action === 'entry' && 'ENTRADAS'
                }
                {
                    action === 'output' && 'SALIDAS'
                }
            </Text>

            <InputScanner />

            <Flex
                w='100vw'
                justifyContent='center'
            >
                <BarcodeScannerComponent
                    width='100%'
                    height='calc(100vh - 60px)'
                    style={{objectFit: 'cover'}}
                    onUpdate={handleGetData}
                    facingMode='environment'
                    delay={2000}
                />
            </Flex>

            <Actions showAction={setAction} />
        </>
    )
}

export default QRScanner