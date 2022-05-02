import React from 'react'
import Item from './Item'
import { Canvas } from '@react-three/fiber'

export default function Product() {
  return (
    <div>
        <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Item />
        </Canvas>
      <p>Hello</p>
    </div>
  )
}
