import { FetchOptions } from '../../interface/FetchOptions';
import { SitterProfileForList } from '../../interface/SitterProfileForList';

const fetchOptions: FetchOptions = {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
  credentials: 'include',
};

const getFilteredProfile = async (from: Date, to: Date): Promise<SitterProfileForList[]> => {
  const fromDayOfWeek = from.toLocaleDateString('en-us', { weekday: 'long' }).toLowerCase();
  const toDayOfWeek = to.toLocaleDateString('en-us', { weekday: 'long' }).toLowerCase();

  const fromMinutes = from.getHours() * 60 + from.getMinutes();
  const toMinutes = to.getHours() * 60 + to.getMinutes();

  // looks messy, but it needs to be done to pass a multi-dimensional object/array
  const query = `${fromDayOfWeek}[from]=${fromMinutes.toFixed(0)}&${toDayOfWeek}[to]=${toMinutes.toFixed(0)}`;
  const encodedQuery = encodeURI(query);

  return await fetch(`users?${encodedQuery}`, fetchOptions)
    .then((res) => res.json())
    .then((json) => json.success.data ?? [])
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default getFilteredProfile;
