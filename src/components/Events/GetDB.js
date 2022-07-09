import React from 'react';
import { Link } from '@chakra-ui/react';
import { BsDownload } from 'react-icons/bs';

const GetDB = ({ idEvent }) => {
    return (
        <Link
            href={`https://qr-olesfera.herokuapp.com/api/v1.0/events/${idEvent}/get_data_excel/`}
        >
            <BsDownload />
        </Link>
    )
}

export default GetDB