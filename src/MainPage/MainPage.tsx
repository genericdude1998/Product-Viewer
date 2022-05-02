import React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Item = styled('div')(() => ({
  backgroundColor: 'red',
  height: '300px',
}));

export default function MainPage() {
  return (
    <>
      <Typography variant="h1" color="initial">Title!</Typography>
      <Box sx={{ height: '100%' }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </Box>
    </>

  );
}
