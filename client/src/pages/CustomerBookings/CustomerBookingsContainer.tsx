import { TabContext, TabPanel } from '@mui/lab';
import { Box, Card, Container, Grid, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import PageContainer from '../../components/PageContainer/PageContainer';
import PaymentDetails from '../../components/PaymentDetails/PaymentDetails';
import { useAuth } from '../../context/useAuthContext';
import CustomerBookingList from './CustomerBookingsList/CustomerBookingList';

const CustomerBookingsContainer = () => {
  const [tabIndex, setTabIndex] = useState<string>('1');
  const [selectedSitterId, setSelectedSitterId] = useState<string>('');
  const [selectedFilter, setSelectedFilter] = useState<string>('');

  const { loggedInUser, profile } = useAuth();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabIndex(newValue);
  };

  const handleChildOnClick = (sitterId: string, selectedFilter: string) => {
    setSelectedSitterId(sitterId);
    setSelectedFilter(selectedFilter);
  };

  return (
    <PageContainer>
      <Container maxWidth="xl">
        <Typography sx={{ textAlign: 'center', marginBottom: '15px' }} variant="subtitle1">
          Your Bookings
        </Typography>
        <Grid container spacing={2} direction="row" justifyContent="space-between" alignItems="flex-start">
          <Grid item md={4} sm={12} xs={12}>
            <Card
              sx={{
                p: 1,
                height: 'auto',
                overflowY: 'auto',
                minHeight: '50vh',
                marginBottom: '20px',
              }}
              elevation={1}
            >
              <Box sx={{ width: '100%' }}>
                <TabContext value={tabIndex}>
                  <Box
                    sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'space-around' }}
                  >
                    <Tabs value={tabIndex} onChange={handleChange} variant="scrollable" scrollButtons="auto">
                      <Tab label="Current" value="1" />
                      <Tab label="Past-Due" value="2" />
                      <Tab label="Paid" value="3" />
                    </Tabs>
                  </Box>
                  <TabPanel value="1">
                    <CustomerBookingList filter="CURRENT" onClick={handleChildOnClick} />
                  </TabPanel>
                  <TabPanel value="2">
                    <CustomerBookingList filter="PAST_DUE" onClick={handleChildOnClick} />
                  </TabPanel>
                  <TabPanel value="3">
                    <CustomerBookingList filter="PAID" onClick={handleChildOnClick} />
                  </TabPanel>
                </TabContext>
              </Box>
            </Card>
          </Grid>
          <Grid item md={8} sm={12} xs={12}>
            {profile && selectedSitterId && (
              <PaymentDetails userId={profile.userId} sitterId={selectedSitterId} filter={selectedFilter} />
            )}
          </Grid>
        </Grid>
      </Container>
    </PageContainer>
  );
};

export default CustomerBookingsContainer;
