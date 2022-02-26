import { Formik, Field } from 'formik';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import AvailabilityTable from '../../../components/AvailabityTable/AvailabiltyTable';

const initialValues: any[] = [];

const schedules = [{ name: 'work week' }, { name: 'holiday week' }];
function DropDownItem(): JSX.Element {
  const [currentSchedule, setCurrentSchedule] = useState<{ [key: string]: { [key: string]: any } }>({});

  return (
    <Formik
      onSubmit={(values) => {
        console.log(values);
        const keys = Object.keys(values);
        console.log(keys);
        if (keys.includes('scheduleType')) {
          setCurrentSchedule({ ...currentSchedule, values });
        }
        // values.from >= values.to ? alert('start time must be earlier then end time') : alert('availability set');
      }}
      initialValues={{ ...initialValues }}
      render={({ handleSubmit }) => (
        <>
          {console.log(currentSchedule)}
          <Typography align="center" variant="h5" component="div" fontWeight={600} gutterBottom>
            Your availability
          </Typography>
          <form onSubmit={handleSubmit}>
            <label>
              <Field
                onBlur={() => handleSubmit()}
                name="scheduleType"
                component="select"
                style={{ height: '30px' }}
                defaultValue={{ label: 'Select Dept', value: 0 }}
              >
                <option value="" label="Select a schedule"></option>
                {schedules.map((schedule) => {
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
              style={{ marginLeft: '5px', height: '30px', color: 'white', backgroundColor: '#f14140', border: 'none' }}
            >
              + new schedule
            </button>

            <label>
              <Typography align="left" fontWeight={800} sx={{ marginY: 3 }} gutterBottom>
                Set your weekly hours
              </Typography>
            </label>
            <label htmlFor="available" style={{ justifyItems: 'center' }}>
              <AvailabilityTable
                handleSubmit={handleSubmit}
                initialValues={initialValues}
                currentSchedule={currentSchedule}
              />
              ;
            </label>
          </form>
        </>
      )}
    ></Formik>
  );
}

export default DropDownItem;
