const notificationContent = new Map();

const bookingRequested = {
  title: 'Booking requested',
  description: 'booking request generated',
  read: false,
  date: new Date(),
};

const bookingAccepted = {
  title: 'Booking accepted',
  description: 'The sitter has accepted your booking request',
  read: false,
  date: new Date(),
};

const bookingDeclined = {
  title: 'Booking declined',
  description: 'The sitter has declined your booking request',
  read: false,
  date: new Date(),
};
const bookingPayed = {
  title: 'Booking payed',
  description: '',
  read: false,
  date: new Date(),
};

notificationContent.set([[accepted, bookingAccepted], [declined, bookingDeclined], [requested, bookingRequested], [payed, bookingPayed]]);

export default notificationContent;