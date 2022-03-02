import { List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { IBooking } from '../../../interface/Booking';

interface Props {
  filter: 'CURRENT' | 'PAST_DUE' | 'PAID';
  onClick?: (bookingId: string) => void;
}

const today = new Date();
const componentDateFormat: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
const demoBookings: IBooking[] = [
  // PAID
  {
    userId: 'asdfasdfasdfasdf',
    sitterId: 'sfgsfdgsfdg',
    start: new Date(2022, 1, 1),
    end: new Date(2022, 1, 2),
    accepted: true,
    declined: false,
    paid: true,
    pending: false,
    _id: 'booking1',
  },
  // CURRENT
  {
    userId: 'asdfasdfasdfasdf',
    sitterId: 'sfgsfdgsfdg',
    start: new Date(today.getFullYear(), today.getMonth() + 3, 1),
    end: new Date(today.getFullYear(), today.getMonth() + 3, 27),
    accepted: true,
    declined: false,
    paid: false,
    pending: false,
    _id: 'booking2',
  },
  // PAST_DUE
  {
    userId: 'asdfasdfasdfasdf',
    sitterId: 'sfgsfdgsfdg',
    start: new Date(2022, 1, 1),
    end: new Date(2022, 1, 2),
    accepted: true,
    declined: false,
    paid: false,
    pending: false,
    _id: 'booking3',
  },
];

const filterBookings = (filter: string, bookings: IBooking[]): IBooking[] => {
  const NOW = new Date();
  let result: IBooking[];
  switch (filter) {
    case 'CURRENT':
      result = bookings.filter((booking) => booking.start! >= NOW && booking.accepted);
      break;
    case 'PAST_DUE':
      result = bookings.filter((booking) => !booking.paid && booking.end! <= NOW);
      break;
    case 'PAID':
      result = bookings.filter((booking) => booking.paid && booking.end! <= NOW);
      break;
    default:
      result = [];
      break;
  }
  return result;
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
const CustomerBookingList = ({ filter, onClick = () => {} }: Props) => {
  const [bookings, setBookings] = useState<IBooking[]>([]);

  useEffect(() => {
    // fetch
    setBookings(filterBookings(filter, [...demoBookings]));
  }, [filter]);

  const handleClick = (bookingId: string) => {
    console.log(bookingId);
    onClick(bookingId);
  };

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {bookings.map((booking) => (
        <ListItem key={booking._id} alignItems="flex-start" divider={true} disablePadding={true}>
          <ListItemButton onClick={() => handleClick(booking._id!)}>
            <ListItemText
              primary={
                // ! TODO should be sitter name when integrting
                <Typography variant="subtitle1" component="div">
                  {booking.userId}
                </Typography>
              }
              secondary={
                booking.start?.toLocaleDateString('en-us', componentDateFormat) +
                ' - ' +
                booking.end?.toLocaleDateString('en-us', componentDateFormat)
              }
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default CustomerBookingList;
