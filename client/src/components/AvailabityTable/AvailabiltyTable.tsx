import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import React, { useState } from 'react';
import { Field } from 'formik';

const AvailabilityTable = ({ ...props }) => {
  const { initialValues, handleSubmit, currentSchedule } = props;
  const options: { value: string; label: string }[] = [];
  for (let i = 0; i < 25; i++) {
    i < 10
      ? options.push({ value: `0${i}:00`, label: `0${i}:00` })
      : options.push({ value: `${i}:00`, label: `${i}:00` });
  }

  const [checked, setChecked] = useState<boolean>(false);
  const [day, setDay] = useState<string>('');
  const [rowState, setRowState] = useState<{ [key: string]: string }>({
    sunday: 'Disabled',
    monday: 'Disabled',
    tuesday: 'Disabled',
    wednesday: 'Disabled',
    thursday: 'Disabled',
    friday: 'Disabled',
    saturday: 'Disabled',
  });
  return (
    <TableContainer sx={{ minWidth: 250, maxWidth: 550, marginX: 5 }}>
      <Table sx={{ minWidth: 250, maxWidth: 550 }} aria-label="simple table">
        <TableBody
          onClick={(e: React.ChangeEvent<any>) => {
            setChecked(e.target.checked);
            setDay(e.target.name);
            const name = e.target.name;
            if (e.target.checked) {
              setRowState({ ...rowState, [name]: '' });
              handleSubmit();
            }
            if (!e.target.checked) {
              setRowState({ ...rowState, [name]: 'Disabled' });
            }
          }}
          style={{ border: '1px solid grey' }}
        >
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align="center">
              <label>
                <Field type="checkbox" name="sunday" />
              </label>
            </TableCell>
            <TableCell align="right">Sunday</TableCell>
            <TableCell align="right">
              from
              <Field disabled={rowState.sunday} name="sun-from" component="select">
                {options.map((option) => {
                  return (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  );
                })}
              </Field>
            </TableCell>
            <TableCell align="right">
              to{' '}
              <Field disabled={rowState.sunday} name="sun-to" component="select">
                {options.map((option) => {
                  return (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  );
                })}
              </Field>
            </TableCell>
          </TableRow>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align="center">
              <label>
                <Field type="checkbox" name="monday" />
              </label>
            </TableCell>
            <TableCell align="right">Monday</TableCell>
            <TableCell align="right">
              from{' '}
              <Field disabled={rowState.monday} name="mon-from" component="select">
                {options.map((option) => {
                  return (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  );
                })}
              </Field>
            </TableCell>
            <TableCell align="right">
              to{' '}
              <Field disabled={rowState.monday} name="mon-to" component="select">
                {options.map((option) => {
                  return (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  );
                })}
              </Field>
            </TableCell>
          </TableRow>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align="center">
              <label>
                <Field type="checkbox" name="tuesday" />
              </label>
            </TableCell>
            <TableCell align="right">Tuesday</TableCell>
            <TableCell align="right">
              from{' '}
              <Field disabled={rowState.tuesday} name="tue-from" component="select">
                {options.map((option) => {
                  return (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  );
                })}
              </Field>
            </TableCell>
            <TableCell align="right">
              to{' '}
              <Field disabled={rowState.tuesday} name="tue-to" component="select">
                {options.map((option) => {
                  return (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  );
                })}
              </Field>
            </TableCell>
          </TableRow>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align="center">
              <label>
                <Field type="checkbox" name="wednesday" />
              </label>
            </TableCell>
            <TableCell align="right">Wednesday</TableCell>
            <TableCell align="right">
              from{' '}
              <Field disabled={rowState.wednesday} name="wed-from" component="select">
                {options.map((option) => {
                  return (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  );
                })}
              </Field>
            </TableCell>
            <TableCell align="right">
              to{' '}
              <Field disabled={rowState.wednesday} name="wed-to" component="select">
                {options.map((option) => {
                  return (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  );
                })}
              </Field>
            </TableCell>
          </TableRow>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align="center">
              <label>
                <Field type="checkbox" name="thursday" />
              </label>
            </TableCell>
            <TableCell align="right">Thursday</TableCell>
            <TableCell align="right">
              from{' '}
              <Field disabled={rowState.thursday} name="thurs-from" component="select">
                {options.map((option) => {
                  return (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  );
                })}
              </Field>
            </TableCell>
            <TableCell align="right">
              to{' '}
              <Field disabled={rowState.thursday} name="thurs-to" component="select">
                {options.map((option) => {
                  return (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  );
                })}
              </Field>
            </TableCell>
          </TableRow>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align="center">
              <label>
                <Field type="checkbox" name="friday" />
              </label>
            </TableCell>
            <TableCell align="right">Friday</TableCell>
            <TableCell align="right">
              from{' '}
              <Field disabled={rowState.friday} name="fri-from" component="select">
                {options.map((option) => {
                  return (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  );
                })}
              </Field>
            </TableCell>
            <TableCell align="right">
              to{' '}
              <Field disabled={rowState.friday} name="fri-to" component="select">
                {options.map((option) => {
                  return (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  );
                })}
              </Field>
            </TableCell>
          </TableRow>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align="center">
              <label>
                <Field type="checkbox" name="saturday" />
              </label>
            </TableCell>
            <TableCell align="right">Saturday</TableCell>
            <TableCell align="right">
              from{' '}
              <Field disabled={rowState.saturday} name="sat-from" component="select">
                {options.map((option) => {
                  return (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  );
                })}
              </Field>
            </TableCell>
            <TableCell align="right">
              to{' '}
              <Field disabled={rowState.saturday} name="sat-to" component="select">
                {options.map((option) => {
                  return (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  );
                })}
              </Field>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AvailabilityTable;
