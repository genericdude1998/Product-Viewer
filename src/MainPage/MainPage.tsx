import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from './Product';
import { Canvas } from '@react-three/fiber';
import Item from './Item';
import { styled } from '@mui/material';
import { Html } from '@react-three/drei';
import THREE from 'three';

const Sampler = styled('div')`
  height: 50vh;
`

export default function MainPage() {

  return (
    <>
      <Typography variant="h1" color="initial">Title!</Typography>
      <Sampler>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Item />
        <Html calculatePosition={(_,__,size) => [size.width / 10, size.height / 5]}>
          <h1>hello world!</h1>
        </Html>
      </Canvas>
      </Sampler>
      <Box sx={{ height: '100%' }} component='div'>
        <Grid container spacing={2}>
          <Grid item md={3} xs={12}>
            <Product />
          </Grid>
          <Grid item md={3} xs={12}>
          <Product />
          </Grid>
          <Grid item md={3} xs={12}>
          <Product />
          </Grid>
          <Grid item md={3} xs={12}>
            <Product />
          </Grid>
        </Grid>
      </Box>
    </>

  );
}
