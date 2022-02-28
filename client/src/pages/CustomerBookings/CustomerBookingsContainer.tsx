import { TabContext, TabPanel } from '@mui/lab';
import { Box, Card, Container, Grid, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import PageContainer from '../../components/PageContainer/PageContainer';

const CustomerBookingsContainer = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
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
                <TabContext value={value}>
                  <Box
                    sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'space-around' }}
                  >
                    <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto">
                      <Tab label="Current" value="1" />
                      <Tab label="Past Due" value="2" />
                      <Tab label="Paid" value="3" />
                    </Tabs>
                  </Box>
                  <TabPanel value="1">Item One</TabPanel>
                  <TabPanel value="2">Item Two</TabPanel>
                  <TabPanel value="3">Item Three</TabPanel>
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
            ></Card>
          </Grid>
        </Grid>
      </Container>
    </PageContainer>
  );
};

export default CustomerBookingsContainer;
