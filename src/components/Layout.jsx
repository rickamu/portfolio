import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import ReactParallaxTilt from 'react-parallax-tilt'
import '../styles/Layout.css';

export function Layout() {
  return (
    <>

              <Header className="header"/>

    <ReactParallaxTilt
      // options = {{
        reverse = {false}
        tiltMaxAngleX={2}
        tiltMaxAngleY={1}
        scale = {1}
        perspective = {3500}
        speed = {100}
        reset = {false}
        transition = {true}
        gyroscope = {true}
      // }}
      className='parallax-effect'
    >

      <div id='main'>
        <div className='main'>
          {/* <main> */}
            <Outlet />
          {/* </main> */}
          <Footer />
        </div>
      </div>
          
    </ReactParallaxTilt>    
      
    </>
  );
};