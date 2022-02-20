import { Formik, Field } from 'formik';
import React from 'react';

const initialValues = {
  startTime: '',
  endTime: '',
  checked: [],
};
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday,', 'Friday', 'Saturday'];
const options: { value: string; label: string }[] = [];
for (let i = 0; i < 25; i++) {
  i < 10
    ? options.push({ value: `0${i}:00`, label: `0${i}:00` })
    : options.push({ value: `${i}:00`, label: `${i}:00` });
}

function DropDownItem(): JSX.Element {
  return (
    <Formik
      onSubmit={(values) =>
        values.startTime >= values.endTime
          ? alert('start time must be earlier then end time')
          : alert('availability set')
      }
      initialValues={{ ...initialValues }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          {days.map((day, i) => {
            return (
              <>
                <label key={i}>
                  <Field type="checkbox" name="days" />
                  {day}
                </label>
                <label htmlFor="available">
                  <span>from</span>
                  <Field name="startTime" component="select">
                    {options.map((option, i) => {
                      return (
                        <option key={i} value={option.value}>
                          {option.label}
                        </option>
                      );
                    })}
                  </Field>
                  <span>to</span>
                  <Field name="endTime" component="select">
                    {options.map((option, i) => {
                      return (
                        <>
                          <option key={i} value={option.value}>
                            {option.label}
                          </option>
                        </>
                      );
                    })}
                  </Field>
                </label>
                <button type="submit">Submit</button>
              </>
            );
          })}
        </form>
      )}
    ></Formik>
  );
}

export default DropDownItem;
