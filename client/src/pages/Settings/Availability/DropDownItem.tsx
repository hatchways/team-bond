import { Formik, Field } from 'formik';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { useState } from 'react';

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
        <Field type="checkbox" name={day} />
      </label>
    ),
    day: day,
    from: (
      <Field disabled="" name="from" component="select">
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
      <Field name="to" component="select">
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

const initialValues = {
  from: '00:00',
  to: '00:00',
};

function DropDownItem(): JSX.Element {
  const [checked, setChecked] = useState(false);
  return (
    <Formik
      onSubmit={(values) => {
        console.log(values);
        values.from >= values.to ? alert('start time must be earlier then end time') : alert('availability set');
      }}
      initialValues={{ ...initialValues }}
      render={({ handleSubmit }) => (
        <>
          <Typography align="center" variant="h5" component="div" gutterBottom>
            Your availability
          </Typography>
          <form
            onSubmit={handleSubmit}
            onClick={(e: React.ChangeEvent<any>) => {
              console.log('xx', checked);
              console.log(e.target.checked);
              setChecked(e.target.checked);
              console.log('yy', checked);
            }}
          >
            <label htmlFor="available">
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 350 }} aria-label="simple table">
                  <TableBody style={{ border: '1px solid grey' }}>
                    {rows.map((row, i) => (
                      <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell align="left">{row.checkbox}</TableCell>
                        <TableCell align="right">{row.day}</TableCell>
                        <TableCell align="right"> from {row.from}</TableCell>
                        <TableCell align="right">to {row.to}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </label>
          </form>
        </>
      )}
    ></Formik>
  );
}

export default DropDownItem;
