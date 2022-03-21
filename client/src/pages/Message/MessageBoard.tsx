import React from 'react';
import MessageMenu from './MessageMenu';
import { Grid } from '@mui/material/';

const MessageBoard: React.FC = () => {
  return (
    <Grid container sx={{ height: '100%', backgroundColor: 'white' }}>
      <Grid item xs={2.5} sx={{ border: '1px solid', borderColor: '#e0e0eb', boxShadow: '3px 3px 4px #e0e0eb' }}>
        <MessageMenu />
      </Grid>
      <Grid item xs={9.5} sx={{ height: '100%' }}>
        hello
      </Grid>
    </Grid>
  );
};

export default MessageBoard;
