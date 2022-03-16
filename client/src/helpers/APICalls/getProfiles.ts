import { Availability } from '../../interface/Availability';
import { FetchOptions } from '../../interface/FetchOptions';
import { ProfileDetails } from '../../interface/ProfileDetails';

const fetchOptions: FetchOptions = {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
  credentials: 'include',
};

const getFilteredProfile = async (): Promise<Availability[]> => {
  return await fetch(`availability?tuesday[from]=540&tuesday[to]=800`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default getFilteredProfile;
