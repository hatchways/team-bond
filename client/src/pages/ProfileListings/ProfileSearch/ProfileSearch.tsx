import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import useStyles from './useStyles';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

import { useState } from 'react';

interface Props {
  onChildFilterChange: ({ date, city }: { date: Date; city: string }) => void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const ProfileSearch = ({ onChildFilterChange = () => {} }: Props): JSX.Element => {
  const classes = useStyles();

  const now = new Date();
  const [filters, setFilters] = useState({
    date: now,
    city: '',
  });

  /**
   * calls parent function
   * @param date date
   * @param city city
   */
  const handleFilterChange = (date: Date, city: string) => {
    onChildFilterChange({ date, city });
  };

  const handleDateChange = (dateFilter: any) => {
    setFilters({
      ...filters,
      date: dateFilter,
    });
    handleFilterChange(filters.date, filters.city);
  };

  const handleCitySearch = (event: any) => {
    setFilters({
      ...filters,
      city: event.target.value,
    });
    handleFilterChange(filters.date, filters.city);
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
            <TextField
              variant="outlined"
              name="city"
              color="secondary"
              label="Search By city"
              fullWidth
              onChange={handleCitySearch}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                // name="date"
                value={filters.date}
                onChange={handleDateChange}
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
