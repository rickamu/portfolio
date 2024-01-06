import React, { PureComponent } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Suspense } from 'react'

const     Bulb = () => {
    const bulb = useGLTF('./candle_light/scene.gltf');

    return (
        <>
        <ambientLight />
        <mesh>
        <primitive 
            object = {bulb.scene}
            scale = {0.1}
        />
        </mesh>
        
        </>
    )
}    

class LightBulb extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
          <Canvas
            frameloop='demand'
            shadows
            camera={{position: [20, 3, 5], fov: 100}}
            gl={{preserveDrawingBuffer: true}}
          >
            <Suspense>
                <OrbitControls
                    enableZoom={false}

                />
                <Bulb />
            </Suspense>
          </Canvas>  
        )
    }
}

export default LightBulb