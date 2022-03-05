import React, {useState} from 'react';
import { takeMonth }from './Calender'
import { Grid, IconButton, Paper } from '@mui/material'
import {format, isSameMonth, isSameDay, addMonths, subMonths, isThisMonth} from 'date-fns'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const CalenderView = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const freeDay = new Date(); // Change this variable for days available for bookings. Currently set to today's date
    const data = takeMonth(currentDate)();

    function dayColor(day:Date){
      if(!isSameMonth(day, currentDate)) return '#CCCCCC';
      if(isSameDay(day, freeDay)) return '#FFFFFF';
      return '#000000';
    }
    function dayBGColor(day:Date){
      if(!isSameMonth(day, currentDate)) return '#FFFFFF';
      if(isSameDay(day, freeDay)) return '#f14140';
      return '#FFFFFF';
    }
    function nextMonth(){
      setCurrentDate(addMonths(currentDate,1))
    }
    function prevMonth(){
      setCurrentDate(subMonths(currentDate,1))
    }
    return (
            <Grid container sx={{paddingLeft:10}} >
                <Paper elevation={2} sx={{width: 550, height: 400, display: "flex", flexDirection: "column"}}>
                  <Grid sx={{  color: "#f14140", fontSize: 20, fontWeight: 400, fontFamily: "Roboto", margin: 3, paddingLeft:2}}>
                    <Grid item sx={{ float: "left"}}>
                      <IconButton onClick={() => prevMonth()}>
                          <ArrowBackIosNewIcon/>
                      </IconButton>
                    </Grid>
                    <Grid item sx={{float: "right"}}>
                      <IconButton onClick={() => nextMonth()}>
                        <ArrowForwardIosIcon/>
                      </IconButton>
                    </Grid>
                    <Grid item sx={{display: "flex", justifyContent: "center"}}>
                      {format(currentDate, "MMMM")}{" "}
                      {format(currentDate, "yyyy")}
                    </Grid>
                  </Grid>
                  <Grid container columns={7} sx ={{height:200}}> 
                    {data.map((week) =>(
                      <Grid item container
                        columns={1}
                        key={week.toString()} 
                        sx={{ display: "flex", alignItems: "center", justifyContent: "center", paddingLeft:2}}
                      >
                        {week.map((day) => (
                          <Grid item 
                            key={day.toString()}
                            sx={{
                              width: "35px", 
                              height: "35px", 
                              padding:1,  
                              marginLeft: 2, 
                              marginRight: 2, 
                              marginTop: 1, 
                              marginBottom: 1, 
                              color: dayColor(day), 
                              borderRadius: "50%", 
                              bgcolor: dayBGColor(day), 
                              fontWeight: 600, 
                              fontFamily: "Roboto", 
                              fontSize:14, 
                              alignItems: "center", 
                              justifyContent: "center"}}
                          >
                            {format(day, "d")}
                          </Grid>
                        ))}
                        </Grid>
                  ))}
                  </Grid>
                </Paper>
            </Grid>
    );
};

export default CalenderView;