import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  profileCard: {
    maxWidth: 320,
    textAlign: 'center',
    margin: 'auto',
  },
  cardHeader: {
    paddingTop: '22px',
    paddingBottom: '12px',
  },
  boldFont: {
    fontWeight: 600,
  },
  description: {
    padding: '16px 40px 32px 40px',
  },
  cardFooter: {
    padding: '16px',
  },
  rate: {
    fontSize: '16px',
  },
  location: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 500,
    gap: '4px',
  },
  avatar: {
    width: '8rem',
    height: '8rem',
    margin: '0.8rem auto',
  },
  gridContainer: {
    marginTop: '2rem',
  },
}));

export default useStyles;
