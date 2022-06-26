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
  dateInput: {
    borderRadius: 8,
    border: '1px solid #dbdbdb',
    fontSize: 16,
    width: '100%',
    padding: '15px',
  },
}));

export default useStyles;
