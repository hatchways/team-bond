import { Avatar, Card, CardActionArea, CardHeader, Divider, Grid, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box } from '@mui/system';
import { profileData } from './data';
import useStyles from './useStyles';
import { Navbar } from '../../components/Navbar/Navbar';
import ProfileSearch from './ProfileSearch/ProfileSearch';

const ProfileListings = (): JSX.Element => {
  const classes = useStyles();
  const allProfiles = profileData.map((profile) => {
    return (
      <Grid item xs={12} sm={6} md={4} key={profile.firstName} marginBottom={5}>
        <Card raised={true} className={classes.profileCard}>
          <CardActionArea>
            <Box className={classes.cardHeader}>
              <Avatar src="" className={classes.avatar} />
              <Typography
                variant="h5"
                className={classes.boldFont}
              >{`${profile.firstName} ${profile.lastName}`}</Typography>
              <Typography variant="subtitle1" color="red" className={classes.boldFont}>
                {profile.title}
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1" className={classes.boldFont}>
                {profile.description}
              </Typography>
            </Box>
            <Divider />
            <Box display="flex" justifyContent="space-between" alignItems="center" className={classes.cardFooter}>
              <Typography variant="body1" color="secondary" className={classes.location}>
                <LocationOnIcon color="primary"></LocationOnIcon>
                {profile.city}
              </Typography>
              <Typography variant="body1" className={classes.boldFont} style={{ fontWeight: 600 }}>
                {profile.rate}/hr
              </Typography>
            </Box>
          </CardActionArea>
        </Card>
      </Grid>
    );
  });
  return (
    <div>
      <Navbar />
      <ProfileSearch />
      <Grid container spacing={2} alignItems="center" marginTop={10} justifyContent="space-even">
        {allProfiles}
      </Grid>
    </div>
  );
};

export default ProfileListings;
