import { Avatar, Box, Card, CardActionArea, Divider, Grid, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import toCurrency from '../../helpers/Transform/currency-transform';
import useStyles from './useStyles';

interface Props {
  name: string;
  blurb: string;
  description: string;
  city: string;
  rate: number;
}

/**
 * Dumb component displays each list item
 */
const ProfileListingItem = ({ name, blurb, description, city, rate }: Props) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} key={name} marginBottom={5}>
      <Card raised={true} className={classes.profileCard}>
        <CardActionArea sx={{ paddingRight: '10px', paddingLeft: '10px' }}>
          <Box className={classes.cardHeader}>
            <Avatar src="" className={classes.avatar} />
            <Typography variant="subtitle2">{`${name}`}</Typography>
            <Typography variant="body2">{blurb}</Typography>
          </Box>
          <Box sx={{ marginBottom: '20px' }}>
            <Typography variant="body1" className={classes.boldFont}>
              {description}
            </Typography>
          </Box>
          <Divider />
          <Box display="flex" justifyContent="space-between" alignItems="center" className={classes.cardFooter}>
            <Typography variant="body1" color="secondary" className={classes.location}>
              <LocationOnIcon color="primary"></LocationOnIcon>
              {city}
            </Typography>
            <Typography variant="body1" className={classes.boldFont} style={{ fontWeight: 600 }}>
              {toCurrency(rate)}/hr
            </Typography>
          </Box>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default ProfileListingItem;
