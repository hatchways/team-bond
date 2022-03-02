import { Formik, Field, Form, useField } from 'formik';
import { Select, Checkbox, Typography, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material/';

import React from 'react';

const DropDownItem: React.FC = () => {
  const schedulesType = [{ name: 'work week' }, { name: 'holiday week' }];
  const options: { value: string; label: string }[] = [];
  for (let i = 0; i < 25; i++) {
    i < 10
      ? options.push({ value: `0${i}:00`, label: `0${i}:00` })
      : options.push({ value: `0${i}:00`, label: `${i}:00` });
  }
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
                <Field as={TableContainer} sx={{ minWidth: 250, maxWidth: 550, marginX: 5 }}>
                  <Field as={Table} sx={{ minWidth: 250, maxWidth: 550 }} aria-label="simple table">
                    <Field as={TableBody} style={{ border: '1px solid grey' }}>
                      <Field as={TableRow} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <Field as={TableCell} align="left">
                          <label>
                            <Field label="sunday" name="days" type="checkbox" value="sunday" as={Checkbox} />
                            <span>Sunday</span>
                          </label>
                        </Field>
                        <Field as={TableCell} align="left">
                          <span style={{ textTransform: 'uppercase' }}>from</span>
                          <Field
                            disabled={(values as any).days.includes('sunday') ? '' : 'Disabled'}
                            name="sundayFrom"
                            component="select"
                          >
                            {options.map((option) => {
                              return (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              );
                            })}
                          </Field>
                          <span style={{ textTransform: 'uppercase' }}>to</span>
                          <Field
                            disabled={(values as any).days.includes('sunday') ? '' : 'Disabled'}
                            name="sundayTo"
                            component="select"
                          >
                            {options.map((option) => {
                              return (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              );
                            })}
                          </Field>
                        </Field>
                      </Field>
                      <Field as={TableRow} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <Field as={TableCell} align="left">
                          <label>
                            <Field label="monday" name="days" type="checkbox" value="monday" as={Checkbox} />
                            <span>Monday</span>
                          </label>
                        </Field>
                        <Field as={TableCell} align="left">
                          <span style={{ textTransform: 'uppercase' }}>from</span>
                          <Field
                            disabled={(values as any).days.includes('monday') ? '' : 'Disabled'}
                            name="mondayFrom"
                            component="select"
                          >
                            {options.map((option) => {
                              return (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              );
                            })}
                          </Field>
                          <span style={{ textTransform: 'uppercase' }}>to</span>
                          <Field
                            disabled={(values as any).days.includes('monday') ? '' : 'Disabled'}
                            name="mondayTo"
                            component="select"
                          >
                            {options.map((option) => {
                              return (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              );
                            })}
                          </Field>
                        </Field>
                      </Field>
                      <Field as={TableRow} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <Field as={TableCell} align="left">
                          <label>
                            <Field label="tuesday" name="days" type="checkbox" value="tuesday" as={Checkbox} />
                            <span>Tuesday</span>
                          </label>
                        </Field>
                        <Field as={TableCell} align="left">
                          <span style={{ textTransform: 'uppercase' }}>from</span>
                          <Field
                            disabled={(values as any).days.includes('tuesday') ? '' : 'Disabled'}
                            name="tuesdayFrom"
                            component="select"
                          >
                            {options.map((option) => {
                              return (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              );
                            })}
                          </Field>
                          <span style={{ textTransform: 'uppercase' }}>to</span>
                          <Field
                            disabled={(values as any).days.includes('tuesday') ? '' : 'Disabled'}
                            name="tuesdayTo"
                            component="select"
                          >
                            {options.map((option) => {
                              return (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              );
                            })}
                          </Field>
                        </Field>
                      </Field>
                      <Field as={TableRow} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <Field as={TableCell} align="left">
                          <label>
                            <Field label="wednesday" name="days" type="checkbox" value="wednesday" as={Checkbox} />
                            <span>Wednesday</span>
                          </label>
                        </Field>
                        <Field as={TableCell} align="left">
                          <span style={{ textTransform: 'uppercase' }}>from</span>
                          <Field
                            disabled={(values as any).days.includes('wednesday') ? '' : 'Disabled'}
                            name="wednesdayFrom"
                            component="select"
                          >
                            {options.map((option) => {
                              return (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              );
                            })}
                          </Field>
                          <span style={{ textTransform: 'uppercase' }}>to</span>
                          <Field
                            disabled={(values as any).days.includes('wednesday') ? '' : 'Disabled'}
                            name="wednesdayTo"
                            component="select"
                          >
                            {options.map((option) => {
                              return (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              );
                            })}
                          </Field>
                        </Field>
                      </Field>
                      <Field as={TableRow} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <Field as={TableCell} align="left">
                          <label>
                            <Field label="thursday" name="days" type="checkbox" value="thursday" as={Checkbox} />
                            <span>Thursday</span>
                          </label>
                        </Field>
                        <Field as={TableCell} align="left">
                          <span style={{ textTransform: 'uppercase' }}>from</span>
                          <Field
                            disabled={(values as any).days.includes('thursday') ? '' : 'Disabled'}
                            name="thursdayFrom"
                            component="select"
                          >
                            {options.map((option) => {
                              return (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              );
                            })}
                          </Field>
                          <span style={{ textTransform: 'uppercase' }}>to</span>
                          <Field
                            disabled={(values as any).days.includes('thursday') ? '' : 'Disabled'}
                            name="thursadyTo"
                            component="select"
                          >
                            {options.map((option) => {
                              return (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              );
                            })}
                          </Field>
                        </Field>
                      </Field>
                      <Field as={TableRow} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <Field as={TableCell} align="left">
                          <label>
                            <Field label="friday" name="days" type="checkbox" value="friday" as={Checkbox} />
                            <span>Friday</span>
                          </label>
                        </Field>
                        <Field as={TableCell} align="left">
                          <span style={{ textTransform: 'uppercase' }}>from</span>
                          <Field
                            disabled={(values as any).days.includes('friday') ? '' : 'Disabled'}
                            name="fridayFrom"
                            component="select"
                          >
                            {options.map((option) => {
                              return (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              );
                            })}
                          </Field>
                          <span style={{ textTransform: 'uppercase' }}>to</span>
                          <Field
                            disabled={(values as any).days.includes('friday') ? '' : 'Disabled'}
                            name="fridayTo"
                            component="select"
                          >
                            {options.map((option) => {
                              return (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              );
                            })}
                          </Field>
                        </Field>
                      </Field>
                      <Field as={TableRow} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <Field as={TableCell} align="left">
                          <label>
                            <Field label="saturday" name="days" type="checkbox" value="saturday" as={Checkbox} />
                            <span>Saturday</span>
                          </label>
                        </Field>
                        <Field as={TableCell} align="left">
                          <span style={{ textTransform: 'uppercase' }}>from</span>
                          <Field
                            disabled={(values as any).days.includes('saturday') ? '' : 'Disabled'}
                            name="saturdayFrom"
                            component="select"
                          >
                            {options.map((option) => {
                              return (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              );
                            })}
                          </Field>
                          <span style={{ textTransform: 'uppercase' }}>to</span>
                          <Field
                            disabled={(values as any).days.includes('saturday') ? '' : 'Disabled'}
                            name="saturdayTo"
                            component="select"
                          >
                            {options.map((option) => {
                              return (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              );
                            })}
                          </Field>
                        </Field>
                      </Field>
                    </Field>
                  </Field>
                </Field>
                <pre>{JSON.stringify(values, null, 2)}</pre>
              </Form>
            </>
          );
        }}
      </Formik>
    </div>
  );
};
export default DropDownItem;
