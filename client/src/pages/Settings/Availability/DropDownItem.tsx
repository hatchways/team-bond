import { Formik, Field } from 'formik';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ro from 'date-fns/esm/locale/ro/index.js';

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
    to: (
      <Field name="from" component="select">
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
  startTime: '',
  endTime: '',
};

function DropDownItem(): JSX.Element {
  console.log('yyyy', rows);
  return (
    <Formik
      onSubmit={(values) => {
        console.log(values);
        values.startTime >= values.endTime
          ? alert('start time must be earlier then end time')
          : alert('availability set');
      }}
      initialValues={{ ...initialValues }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <label htmlFor="available">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 350 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">available</TableCell>
                    <TableCell align="right">Days</TableCell>
                    <TableCell align="right">From</TableCell>
                    <TableCell align="right">To</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, i) => (
                    <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell align="left">{row.checkbox}</TableCell>
                      <TableCell align="right">{row.day}</TableCell>
                      <TableCell align="right">from {row.from}</TableCell>
                      <TableCell align="right">to {row.to}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </label>
        </form>
      )}
    ></Formik>
  );
}

export default DropDownItem;
