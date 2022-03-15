import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { IconButton, Typography } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings'
import Avatar from '@mui/material/Avatar';

interface Props{
    bookings:(
    {
        name: string;
        date: string;
        status: string;
    }),
    title: string;
    cardWidth: string;
    cardHeight: string;
    headerFontSize: string;
    headerPaddingB: string;
    subHeaderFontSize: string;
    nameFontSize: string;
}

const Bookings = ({bookings, title, cardWidth, cardHeight, headerFontSize, headerPaddingB, subHeaderFontSize, nameFontSize }:Props) => {
    const [status, setStatus] = useState(bookings.status);
    function changeStatus(){
        if(status=="ACCEPTED"){
            setStatus("DECLINED")
        }else if(status=="DECLINED"){
            setStatus("ACCEPTED")
        }else{
            setStatus("DECLINED")
        }
    }
    return (
        <div>
            <Card elevation={2} sx={{width: cardWidth, height: cardHeight, marginBottom:1, paddingTop:1}}>
                <CardHeader
                    action={
                        <IconButton onClick={() => changeStatus()}>
                            <SettingsIcon/>
                        </IconButton>
                    }
                    titleTypographyProps={{ variant: "subtitle2", sx: {paddingBottom: headerPaddingB, fontSize: headerFontSize, fontWeight: 600, fontFamily: "Arial"}}}
                    title={title}
                    subheaderTypographyProps={{ variant: "h6", sx: {fontSize: subHeaderFontSize, fontWeight: 600, color: "black"}}}
                    subheader={bookings.date}
                    />
                 <CardContent sx={{paddingBottom: "0px"}}>
                    <Avatar alt="" sx={{float: "left"}}/>
                    <Typography sx={{float: "right"}}>
                        {status}
                    </Typography>
                    <Typography 
                        variant= "h6" 
                        color= "text.primary"
                        fontSize={nameFontSize}
                        fontWeight={600}
                        noWrap
                        pl={2}
                        pt={1}
                        gutterBottom
                    >
                    {bookings.name}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default Bookings;