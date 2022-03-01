import { Divider, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { useEffect, useState } from 'react';
import { start } from 'repl';
import { IBooking } from '../../../interface/Booking';

interface Props {
  filter: 'CURRENT' | 'PAST_DUE' | 'PAID';
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
    _id: 'asdfasdf',
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
    _id: 'asdfasdf',
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
    _id: 'asdfasdf',
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

const CustomerBookingList = ({ filter }: Props) => {
  const [bookings, setBookings] = useState<IBooking[]>(filterBookings(filter, [...demoBookings]));

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {bookings.map((booking) => (
        <>
          <ListItem key={booking._id} alignItems="flex-start">
            <ListItemButton>
              <ListItemText
                primary={booking.userId} // should be sitter name
                secondary={
                  booking.start?.toLocaleDateString('en-us', componentDateFormat) +
                  ' - ' +
                  booking.end?.toLocaleDateString('en-us', componentDateFormat)
                }
              />
            </ListItemButton>
          </ListItem>
          <Divider />
        </>
      ))}
    </List>
  );
};

export default CustomerBookingList;
