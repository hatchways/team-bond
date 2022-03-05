import React from 'react';
import  Container  from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import CalenderView from './CalenderView';
import Bookings from './Bookings';
import { Paper, Typography } from '@mui/material';
import './Bookings.css';

const ManageBookings = () => {
    
    // These are test data to fill up the maps for the bookings. Once intergration with the backend is being done,
    // these can be removed.

    const nextBooking = [
        {
            name: "Norma Byers",
            date: "5 April 2020, 10-12 AM",
            status: ""
        }
    ]
    const currentBookings = [
        {
            name: "Charles Compton",
            date: "8 April 2020, 7-9 PM",
            status: "ACCEPTED"
        },
        {
            name: "Joan Blakeney",
            date: "30 March 2020, 8-12 AM",
            status: "DECLINED"
        }
    ]
    const prevBookings = [
        {
            name: "Michael Carnahan",
            date: "21 March 2020, 3-10 PM",
            status: "ACCEPTED"
        },
        {
            name: "John Doe",
            date: "12 March 2020, 2-6 PM",
            status: "ACCEPTED"
        }
    ]

    return (
        <Container>
            <Grid container> 
                <Grid columns={1}  sx={{paddingTop: 6, justifyContent: "flex-start"}}>
                    <Grid sx={{paddingBottom: 2}}>
                        {nextBooking.map(bookings => (
                            <Bookings 
                                key={bookings.name} 
                                bookings={bookings} 
                                title="YOUR NEXT BOOKING:" 
                                cardWidth="500px" 
                                cardHeight="180px" 
                                headerFontSize="11px" 
                                headerPaddingB="8px" 
                                subHeaderFontSize="16px" 
                                nameFontSize="14px" 
                            />
                        ))}
                    </Grid>
                    <Grid item component={Paper} elevation={2} sx={{overflowY: "scroll", overflowX: "hidden", maxHeight: "550px", maxWidth: "500px", paddingTop: 5, paddingLeft: 3}}>
                        <Typography
                            fontSize= "11px"
                            fontWeight= {600}
                            fontFamily= "Roboto"
                            paddingBottom="10px"
                        >
                            CURRENT BOOKINGS:
                        </Typography>
                        <Grid sx={{marginBottom:4}}>
                            {currentBookings.map(bookings => (
                                <Bookings 
                                    key={bookings.name} 
                                    bookings={bookings}
                                    title="" 
                                    cardWidth="450px" 
                                    cardHeight="180" 
                                    headerFontSize="0px" 
                                    headerPaddingB="0px" 
                                    subHeaderFontSize="13px" 
                                    nameFontSize="13px" 
                                />
                            ))}
                        </Grid>
                        <Typography
                            fontSize= "11px"
                            fontWeight= {600}
                            fontFamily= "Roboto"
                            paddingBottom="10px"
                        >
                            PAST BOOKINGS:
                        </Typography>
                        <Grid sx={{marginTop:1}}>
                            {prevBookings.map(bookings =>(
                                <Bookings 
                                    key={bookings.name} 
                                    bookings={bookings} 
                                    title="" 
                                    cardWidth="450px" 
                                    cardHeight="180" 
                                    headerFontSize="0px" 
                                    headerPaddingB="0px" 
                                    subHeaderFontSize="13px" 
                                    nameFontSize="13px"
                                    />
                                ))}
                        </Grid>
                    </Grid>
                </Grid>                
                <Grid sx={{paddingTop: 6, justifyContent:"flex-end"}}>
                    <CalenderView/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ManageBookings;