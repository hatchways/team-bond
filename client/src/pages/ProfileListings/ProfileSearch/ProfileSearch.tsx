import { Box, Button, Grid, InputLabel, Typography } from '@mui/material';
import useStyles from './useStyles';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import { useState } from 'react';
import { MobileDateTimePicker } from '@mui/lab';

interface Props {
  onChildFilterChange: ({ from, to }: { from: Date; to: Date }) => void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const ProfileSearch = ({ onChildFilterChange = () => {} }: Props): JSX.Element => {
  const classes = useStyles();

  const [filters, setFilters] = useState({
    from: new Date(),
    to: new Date(),
  });

  /**
   * calls parent function
   * @param from datetime
   * @param to datetime
   */
  const handleSearch = () => {
    onChildFilterChange({ ...filters });
  };

  const handleFromChange = (from: any) => {
    setFilters({
      ...filters,
      from: from,
    });
  };

  const handleToChange = (to: any) => {
    setFilters({
      ...filters,
      to,
    });
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
        <Grid container width="100%" marginTop={4} direction="row" justifyContent="space-around" alignContent="center">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Grid item xs={12} sm={5}>
              <MobileDateTimePicker
                value={filters.from}
                onChange={handleFromChange}
                renderInput={({ inputRef, inputProps, InputProps }) => (
                  <>
                    <InputLabel
                      sx={{
                        fontSize: 16,
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        color: '#000',
                      }}
                      shrink
                      htmlFor="from"
                    >
                      From
                    </InputLabel>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                      <input className={classes.dateInput} id="from" ref={inputRef} {...inputProps} />
                      {InputProps?.endAdornment}
                    </Box>
                  </>
                )}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <MobileDateTimePicker
                label="To"
                value={filters.to}
                onChange={handleToChange}
                renderInput={({ inputRef, inputProps, InputProps }) => (
                  <>
                    <InputLabel
                      sx={{
                        fontSize: 16,
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        color: '#000',
                      }}
                      shrink
                      htmlFor="to"
                    >
                      To
                    </InputLabel>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                      <input className={classes.dateInput} id="to" ref={inputRef} {...inputProps} />
                      {InputProps?.endAdornment}
                    </Box>
                  </>
                )}
              />
            </Grid>
          </LocalizationProvider>
        </Grid>
      </Box>
      <Grid container direction="row" justifyContent="space-around">
        <Grid item xs={12} sm={5}>
          <Box textAlign="center" marginTop={5}>
            <Button
              sx={{
                padding: '20px 50px',
              }}
              onClick={handleSearch}
              size="large"
              variant="contained"
              color="primary"
              disableElevation
            >
              Search
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileSearch;
