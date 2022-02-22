import React, {useState} from 'react';
import useStyles from './useStyles'
import { takeMonth }from './Calender'
import { Button, Grid, IconButton, Paper } from '@mui/material'
import {format, isSameMonth, isSameDay, addMonths, subMonths} from 'date-fns'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


// const minDate = new Date('2020-01-01T00:00:00.000');
// const maxDate = new Date('2034-01-01T00:00:00.000');



const CalenderView = () => {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const data = takeMonth(selectedDate)();

    function dayColor(day:Date){
      if(!isSameMonth(day, selectedDate)) return '#CCCCCC';
      if(isSameDay(day, selectedDate)) return '#FFFFFF';
      return '#000000';
    }

    function dayBGColor(day:Date){
      if(!isSameMonth(day, selectedDate)) return '#FFFFFF';
      if(isSameDay(day, selectedDate)) return '#f14140';
      return '#FFFFFF';
    }
    function nextMonth(){
      setSelectedDate(addMonths(selectedDate,1))
    };

    function prevMonth(){
      setSelectedDate(subMonths(selectedDate,1))
    }
    
    return (
            <Grid container sx={{paddingLeft:10}} >
                <Paper sx={{width: 550, height: 400, display: "flex", flexDirection:"column"}}>
                  <Grid sx={{  color: "#f14140", fontSize: 20, fontWeight: 400, fontFamily: "Roboto", margin: 3, paddingLeft:2}}>
                    <Grid item sx={{ float:"left"}}>
                      <IconButton onClick={() => prevMonth()}>
                          <ArrowBackIosNewIcon/>
                      </IconButton>
                    </Grid>
                    <Grid item sx={{float:"right"}}>
                      <IconButton onClick={() => nextMonth()}>
                        <ArrowForwardIosIcon/>
                      </IconButton>
                    </Grid>
                    <Grid item sx={{display: "flex", justifyContent: "center"}}>
                      {format(selectedDate, "MMMM")}{" "}
                      {format(selectedDate, "yyyy")}
                    </Grid>
                  </Grid>
                  
                  <Grid container columns={7} sx ={{height:200}}> 

                    {data.map((week) =>(
                      <Grid item container
                        columns={1}
                        key={week.toString()} 
                        sx={{ display:"flex", justifyContent: "center", paddingLeft:2}}
                      >
                        {week.map((day) => (
                          <Grid item 
                            key={day.toString()}
                            onClick={() => setSelectedDate(day)}
                            sx={{ padding:1,  marginLeft: 2, marginRight: 2, marginTop: 1, marginBottom: 1, color: dayColor(day), borderRadius: "50%", bgcolor: dayBGColor(day), fontWeight: 600, fontFamily: "Roboto", fontSize:14}}
                          >
                            {format(day, "dd")}
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