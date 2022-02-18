import { Avatar, Card, Divider, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageContainer from '../../../components/PageContainer/PageContainer';
import { demoProfiles, demoReviews, IDemoProfile, IDemoReview } from '../temp/demo_data';
import ProfileRating from '../../../components/ProfileRating/ProfileRating';
import ProfileReview from '../../../components/ProfileReview/ProfileReview';

type ProfileDetailParams = {
  id: string;
};

const ProfileDetail = (): JSX.Element => {
  const { id } = useParams<ProfileDetailParams>();
  const [demoProfile, setDemoProfile] = useState<IDemoProfile>(demoProfiles[0]); // static until backend inplemented
  const [_demoReviews, setDemoReviews] = useState<IDemoReview[]>(demoReviews); // static until backend inplemented

  useEffect(() => {
    // TODO call when API exists
    // getProfile(id).then((res) => {
    //   setDemoProfile(res as ProfileDetails);
    // });
  }, [id]);

  return (
    <PageContainer>
      <Card
        sx={{
          p: 4,
          margin: 'auto',
          maxWidth: 600,
          maxHeight: '85vh',
          height: 'auto',
          overflowY: 'scroll',
          minHeight: '50vh',
          marginBottom: '20px',
          flexGrow: 1,
          backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
        }}
      >
        <Grid container spacing={2}>
          <Grid container direction="row" justifyContent="flex-start" alignItems="center" item xs={12}>
            <Grid item xs={2}>
              <Avatar alt="Example Alt" src="/favicon.ico" sx={{ width: 70, height: 70 }} />
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom variant="subtitle1" component="div">
                {demoProfile.name}
              </Typography>
            </Grid>
            <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <ProfileRating label="4.5" />
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ marginTop: '30px' }}>
            <Divider variant="middle" sx={{ marginTop: '10px', marginBottom: '10px' }}>
              Description
            </Divider>
            <Typography gutterBottom variant="subtitle1" component="div">
              {demoProfile.description}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider variant="middle" sx={{ marginTop: '20px', marginBottom: '20px' }}>
              Reviews
            </Divider>
          </Grid>
          <Grid item xs={12} container>
            <Grid item xs container direction="column" spacing={2}>
              {_demoReviews.map((item: IDemoReview, index: number) => (
                <ProfileReview key={index} review={{ ...item }} />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </PageContainer>
  );
};

export default ProfileDetail;
