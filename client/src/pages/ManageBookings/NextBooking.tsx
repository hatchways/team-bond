import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { IconButton, Typography } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings'

import useStyles from './useStyles';

import Avatar from '@mui/material/Avatar';




const NextBooking = () => {
    const classes = useStyles()
    return (
        <div>
            <Card sx={{width: 500, height: 200}}>
                
                <CardHeader
                
                    action={
                        <IconButton>
                            <SettingsIcon/>
                        </IconButton>
                    }
                    titleTypographyProps={{ variant: "subtitle2", pb: 2, sx: {fontWeight: 600, fontFamily: "Arial"}}}
                    title = "YOUR NEXT BOOKING"
                    subheaderTypographyProps={{ variant:"h6", sx: {fontWeight: 600, color:"black"}}}
                    subheader = "5 April 2020, 10-12 AM"
                    />
                 <CardContent>
                    <Avatar alt="" className={classes.Avatar}/>
                    <Typography 
                        variant="h6" 
                        color="text.primary"
                        fontWeight={600}
                        noWrap
                        pl={2}
                        pt={1}
                        gutterBottom
                    >
                    Norma Bynes
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default NextBooking;