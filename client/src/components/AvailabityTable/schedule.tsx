import { Formik, Field, Form, useField } from 'formik';
import { Select, Checkbox, Typography, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material/';
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
        initialValues={{
          schedules: new Map<string, { [key: string]: any }>(),
          scheduleType: '',
          days: [],
        }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          console.log(values.schedules); // APICall from helper goes here
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
                  values.scheduleType
                    ? setFieldValue('schedules', { [(values as any).scheduleType]: daysAvailabilty })
                    : null;
                  handleSubmit();
                }}
              >
                <Field
                  name="scheduleType"
                  component="select"
                  as={Select}
                  style={{ height: '30px', fontWeight: 'bold', justifyContent: 'center' }}
                  defaultValue={{ label: 'Select Dept', value: 0 }}
                >
                  <option value="" label="Work hours"></option>
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
