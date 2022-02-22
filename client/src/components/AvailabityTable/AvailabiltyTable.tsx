import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';
import { Formik, Field } from 'formik';

const AvailabilityTable = () => {
  const [checked, setChecked] = useState(false);

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday,', 'Friday', 'Saturday'];
  const options: { value: string; label: string }[] = [];
  for (let i = 0; i < 25; i++) {
    i < 10
      ? options.push({ value: `0${i}:00`, label: `0${i}:00` })
      : options.push({ value: `${i}:00`, label: `${i}:00` });
  }

  const rows = days.map((day, i) => {
    const row = {
      checkbox: (
        <label key={i}>
          <Field
            onClick={(values: any) => {
              setChecked(!checked);
            }}
            type="checkbox"
            name={day}
          />
        </label>
      ),
      day: day,
      from: (
        <Field disabled={checked ? '' : 'Disabled'} name="from" component="select">
          {options.map((option, i) => {
            return (
              <option key={i} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </Field>
      ),
      to: (
        <Field disabled={checked ? '' : 'Disabled'} name="to" component="select">
          {options.map((option, i) => {
            return (
              <option key={i} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </Field>
      ),
    };
    return row;
  });
  return (
    <TableContainer sx={{ minWidth: 250, maxWidth: 550 }}>
      <Table sx={{ minWidth: 250, maxWidth: 550 }} aria-label="simple table">
        <TableBody style={{ border: '1px solid grey' }}>
          {rows.map((row, i) => (
            <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align="center">{row.checkbox}</TableCell>
              <TableCell align="right">{row.day}</TableCell>
              <TableCell align="right"> from {row.from}</TableCell>
              <TableCell align="right">to {row.to}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AvailabilityTable;
