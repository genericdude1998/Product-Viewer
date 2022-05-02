import React from 'react'
import Item from './Item'
import { Canvas } from '@react-three/fiber';
import { styled } from '@mui/material';

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  max-width: 500px;
`

const CanvasStyles = styled('div')`
  background-color: red;
`

export default function Product() {
  return (
    <Wrapper>
      <CanvasStyles>
        <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Item />
        </Canvas>
      </CanvasStyles>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus iure, ea non accusamus vel totam vitae facilis aperiam itaque odit dolorem nesciunt eius eos alias, illum a commodi omnis cupiditate.</p>
    </Wrapper>
  )
}
