import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import AppRouter from './routes/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './statement/store';

const QR = () => {
    return (
        <Provider store={store}>
            <ChakraProvider>
                <AppRouter />
            </ChakraProvider>
        </Provider>
    )
}

export default QR

// <?php include_once("index.html"); ?>