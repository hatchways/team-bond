import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import useStyles from './useStyles';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

import { useState } from 'react';

const ProfileSearch = (): JSX.Element => {
  const [dateValue, setDateValue] = useState(null);
  const classes = useStyles();

  const handleChange = (newDateValue: any) => {
    setDateValue(newDateValue);
  };

  return (
    <Box>
      <Grid container marginTop={3}>
        <Grid item sm={12}>
          <Typography align="center" variant="h2" style={{ fontWeight: 600 }}>
            Your Search results
          </Typography>
        </Grid>
      </Grid>
      <Box maxWidth={675} margin="auto" className={classes.boxContainer}>
        <Grid container marginTop={4} direction="row" justifyContent="space-between">
          <Grid item xs={12} sm={8}>
            <TextField variant="outlined" color="secondary" label="Search By city" fullWidth></TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={dateValue}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ProfileSearch;
