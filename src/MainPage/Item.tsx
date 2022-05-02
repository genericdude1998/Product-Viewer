import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'

export default function Item() {
    const mesh = useRef<any>(null!);
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
      if(hovered){
        mesh.current.rotation.y += 1 * delta
      }else{
        mesh.current.rotation.y = 0

      }
    })
  // Return view, these are regular three.js elements expressed in JSX
  return (
        <mesh 
          ref={mesh} 
          onPointerOver={(event) => setHover(true)} 
          onPointerOut={(event) => setHover(false)}
        >
        <boxGeometry args={[5, 5, 1]} />
        <meshStandardMaterial/>
        </mesh>
  )
}
