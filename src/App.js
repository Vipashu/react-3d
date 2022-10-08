import React, {Suspense} from 'react';
import './App.css';

import Box from './components/Box';
import Iphone from './components/Iphone';

import {Canvas} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';


function App() {
  return (
    <div className="App">
      <h1>Three.js in React</h1>
      <Canvas className='canvas'>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2,5,2]} intensity={1} />
       <Suspense fallback={null}>
       <Iphone/>
       </Suspense>
       
      </Canvas>
      <Canvas className='canvas'>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2,5,2]} intensity={1} />
       <Suspense fallback={null}>
       <Box/>
       </Suspense>
       
      </Canvas>
    </div>
  );
}

export default App;
