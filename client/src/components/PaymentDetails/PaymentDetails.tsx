import { Avatar, Card, Chip, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Payment } from '../../interface/Payment';
import { Profile } from '../../interface/Profile';
import PaymentDetailsTable from './PaymentDetailsTable';
import PaymentMethodOptions from './PaymentMethodOptions';

interface Props {
  sitterId: string;
  userId: string;
  filter: string;
}

const demoPayment: Payment = {
  _id: 'paymentId1',
  userId: 'userID1',
  sitterId: 'sitterId1',
  rate: 35,
  hoursOfService: 10,
  totalPayment: 350,
  customerId: 'userID1',
};

const demoSitterProfile: Profile = {
  _id: 'profileID1',
  userId: 'userId1',
  name: 'Peter Parker',
  description: 'dog whisperer',
  address: '1234 woof ave',
  telephone: '123-123-1234',
  birthday: '',
  photo: 'https://www.hatchways.io/static/media/congratulations.80e99a12.gif',
  __v: 1,
};

const PaymentDetails = ({ sitterId, userId, filter }: Props) => {
  const [sitterProfile, setSitterProfile] = useState<Profile>();
  const [payment, setPayment] = useState<Payment>();

  useEffect(() => {
    loadSitterProfile(sitterId);
    loadPayment(userId, sitterId, filter);
  }, [sitterId, userId, filter]);

  const loadSitterProfile = (sitterId: string) => {
    setSitterProfile({ ...demoSitterProfile });
  };

  const loadPayment = (userId: string, sitterId: string, filter: string) => {
    setPayment({ ...demoPayment });
  };

  return (
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
      {sitterProfile && payment && (
        <Grid container spacing={2}>
          <Grid container direction="row" justifyContent="flex-start" alignItems="center">
            <Grid item xs={2}>
              <Avatar alt={sitterProfile.name} src={sitterProfile.photo} sx={{ width: 50, height: 50 }} />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1" sx={{ marginBottom: '-5px' }}>
                {sitterProfile.name}
              </Typography>
              <Typography gutterBottom variant="subtitle2">
                {sitterProfile.description}
              </Typography>
            </Grid>
            <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Chip label={filter.replace('_', ' ')} color="primary" size="small" />
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ marginTop: '30px' }}>
            <Typography variant="subtitle2" sx={{ marginBottom: '20px' }}>
              Payment Details
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <PaymentDetailsTable
              hours={payment.hoursOfService}
              description="Demo Description"
              hourlyRate={payment.rate}
              amount={payment.totalPayment}
              platformFee={10}
              total={payment.totalPayment}
            />
          </Grid>
          <Grid item xs={12} container direction="row" justifyContent="flex-end">
            <Grid item>
              <PaymentMethodOptions amount={payment.totalPayment} />
            </Grid>
          </Grid>
        </Grid>
      )}
    </Card>
  );
};

export default PaymentDetails;
