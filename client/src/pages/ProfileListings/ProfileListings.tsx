import { Box, Grid } from '@mui/material';
import { profileData } from './data';
import { useState } from 'react';
import { SitterProfileForList } from '../../interface/SitterProfileForList';
import ProfileSearch from './ProfileSearch/ProfileSearch';
import ProfileListingItem from '../../components/ProfileListingItem/ProfileListingItem';
import getFilteredProfile from '../../helpers/APICalls/getProfiles';

const ProfileListings = (): JSX.Element => {
  const [profiles, setProfiles] = useState<SitterProfileForList[]>(profileData);

  /**
   * function that the child component will receive and we should expect
   * a filer object
   * @param param0 filters
   */
  const handleChildOnFilterChange = ({ date, city }: { date: Date; city: string }) => {
    console.log('parent received child date', date);
    console.log('parent received child city', city);
    getFilteredProfile();
  };

  const RenderProfiles = profiles.map((profile: SitterProfileForList) => {
    return <ProfileListingItem key={profile._id} {...profile} />;
  });

  return (
    <Box>
      <ProfileSearch onChildFilterChange={handleChildOnFilterChange} />
      <Grid container spacing={2} alignItems="center" marginTop={10} justifyContent="space-even">
        {RenderProfiles}
      </Grid>
    </Box>
  );
};

export default ProfileListings;
