import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  boxContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: '1.25rem',
  },
  searchField: {
    fontWeight: 700,
  },
}));

export default useStyles;
