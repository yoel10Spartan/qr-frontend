import { Button, Link } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import withView from '../../hocs/withView';
import { getAttendeesSimple, getAttendeesWithLounge } from '../../statement/actions/attendee';
import { getLounges } from '../../statement/actions/lounge';
import Groups from '../Groups/Groups';
import CategorizeAttendees from './CategorizeAttendees';

const AttendeeDash = () => {

    const dispatch = useDispatch();
    let params = useParams();

    useEffect(() => {
        dispatch( getLounges(params.id) );
        dispatch( getAttendeesSimple(params.id) );
        dispatch( getAttendeesWithLounge(params.id) );
    }, []);

    return (
        <>
            <Groups />

            <CategorizeAttendees />
        </>
    )
}

export default withView(AttendeeDash);