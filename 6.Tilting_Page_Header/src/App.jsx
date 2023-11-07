import React from 'react'
import Tilt from 'react-parallax-tilt';
import abc from "./assets/face.jpg"

const App = () => {
  return (
    <Tilt tiltMaxAngleX={40} tiltMaxAngleY={40} perspective={1000} scale={1.1} glareEnable={true}>
      <div className='container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh' }}>
        <img src={abc} alt="cat eys" style={{ height: '450px', width: '800px' }} />
      </div>
    </Tilt>
  )
}

export default App
