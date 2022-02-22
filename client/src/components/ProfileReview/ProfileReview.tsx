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
      <Grid item md={2} xs={12} sx={{ paddingTop: '10px' }}>
        <Avatar sx={{ bgcolor: '#ff5722', width: 50, height: 50 }}>{initialsFromName(review.userName)}</Avatar>
      </Grid>
      <Grid item md={10} xs={12} sx={{ marginLeft: '0px' }}>
        <Grid item md={12} xs={12}>
          <Typography gutterBottom variant="subtitle2" component="div">
            {review.userName}
          </Typography>
        </Grid>
        <Grid container direction="row" justifyContent="flex-start" alignItems="center">
          <Grid item md={2} xs={12} sx={{ marginRight: '10px' }}>
            <ProfileRating label={review.rating.toString()} />
          </Grid>
          <Grid item xs>
            {review.created.toLocaleDateString('en-us', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </Grid>
        </Grid>
        <Grid xs={12} item sx={{ marginTop: '15px' }}>
          <Typography variant="body2" gutterBottom>
            {review.review}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfileReview;
