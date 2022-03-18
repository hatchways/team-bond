import { Box, Grid } from '@mui/material';
import { useState } from 'react';
import { SitterProfileForList } from '../../interface/SitterProfileForList';
import ProfileSearch from './ProfileSearch/ProfileSearch';
import ProfileListingItem from '../../components/ProfileListingItem/ProfileListingItem';
import getFilteredProfile from '../../helpers/APICalls/getProfiles';

const ProfileListings = (): JSX.Element => {
  const [profiles, setProfiles] = useState<SitterProfileForList[]>([]);

  /**
   * function that the child component will receive and we should expect
   * a filer object { from, to }
   * @param param0 filters
   */
  const handleChildOnFilterChange = ({ from, to }: { from: Date; to: Date }) => {
    getFilteredProfile(from, to).then((res) => setProfiles([...res]));
  };

  const RenderProfiles = profiles.map((profile: SitterProfileForList) => {
    return <ProfileListingItem key={profile._id} {...profile} />;
  });

  return (
    <Box>
      <ProfileSearch onChildFilterChange={handleChildOnFilterChange} />
      <Grid container spacing={2} alignItems="center" marginTop={10} justifyContent="space-even">
        {profiles && RenderProfiles}
      </Grid>
    </Box>
  );
};

export default ProfileListings;
