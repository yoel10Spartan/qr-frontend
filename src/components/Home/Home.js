import React from 'react';
import withView from '../../hocs/withView';
import QRScanner from '../QRScanner/QRScanner';

const Home = () => {
    return (
        <QRScanner />
    )
}

export default withView(Home);