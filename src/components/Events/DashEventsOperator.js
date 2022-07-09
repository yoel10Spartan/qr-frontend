import React, { useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import Event from './Event';
import withView from '../../hocs/withView';
import Actions from './Actions';
import { useDispatch, useSelector } from 'react-redux';
import { getAssignedEventOperator } from '../../statement/actions/events';
import { getOperator } from '../../statement/actions/operators';

// const event = { 
//     id: 1,
//     name: 'FEMEG',
//     group_users: 'Asistentes FEMEG',
//     place: 'Morelia',
//     date: '12/05/22',
//     not_hours: false, 
// }

// const event = { 
//     id: 3,
//     name: 'FEMEG',
//     group_users: 'Asistentes FEMEG',
//     place: 'Morelia',
//     date: '12/05/22',
//     not_hours: true, 
// }

const DashEventsOperator = () => {

    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);
    const { event } = useSelector(state => state.events);

    useEffect(() => {
        if(user.is_operator){
            dispatch( getAssignedEventOperator(user.id) );
            dispatch( getOperator(user.id) );
        }
    }, []);

    return (
        <>
            <Flex
                flexWrap='wrap'
                justifyContent='center'
            >
                <Event 
                    key={event.id} 
                    event={event} 
                    not_hours={ event.not_hours }
                />
            </Flex>
            <Actions />
        </>
    )
}

export default withView(DashEventsOperator);