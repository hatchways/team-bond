import React from 'react';
import { Grid, Typography, TextField, Button } from '@mui/material';
import "./Landing.css";


const LandingPage = () => {

    return (
            <Grid container columns={2} sx={{backgroundColor: "#FFFFFF", position: "relative"}} >
                <Grid  sx={{position: "fixed", top: 0, right: 0}} >
                    <img id="landing" src='landingpage.png'alt='' />
                </Grid>
                <Grid item sx={{paddingLeft: "10%"}} >
                    <Typography sx={{ fontSize: 45, fontWeight: 700, paddingTop: "10%", paddingBottom: "20%", width: "400px"}}>
                        Find the care your dog deserves 
                    </Typography>
                    <Typography sx={{fontSize: 12, fontWeight: 700}}>
                        WHERE
                    </Typography>
                    <Grid component="form" noValidate autoComplete="off">
                        <TextField id="outlined-basic" placeholder="Anywhere" variant="outlined" sx={{width: "300px"}}/>
                    </Grid>
                    <Typography sx={{paddingTop: "10%", fontSize: "12px", fontWeight: 700}}>
                        DROP  IN / DROP OFF
                    </Typography>
                    <Grid component="form" noValidate autoComplete="off" sx={{display: "flex", paddingBottom: "15%"}}>
                        <TextField id="outlined-basic" placeholder="mm/dd/yyyy" variant="outlined" required sx={{width: "150px"}}/>
                        <TextField id="outlined-basic" placeholder="mm/dd/yyyy" variant="outlined" required sx={{width: "150px"}}/>
                    </Grid>
                    <Button variant="contained" sx={{width: "200px", height: "50px"}}>
                        FIND MY DOG SITTER    
                    </Button>
                </Grid> 
            </Grid>
    );
};

export default LandingPage;