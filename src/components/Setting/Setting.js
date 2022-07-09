import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import withView from '../../hocs/withView'
import { getGroupsAttendees } from '../../statement/actions/attendee';
import { getAllEvents } from '../../statement/actions/events';
import Attendees from '../Attendees/Attendees';
import DashEventsAdmin from '../Events/DashEventsAdmin';
import ModalAddAttendees from '../Modal/ModalAddAttendees';
import ModalAddEvent from '../Modal/ModalAddEvent';

const Setting = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( getGroupsAttendees() );
        dispatch( getAllEvents() );
    }, []);

    return (
        <>
            <ModalAddEvent />
            <ModalAddAttendees />

            <Attendees />

            <DashEventsAdmin />
        </>
    )
}

export default withView(Setting);