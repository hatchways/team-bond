import { Formik, Field, Form, useField } from 'formik';
import { Select, Checkbox, Typography, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material/';

import React from 'react';

const DropDownItem: React.FC = () => {
  const schedulesType = [{ name: 'work week' }, { name: 'holiday week' }];
  const options: { value: string; label: string }[] = [];
  for (let i = 0; i < 25; i++) {
    i < 10
      ? options.push({ value: `0${i}:00`, label: `0${i}:00` })
      : options.push({ value: `${i}:00`, label: `${i}:00` });
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
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ initialValues, values, isSubmitting, resetForm, setFieldValue }) => {
          return (
            <>
              <Form
                onClick={() => {
                  values.scheduleType
                    ? setFieldValue('schedules', { [values.scheduleType]: { days: [(values as any).days] } })
                    : null;
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
                            name="sun-from"
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
                            name="sun-to"
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
                            name="mon-from"
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
                            name="mon-to"
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
                            name="tue-from"
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
                            name="tue-to"
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
                            name="wed-from"
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
                            name="wed-to"
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
                            name="thur-from"
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
                            name="thur-to"
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
                            name="fri-from"
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
                            name="fri-to"
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
                            name="sat-from"
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
                            name="sat-to"
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

// import { Formik, Field } from 'formik';
// import Typography from '@mui/material/Typography';
// import { useState } from 'react';
// import AvailabilityTable from '../../../components/AvailabityTable/AvailabiltyTable';

// const initialValues: any = {
//   schedules: [],
//   days: [],
//   from: '',
//   to: '',
// };
// const days: string[] = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
// const schedules = [{ name: 'work week' }, { name: 'holiday week' }];
// function DropDownItem(): JSX.Element {
//   const [currentSchedule, setCurrentSchedule] = useState<{ [key: string]: { [key: string]: any } }>({});

//   return (
//     <Formik
//       onSubmit={(values) => {
//         const keys = Object.keys(values);
//         if (keys.includes('scheduleType')) {
//           const schedule: string = (values as any).scheduleType;
//           setCurrentSchedule({ ...currentSchedule, [schedule]: {} });
//           for (const key of keys) {
//             console.log(key);
//             const update = { ...currentSchedule[schedule], [key]: {} };
//             // days.includes(key) ? setCurrentSchedule({ ...currentSchedule.[schedule], ...update }) : null;
//           }
//         }

//         // values.from >= values.to ? alert('start time must be earlier then end time') : alert('availability set');
//       }}
//       initialValues={{ ...initialValues }}
//       render={({ values, handleSubmit }) => (
//         <>
//           {console.log(currentSchedule)}
//           <Typography align="center" variant="h5" component="div" fontWeight={600} gutterBottom>
//             Your availability
//           </Typography>
//           <form onSubmit={handleSubmit}>
//             <label>
//               <Field
//                 onBlur={() => handleSubmit()}
//                 name="scheduleType"
//                 component="select"
//                 style={{ height: '30px' }}
//                 defaultValue={{ label: 'Select Dept', value: 0 }}
//               >
//                 <option value="" label="Select a schedule"></option>
//                 {schedules.map((schedule) => {
//                   return (
//                     <option key={schedule.name} value={schedule.name}>
//                       {schedule.name}
//                     </option>
//                   );
//                 })}
//               </Field>
//             </label>
//             <button
//               type="reset"
//               style={{ marginLeft: '5px', height: '30px', color: 'white', backgroundColor: '#f14140', border: 'none' }}
//             >
//               + new schedule
//             </button>

//             <label>
//               <Typography align="left" fontWeight={800} sx={{ marginY: 3 }} gutterBottom>
//                 Set your weekly hours
//               </Typography>
//             </label>
//             <label
//               // onBlur={(values) => {
//               //   console.log((values.target as any).value);
//               // }}
//               htmlFor="available"
//               style={{ justifyItems: 'center' }}
//             >
//               <AvailabilityTable
//                 handleSubmit={handleSubmit}
//                 initialValues={initialValues}
//                 currentSchedule={currentSchedule}
//               />
//               ;
//             </label>
//           </form>
//         </>
//       )}
//     ></Formik>
//   );
// }

export default DropDownItem;

// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableRow from '@mui/material/TableRow';
// import React, { useState } from 'react';
// import { Field } from 'formik';

// const AvailabilityTable = ({ ...props }: any, setSubmitting: any, isSubmitting: any) => {
//   const { initialValues, handleSubmit, currentSchedule } = props;
//   const options: { value: string; label: string }[] = [];
//   for (let i = 0; i < 25; i++) {
//     i < 10
//       ? options.push({ value: `0${i}:00`, label: `0${i}:00` })
//       : options.push({ value: `${i}:00`, label: `${i}:00` });
//   }

//   const [checked, setChecked] = useState<boolean>(false);
//   const [day, setDay] = useState<string>('');
//   const [rowState, setRowState] = useState<{ [key: string]: string }>({
//     sunday: 'Disabled',
//     monday: 'Disabled',
//     tuesday: 'Disabled',
//     wednesday: 'Disabled',
//     thursday: 'Disabled',
//     friday: 'Disabled',
//     saturday: 'Disabled',
//   });
//   return (
//     <TableContainer sx={{ minWidth: 250, maxWidth: 550, marginX: 5 }}>
//       <Table sx={{ minWidth: 250, maxWidth: 550 }} aria-label="simple table">
//         <TableBody
//           onClick={(e: React.ChangeEvent<any>) => {
//             setChecked(e.target.checked);
//             setDay(e.target.name);
//             const name = e.target.name;
//             if (e.target.checked) {
//               setRowState({ ...rowState, [name]: '' });
//             }
//             if (!e.target.checked) {
//               setRowState({ ...rowState, [name]: 'Disabled' });
//             }
//             handleSubmit();
//           }}
//           style={{ border: '1px solid grey' }}
//         >
//           <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
//             <TableCell align="center">
//               <label>
//                 <Field type="checkbox" name="sunday" />
//               </label>
//             </TableCell>
//             <TableCell align="right">Sunday</TableCell>
//             <TableCell align="right">
//               from
//               <Field disabled={rowState.sunday} name="sun-from" component="select">
//                 {options.map((option) => {
//                   return (
//                     <option key={option.value} value={option.value}>
//                       {option.label}
//                     </option>
//                   );
//                 })}
//               </Field>
//             </TableCell>
//             <TableCell align="right">
//               to{' '}
//               <Field disabled={rowState.sunday} name="sun-to" component="select">
//                 {options.map((option) => {
//                   return (
//                     <option key={option.value} value={option.value}>
//                       {option.label}
//                     </option>
//                   );
//                 })}
//               </Field>
//             </TableCell>
//           </TableRow>
//           <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
//             <TableCell align="center">
//               <label>
//                 <Field type="checkbox" name="monday" />
//               </label>
//             </TableCell>
//             <TableCell align="right">Monday</TableCell>
//             <TableCell align="right">
//               from{' '}
//               <Field disabled={rowState.monday} name="mon-from" component="select">
//                 {options.map((option) => {
//                   return (
//                     <option key={option.value} value={option.value}>
//                       {option.label}
//                     </option>
//                   );
//                 })}
//               </Field>
//             </TableCell>
//             <TableCell align="right">
//               to{' '}
//               <Field disabled={rowState.monday} name="mon-to" component="select">
//                 {options.map((option) => {
//                   return (
//                     <option key={option.value} value={option.value}>
//                       {option.label}
//                     </option>
//                   );
//                 })}
//               </Field>
//             </TableCell>
//           </TableRow>
//           <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
//             <TableCell align="center">
//               <label>
//                 <Field type="checkbox" name="tuesday" />
//               </label>
//             </TableCell>
//             <TableCell align="right">Tuesday</TableCell>
//             <TableCell align="right">
//               from{' '}
//               <Field disabled={rowState.tuesday} name="tue-from" component="select">
//                 {options.map((option) => {
//                   return (
//                     <option key={option.value} value={option.value}>
//                       {option.label}
//                     </option>
//                   );
//                 })}
//               </Field>
//             </TableCell>
//             <TableCell align="right">
//               to{' '}
//               <Field disabled={rowState.tuesday} name="tue-to" component="select">
//                 {options.map((option) => {
//                   return (
//                     <option key={option.value} value={option.value}>
//                       {option.label}
//                     </option>
//                   );
//                 })}
//               </Field>
//             </TableCell>
//           </TableRow>
//           <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
//             <TableCell align="center">
//               <label>
//                 <Field type="checkbox" name="wednesday" />
//               </label>
//             </TableCell>
//             <TableCell align="right">Wednesday</TableCell>
//             <TableCell align="right">
//               from{' '}
//               <Field disabled={rowState.wednesday} name="wed-from" component="select">
//                 {options.map((option) => {
//                   return (
//                     <option key={option.value} value={option.value}>
//                       {option.label}
//                     </option>
//                   );
//                 })}
//               </Field>
//             </TableCell>
//             <TableCell align="right">
//               to{' '}
//               <Field disabled={rowState.wednesday} name="wed-to" component="select">
//                 {options.map((option) => {
//                   return (
//                     <option key={option.value} value={option.value}>
//                       {option.label}
//                     </option>
//                   );
//                 })}
//               </Field>
//             </TableCell>
//           </TableRow>
//           <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
//             <TableCell align="center">
//               <label>
//                 <Field type="checkbox" name="thursday" />
//               </label>
//             </TableCell>
//             <TableCell align="right">Thursday</TableCell>
//             <TableCell align="right">
//               from{' '}
//               <Field disabled={rowState.thursday} name="thurs-from" component="select">
//                 {options.map((option) => {
//                   return (
//                     <option key={option.value} value={option.value}>
//                       {option.label}
//                     </option>
//                   );
//                 })}
//               </Field>
//             </TableCell>
//             <TableCell align="right">
//               to{' '}
//               <Field disabled={rowState.thursday} name="thurs-to" component="select">
//                 {options.map((option) => {
//                   return (
//                     <option key={option.value} value={option.value}>
//                       {option.label}
//                     </option>
//                   );
//                 })}
//               </Field>
//             </TableCell>
//           </TableRow>
//           <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
//             <TableCell align="center">
//               <label>
//                 <Field type="checkbox" name="friday" />
//               </label>
//             </TableCell>
//             <TableCell align="right">Friday</TableCell>
//             <TableCell align="right">
//               from{' '}
//               <Field disabled={rowState.friday} name="fri-from" component="select">
//                 {options.map((option) => {
//                   return (
//                     <option key={option.value} value={option.value}>
//                       {option.label}
//                     </option>
//                   );
//                 })}
//               </Field>
//             </TableCell>
//             <TableCell align="right">
//               to{' '}
//               <Field disabled={rowState.friday} name="fri-to" component="select">
//                 {options.map((option) => {
//                   return (
//                     <option key={option.value} value={option.value}>
//                       {option.label}
//                     </option>
//                   );
//                 })}
//               </Field>
//             </TableCell>
//           </TableRow>
//           <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
//             <TableCell align="center">
//               <label>
//                 <Field type="checkbox" name="saturday" />
//               </label>
//             </TableCell>
//             <TableCell align="right">Saturday</TableCell>
//             <TableCell align="right">
//               from{' '}
//               <Field disabled={rowState.saturday} name="sat-from" component="select">
//                 {options.map((option) => {
//                   return (
//                     <option key={option.value} value={option.value}>
//                       {option.label}
//                     </option>
//                   );
//                 })}
//               </Field>
//             </TableCell>
//             <TableCell align="right">
//               to{' '}
//               <Field disabled={rowState.saturday} name="sat-to" component="select">
//                 {options.map((option) => {
//                   return (
//                     <option key={option.value} value={option.value}>
//                       {option.label}
//                     </option>
//                   );
//                 })}
//               </Field>
//             </TableCell>
//           </TableRow>
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };
