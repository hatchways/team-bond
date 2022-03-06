import { Formik, Field, Form } from 'formik';
import { Select, Typography, Button, Grid } from '@mui/material/';
import React from 'react';
import AvailabilityTable from './AvailabiltyTable';

const Schedule: React.FC = () => {
  const schedulesType = [{ name: 'work week' }, { name: 'holiday week' }];
  return (
    <div>
      <Typography align="center" variant="h5" component="div" fontWeight={600} marginBottom={7} gutterBottom>
        Your availability
      </Typography>
      <Formik
        //APICall will populate default values for now its hard coded until integration
        initialValues={{
          scheduleName: 'work week',
          days: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
          hours: [
            { sunFrom: '00:00', sunTo: '00:00' },
            { monFrom: '00:00', monTo: '00:00' },
            { tueFrom: '00:00', tueTo: '00:00' },
            { wedFrom: '00:00', wedTo: '00:00' },
            { thurFrom: '00:00', thurTo: '00:00' },
            { friFrom: '00:00', friTo: '00:00' },
            { satFrom: '00:00', satTo: '00:00' },
          ],
        }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          console.log(values); // APICall from helper goes here
          setSubmitting(false);
        }}
      >
        {({ values, setFieldValue, handleSubmit }) => {
          return (
            <>
              <Form
                onClick={() => {
                  const dayArr = values.days;
                  const daysAvailabilty = dayArr.map((day) => {
                    const from = `${day}From`;
                    const to = `${day}To`;
                    return {
                      [day]: {
                        From: (values as any)[from] || '00:00',
                        To: (values as any)[to] || '00:00',
                      },
                    };
                  });
                  values.scheduleName ? setFieldValue('hours', daysAvailabilty) : null;
                }}
              >
                <Field
                  name="scheduleName"
                  component="select"
                  as={Select}
                  style={{ height: '30px', fontWeight: 'bold', justifyContent: 'center' }}
                  defaultValue={{ label: 'Select Dept', value: 0 }}
                >
                  {schedulesType.map((schedule) => {
                    return (
                      <option key={schedule.name} value={schedule.name}>
                        {schedule.name}
                      </option>
                    );
                  })}
                </Field>
                <button
                  type="reset"
                  style={{
                    marginLeft: '5px',
                    height: '30px',
                    color: 'white',
                    backgroundColor: '#f14140',
                    border: 'none',
                  }}
                >
                  + new schedule
                </button>
                <label>
                  <Typography align="left" fontWeight={800} sx={{ marginY: 3 }} gutterBottom>
                    Set your weekly hours
                  </Typography>
                </label>
                <AvailabilityTable values={values as any} />
                <Grid style={{ display: 'flex', justifyContent: 'center' }}>
                  <Grid item style={{ display: 'flex', alignItems: 'center' }}>
                    <Button
                      type="submit"
                      style={{
                        marginTop: '15px',
                        border: '1px solid grey',
                        backgroundColor: '#f14140',
                        color: 'white',
                      }}
                    >
                      submit
                    </Button>
                  </Grid>
                </Grid>
                <pre>{JSON.stringify(values, null, 2)}</pre>
              </Form>
            </>
          );
        }}
      </Formik>
    </div>
  );
};
export default Schedule;
