import React from 'react';
import NextBooking from './NextBooking';
import  Container  from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import useStyles from './useStyles';
import CalenderView from './CalenderView';
import CurrentBookings from './CurrentBookings';

const ManageBookings = () => {
    const classes = useStyles()
    const data = CurrentBookings()
    return (
        <Container>
            <Grid container> 
                <Grid columns={1} justifyContent="flex-start" className={classes.GridTop}>
                    <NextBooking/>
                    {/* <CurrentBookings/> */}
                </Grid>
                
                <Grid justifyContent="flex-end" className={classes.GridTop}>
                    <CalenderView/>
                </Grid>
            </Grid>
            
            
        </Container>
    );
};

export default ManageBookings;