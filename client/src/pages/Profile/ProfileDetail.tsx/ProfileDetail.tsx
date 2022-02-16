import { Avatar, Box, Grid, Paper, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageContainer from '../../../components/PageContainer/PageContainer';
import getProfile from '../../../helpers/APICalls/getProfile';
import { ProfileDetails } from '../../../interface/ProfileDetails';
import { demoProfiles, IDemoProfile } from '../temp/demo_profiles';
import StarIcon from '@mui/icons-material/Star';

type ProfileDetailParams = {
  id: string;
};

const ProfileDetail = (): JSX.Element => {
  const { id } = useParams<ProfileDetailParams>();
  const [profile, setDemoProfile] = useState<IDemoProfile>(demoProfiles[0]); // static until backend inplemented

  useEffect(() => {
    // TODO call when API exists
    // getProfile(id).then((res) => {
    //   setDemoProfile(res as ProfileDetails);
    // });
  }, [id]);

  return (
    <PageContainer>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={8} md={7} elevation={6} component={Paper} square>
          <Box display="flex" justifyContent="space-between" alignItems="flex-start" flexDirection="column">
            <Box width="100%" maxWidth={450} p={3} alignSelf="center">
              <Grid container>
                <Grid item xs>
                  <Typography component="h1" variant="h5">
                    Welcome back!
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Box width="100%" maxWidth={450} p={3} alignSelf="center">
              <Grid container>
                <Grid item xs>
                  <Avatar alt="Example Alt" src="/favicon.ico" />
                </Grid>
              </Grid>
            </Box>
            <Box width="100%" maxWidth={450} p={3} alignSelf="center">
              <Grid container>
                <Grid item xs>
                  <StarIcon sx={{ color: '#000000' }} />
                </Grid>
              </Grid>
            </Box>
            <Box p={1} alignSelf="center" />
          </Box>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default ProfileDetail;
