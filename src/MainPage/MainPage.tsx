import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Item from './Item';
import Product from './Product';


export default function MainPage() {
  return (
    <>
      <Typography variant="h1" color="initial">Title!</Typography>
      <Box sx={{ height: '100%' }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Product />
          </Grid>
          <Grid item xs={6}>
          <Product />
          </Grid>
          <Grid item xs={6}>
          <Product />
          </Grid>
          <Grid item xs={6}>
            <Product />
          </Grid>
        </Grid>
      </Box>
    </>

  );
}
