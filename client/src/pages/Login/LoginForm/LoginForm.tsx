import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import useStyles from './useStyles';
import { useAuth } from '../../../context/useAuthContext';
import { useSnackBar } from '../../../context/useSnackbarContext';
import FormInput from '../../../components/FormInput/FormInput';
import demoLogin from '../../../helpers/APICalls/demoLogin';

interface Props {
  handleSubmit: (
    {
      email,
      password,
    }: {
      email: string;
      password: string;
    },
    {
      setStatus,
      setSubmitting,
    }: FormikHelpers<{
      email: string;
      password: string;
    }>,
  ) => void;
}

export default function Login({ handleSubmit }: Props): JSX.Element {
  const classes = useStyles();

  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();

  const handleDemoLogin = () => {
    demoLogin().then((data) => {
      if (data.error) {
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        updateLoginContext(data.success);
      } else {
        console.error({ data });

        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    });
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().required('Email is required').email('Email is not valid'),
        password: Yup.string()
          .required('Password is required')
          .max(100, 'Password is too long')
          .min(6, 'Password too short'),
      })}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <FormInput
            id="email"
            label="Email Address"
            fullWidth
            //margin="normal"
            name="email"
            placeholder="Your email"
            autoComplete="email"
            autoFocus
            helpertext={touched.email ? errors.email : ''}
            error={touched.email && Boolean(errors.email)}
            value={values.email}
            onChange={handleChange}
          />

          <FormInput
            id="password"
            label="Password"
            fullWidth
            //margin="normal"
            type="password"
            name="password"
            placeholder="Your password"
            autoComplete="current-password"
            helpertext={touched.password ? errors.password : ''}
            error={touched.password && Boolean(errors.password)}
            value={values.password}
            onChange={handleChange}
          />

          <Box textAlign="center" marginTop={5} display="flex" justifyContent="space-between">
            <Button
              type="submit"
              size="large"
              variant="contained"
              color="primary"
              className={classes.submit}
              disableElevation
            >
              {isSubmitting ? <CircularProgress style={{ color: 'white' }} /> : 'Login'}
            </Button>
            <Button
              type="submit"
              size="large"
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleDemoLogin}
              disableElevation
            >
              {isSubmitting ? <CircularProgress style={{ color: 'white' }} /> : 'Demo Login'}
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
}
