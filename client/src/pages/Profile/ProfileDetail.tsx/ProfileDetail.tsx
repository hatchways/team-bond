import { Avatar, Card, Container, Divider, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import PageContainer from '../../../components/PageContainer/PageContainer';
import { demoProfiles, demoReviews, IDemoProfile, IDemoReview } from '../temp/demo_data';
import ProfileRating from '../../../components/ProfileRating/ProfileRating';
import ProfileReview from '../../../components/ProfileReview/ProfileReview';
import BookingForm from '../../../components/BookingForm/BookingForm';
import { useAuth } from '../../../context/useAuthContext';
import { User } from '../../../interface/User';

type ProfileDetailParams = {
  id: string;
};

const ProfileDetail = (): JSX.Element => {
  const { id } = useParams<ProfileDetailParams>();
  const { loggedInUser, profile } = useAuth();
  const [demoProfile, setDemoProfile] = useState<IDemoProfile>(demoProfiles[0]); // static until backend inplemented
  const [_demoReviews, setDemoReviews] = useState<IDemoReview[]>(demoReviews); // static until backend inplemented

  return (
    <PageContainer>
      <Container maxWidth="xl">
        <Grid container spacing={3} direction="row" justifyContent="space-between" alignItems="flex-start">
          <Grid item md={7} xs={12}>
            <Card
              sx={{
                p: 4,
                height: 'auto',
                overflowY: 'auto',
                minHeight: '50vh',
                marginBottom: '20px',
              }}
              elevation={1}
            >
              <Grid container spacing={2}>
                <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                  <Grid item xs={2}>
                    <Avatar alt="Example Alt" src="/favicon.ico" sx={{ width: 50, height: 50 }} />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography gutterBottom variant="subtitle1">
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
                  <Typography>{demoProfile.description}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Divider variant="middle" sx={{ marginTop: '20px', marginBottom: '20px' }}>
                    Reviews
                  </Divider>
                </Grid>
                <Grid item xs={12} container>
                  <Grid item xs container direction="column" spacing={2}>
                    {_demoReviews.map((item: IDemoReview) => (
                      <ProfileReview key={item.id} review={{ ...item }} />
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item md={5} xs={12}>
            {profile && <BookingForm loggedInUser={loggedInUser as User} profile={profile} sitterId={demoProfile.id} />}
          </Grid>
        </Grid>
      </Container>
    </PageContainer>
  );
};

export default ProfileDetail;
