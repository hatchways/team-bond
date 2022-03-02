import { TabContext, TabPanel } from '@mui/lab';
import { Box, Card, Container, Grid, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import PageContainer from '../../components/PageContainer/PageContainer';
import CustomerBookingList from './CustomerBookingsList/CustomerBookingList';

const CustomerBookingsContainer = () => {
  const [tabIndex, setTabIndex] = useState<string>('1');
  const [selectedBookingId, setSelectedBookingId] = useState<string>('');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabIndex(newValue);
  };

  return (
    <PageContainer>
      <Container maxWidth="xl">
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
                    <CustomerBookingList filter="CURRENT" onClick={setSelectedBookingId} />
                  </TabPanel>
                  <TabPanel value="2">
                    <CustomerBookingList filter="PAST_DUE" onClick={setSelectedBookingId} />
                  </TabPanel>
                  <TabPanel value="3">
                    <CustomerBookingList filter="PAID" onClick={setSelectedBookingId} />
                  </TabPanel>
                </TabContext>
              </Box>
            </Card>
          </Grid>
          <Grid item md={8} sm={12} xs={12}>
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
              {selectedBookingId}
            </Card>
          </Grid>
        </Grid>
      </Container>
    </PageContainer>
  );
};

export default CustomerBookingsContainer;
