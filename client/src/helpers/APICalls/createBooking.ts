import { IBooking } from '../../interface/Booking';
import { FetchOptions } from '../../interface/FetchOptions';

const createBooking = async (value: IBooking): Promise<any> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ ...value }),
  };
  return await fetch(`/booking/book/${value.userId}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default createBooking;
