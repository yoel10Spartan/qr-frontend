import React, { useEffect, useState } from 'react';
import { Flex, Grid, GridItem, Input, Text } from '@chakra-ui/react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import withView from '../../hocs/withView';
import UserItem from './UserItem';
import GraphicItem from './GraphicItem';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAttendees } from '../../statement/actions/attendee';

ChartJS.register(ArcElement, Tooltip, Legend);

// yoel86
// C5#nd3

const Graphics = () => {

    const params = useParams();
    const dispatch = useDispatch();
    
    const { attendeesAll } = useSelector(state => state.attendee);
    
    useEffect(() => {
        dispatch( getAllAttendees(params.id) );
    }, []);

    const [allUsers, setAllUsers] = useState(attendeesAll);
    const [userSelect, setUserSelect] = useState(null);
    
    const handleUserSelect = (data) => setUserSelect(data);

    const noSelect = (
        <Flex
            w='100%'
            h='100%'
            justifyContent='center'
            alignItems='center'
            color='#7F8C8D'
            fontSize='20px'
            textAlign='center'
        >
            <Text>
                Selecciona un asistente, para ver el grafico.
            </Text>
        </Flex>
    )

    const handleSearch = (e) => {
        const value = e.target.value;
        const searchedUser = attendeesAll.filter(
            user => user.name.toLowerCase().includes(value.toLowerCase()) ? user : ''
        );
        setAllUsers(searchedUser);
    }

    return (
        <>
            <Grid
                h='calc(100vh - 60px)'
                templateColumns={['100%', 'repeat(2, 50%)']}
                templateRows={['50% 50%', '100%']}
            >
                <GridItem
                    p='20px'
                    overflow='scroll'
                >
                    <Input onChange={handleSearch} type='search' placeholder='Buscar...' />
                    {
                        (allUsers.length > 0 ? attendeesAll : allUsers).map(user => (
                            <UserItem 
                                onClick={() => handleUserSelect(user)}
                                key={user.id} 
                                { ...user } 
                            />
                        ))
                    }
                </GridItem>
                <GridItem
                    overflow='scroll'
                >
                    {
                        userSelect ? (
                            <GraphicItem 
                                numbers={[
                                    userSelect.total_hours,
                                    userSelect.hours_covered,
                                    userSelect.hours_left
                                ]} 
                                {...userSelect}  
                            />
                        ) : noSelect
                    }
                </GridItem>
            </Grid>
        </>
    )
}

export default withView(Graphics);