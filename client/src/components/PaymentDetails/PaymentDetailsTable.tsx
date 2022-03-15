import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

interface Props {
  hours: number;
  description: string;
  hourlyRate: number;
  amount: number;
  platformFee: number;
  total: number;
}

const PaymentDetailsTable = ({ hours, description, hourlyRate, amount, platformFee, total }: Props) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: '#DCDCDC' }}>
            <TableCell>HOURS</TableCell>
            <TableCell align="right">DESCRIPTION</TableCell>
            <TableCell align="right">HOURLY RATE</TableCell>
            <TableCell align="right">AMOUNT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{hours}</TableCell>
            <TableCell align="right">{description}</TableCell>
            <TableCell align="right">{hourlyRate.toFixed(2)}</TableCell>
            <TableCell align="right">{amount.toFixed(2)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell rowSpan={2} />
            <TableCell rowSpan={2} />
            <TableCell>Platform Fee</TableCell>
            <TableCell align="right">{platformFee.toFixed(2)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="subtitle2">TOTAL</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="subtitle2">{total.toFixed(2)}</Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PaymentDetailsTable;
