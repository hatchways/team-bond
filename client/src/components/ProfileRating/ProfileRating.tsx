import { Chip, Stack } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

interface Props {
  label: string;
}

const ProfileRating = ({ label }: Props) => {
  return (
    <Stack direction="row" spacing={1}>
      <Chip icon={<StarIcon />} label={label} variant="outlined" />
    </Stack>
  );
};

export default ProfileRating;
