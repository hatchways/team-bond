import { FetchOptions } from '../../interface/FetchOptions';
import { ProfileDetails } from '../../interface/ProfileDetails';

const fetchOptions: FetchOptions = {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
  credentials: 'include',
};

const getProfile = async (id: string): Promise<ProfileDetails> => {
  return await fetch(`profile/${id}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default getProfile;
