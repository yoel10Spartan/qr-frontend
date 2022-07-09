import { FormControl, FormLabel, Input, Select, Switch } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';

const EventForm = ({ register }) => {

    const { group_attendees } = useSelector(state => state.attendee);

    return (
        <>
            <FormControl { ...style } as='fieldset'>
                <FormLabel as='legend'>Nombre del evento</FormLabel>
                <Input 
                    type='text' 
                    {...register("name", { required: true })}
                />
            </FormControl>
            <FormControl { ...style } as='fieldset'>
                <FormLabel as='legend'>Lugar</FormLabel>
                <Input 
                    type='text' 
                    {...register("place", { required: true })}
                />
            </FormControl>
            <FormControl { ...style } as='fieldset'>
                <FormLabel as='legend'>Fecha de inicio</FormLabel>
                <Input 
                    type='date' 
                    {...register("start_date", { required: true })}
                />
            </FormControl>
            <FormControl { ...style } as='fieldset'>
                <FormLabel as='legend'>Fecha de finalización</FormLabel>
                <Input 
                    type='date' 
                    {...register("finish_date", { required: true })}
                />
            </FormControl>
            <FormControl m='20px 0' display='flex' justifyContent='center' alignItems='center'>
                <FormLabel mb='0'>
                    No contabilizar horas, solo aforo.
                </FormLabel>
                <Switch 
                    {...register("count_hours")}
                />
            </FormControl>
            <FormControl m='20px 0' display='flex' justifyContent='center' alignItems='center'>
                <FormLabel mb='0'>
                    Contabilizar horas de la expo
                </FormLabel>
                <Switch 
                    {...register("count_trade_show_hours")}
                    defaultChecked
                />
            </FormControl>
            <FormControl { ...style } as='fieldset'>
                <FormLabel as='legend'>Aforo total</FormLabel>
                <Input 
                    type='text' 
                    {...register("aforo", { required: true })}
                />
            </FormControl>
            <FormControl { ...style } as='fieldset'>
                <FormLabel as='legend'>Horas totales</FormLabel>
                <Input 
                    type='number' 
                    {...register("total_hours", { required: true })}
                />
            </FormControl>
            <FormControl { ...style } as='fieldset'>
                <FormLabel as='legend'>Grupo de asistentes</FormLabel>
                <Select 
                    placeholder='Selecciona'
                    {...register("attendees_group", { required: true })}
                >
                    {
                        group_attendees.map(group => (
                            <option value={group.id}>{group.name}</option>
                        ))
                    }
                </Select>
            </FormControl>
        </>
    )
}

export default EventForm

const style = {
    m: '10px 0'
}