import React, { useState } from 'react';
import { Box, FormControl, Input, Progress, Spinner } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { QRInputsOutputs } from '../../statement/actions/assists';

const InputScanner = () => {

    const {
        register,
        handleSubmit,
        reset
    } = useForm();
    const dispatch = useDispatch();
    const { currentOperator } = useSelector(state => state.operators);
    const { load } = useSelector(state => state.loading);
    const { event } = useSelector(state => state.events);

    const handleGetData = ({ id_qr }) => {

        const action = localStorage.getItem('action');
        
        const data = {
            id_event: event.id,
            id_operator: currentOperator.id
        }

        dispatch( QRInputsOutputs(action, id_qr, data) );
        reset();
    }

    return (
        <Box
            w='100vw'
            display='flex'
            justifyContent='center'
            m='20px'
        >
            {
                load.loadScannerQR
                    ? <Spinner />
                    : (
                        <form onSubmit={handleSubmit(handleGetData)}>
                            <FormControl as='fieldset'>
                                <Input
                                    w='100%'
                                    placeHolder='QR'
                                    type='number' 
                                    {...register("id_qr", { required: true })}
                                />
                            </FormControl>
                        </form>
                    )
            }
        </Box>
    )
}

export default InputScanner