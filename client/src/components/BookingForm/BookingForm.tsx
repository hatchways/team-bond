import { DesktopDatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Box, Button, Card, CircularProgress, Grid, InputLabel, CardHeader, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Formik, FormikHelpers } from 'formik';
import { useState } from 'react';
import { useSnackBar } from '../../context/useSnackbarContext';
import createBooking from '../../helpers/APICalls/createBooking';
import { IBooking } from '../../interface/Booking';
import { Profile } from '../../interface/Profile';
import { User } from '../../interface/User';

const useStyles = makeStyles({
  dateInput: {
    borderRadius: 8,
    border: '1px solid #dbdbdb',
    fontSize: 16,
    padding: '15px',
  },
});

interface Props {
  loggedInUser: User;
  profile: Profile;
  sitterId: string;
}

const BookingForm = ({ loggedInUser, profile, sitterId }: Props) => {
  const [booking, setBooking] = useState<IBooking>({
    userId: profile.userId,
    sitterId: sitterId,
  });
  const { updateSnackBarMessage } = useSnackBar();
  const classes = useStyles();

  const handleSubmit = (values: IBooking, { setSubmitting }: FormikHelpers<IBooking>) => {
    console.log(values, 'values');

    createBooking(values).then((data) => {
      if (data.error) {
        console.error({ error: data.error.message });
        setSubmitting(false);
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        setSubmitting(false);
        updateSnackBarMessage('Booking submitted!');
      } else {
        // should not get here from backend but this catch is for an unknown issue
        console.error({ data });

        setSubmitting(false);
        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    });
    updateSnackBarMessage('Saved');
  };

  return (
    <Card
      sx={{
        p: 4,
        maxHeight: '80vh',
        height: 'auto',
        overflowY: 'auto',
        minHeight: '400px',
        marginBottom: '20px',
      }}
      elevation={1}
    >
      <CardHeader>
        <Typography variant="subtitle1">Book now</Typography>
      </CardHeader>
      {(!loggedInUser || !profile) && <CircularProgress />}
      <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start">
        <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start" xs={4}>
          <Formik
            initialValues={{
              userId: booking.userId ?? '',
              sitterId: booking.sitterId ?? '',
              start: new Date(),
              end: new Date(),
            }}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue, handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
              <form onSubmit={handleSubmit} noValidate>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    value={values.start}
                    onChange={(start) => {
                      setFieldValue('start', start);
                    }}
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
                          htmlFor="start"
                        >
                          Start
                        </InputLabel>
                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                          <input className={classes.dateInput} id="start" ref={inputRef} {...inputProps} />
                          {InputProps?.endAdornment}
                        </Box>
                      </>
                    )}
                  />
                  <DesktopDatePicker
                    value={values.end}
                    onChange={(end) => {
                      setFieldValue('end', end);
                    }}
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
                          htmlFor="end"
                        >
                          End
                        </InputLabel>
                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                          <input className={classes.dateInput} id="end" ref={inputRef} {...inputProps} />
                          {InputProps?.endAdornment}
                        </Box>
                      </>
                    )}
                  />
                </LocalizationProvider>

                <Box textAlign="center" marginTop={5}>
                  <Button
                    sx={{
                      padding: '20px 50px',
                    }}
                    type="submit"
                    size="large"
                    variant="contained"
                    color="primary"
                    disableElevation
                  >
                    {isSubmitting ? <CircularProgress style={{ color: 'white' }} /> : 'Save'}
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </Card>
  );
};

export default BookingForm;
