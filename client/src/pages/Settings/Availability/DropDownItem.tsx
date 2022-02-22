import { Formik, Field } from 'formik';

import Typography from '@mui/material/Typography';
import { useState } from 'react';
import AvailabilityTable from '../../../components/AvailabityTable/AvailabiltyTable';
import { CollectionsOutlined } from '@mui/icons-material';

const initialValues = {
  from: '00:00',
  to: '00:00',
  schedule: '',
};
const schedules = [{ name: 'work week' }, { name: 'holiday week' }];
function DropDownItem(): JSX.Element {
  return (
    <Formik
      onSubmit={(values) => {
        console.log(values);
        values.from >= values.to ? alert('start time must be earlier then end time') : alert('availability set');
      }}
      initialValues={{ ...initialValues }}
      render={({ handleSubmit }) => (
        <>
          <Typography align="center" variant="h5" component="div" fontWeight={600} gutterBottom>
            Your availability
          </Typography>
          <form
            onSubmit={handleSubmit}
            onClick={(e: React.ChangeEvent<any>) => {
              console.log(e);
            }}
          >
            <label>
              <Field name="schedule" component="select" style={{ height: '30px' }}>
                {schedules.map((schedule, i) => {
                  return (
                    <option key={schedule.name} value={schedule.name}>
                      {schedule.name}
                    </option>
                  );
                })}
              </Field>
            </label>
            <button
              type="reset"
              style={{ marginLeft: '5px', height: '30px', color: 'white', backgroundColor: '#f14140' }}
            >
              + new schedule
            </button>

            <label>
              <Typography align="left" fontWeight={800} sx={{ marginY: 3 }} gutterBottom>
                Set your weekly hours
              </Typography>
            </label>
            <label htmlFor="available">
              <AvailabilityTable />
            </label>
          </form>
        </>
      )}
    ></Formik>
  );
}

export default DropDownItem;
