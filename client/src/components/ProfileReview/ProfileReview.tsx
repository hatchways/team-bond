import { Avatar, Grid, Typography } from '@mui/material';
import initialsFromName from '../../helpers/Text/textHelper';
import { IDemoReview } from '../../pages/Profile/temp/demo_data';
import ProfileRating from '../ProfileRating/ProfileRating';

interface Props {
  review: IDemoReview;
}

const ProfileReview = ({ review }: Props) => {
  return (
    <Grid
      item
      xs
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{ marginBottom: '10px' }}
    >
      <Grid item xs={2} sx={{ paddingTop: '10px' }}>
        <Avatar sx={{ bgcolor: '#ff5722', width: 50, height: 50 }}>{initialsFromName(review.userName)}</Avatar>
      </Grid>
      <Grid item xs sx={{ marginLeft: '0px' }}>
        <Grid item xs>
          <Typography gutterBottom variant="subtitle1" component="div">
            {review.userName}
          </Typography>
        </Grid>
        <Grid container direction="row" justifyContent="flex-start" alignItems="center">
          <Grid item xs={2} sx={{ marginRight: '10px' }}>
            <ProfileRating label={review.rating.toString()} />
          </Grid>
          <Grid item xs>
            <Typography gutterBottom variant="subtitle1" component="div">
              {review.created.toLocaleDateString('en-us', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs sx={{ marginTop: '15px' }}>
          <Typography variant="body2" gutterBottom>
            {review.review}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfileReview;
