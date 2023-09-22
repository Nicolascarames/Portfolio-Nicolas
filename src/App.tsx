import './App.css'
import { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'

import astronautDescargar from '../img/Descargar_astronaut.png'
import fondoEspacio from '../img/Desktop.png'
import tierra from '../img/Mapa_mundial.png'
import marte from '../img/Mars.png'
import pluton from '../img/pluton.png'
import luna from '../img/moon_cartoon.png'
import alien from '../img/alien.png'
import rocket from '../img/cohete.png'
import satelite from '../img/satelite.png'
import drone from '../img/drone.png'
// import comet from '../img/comet.png'
// import zepelin from '../img/zepelin.png'
import neptune from '../img/Neptune.png'
import skillsBaloom from '../img/Skills.png'
import cartoonMars from '../img/CartoonMars.png'
import { Page1 } from './Components/Page1'
import { Page2 } from './Components/Page2'
import { Page3 } from './Components/Page3'
import { Page4 } from './Components/Page4'
import { Page5 } from './Components/Page5'

// Little helpers ...
// const urls = (name: string, wrap = false) =>
//   `${wrap ? 'urls(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

export default function App() {
  const parallax = useRef<IParallax>(null!)
  const sizeVw = window.innerWidth
  console.log(sizeVw)
  const alto = sizeVw > 1000 ? 1.5 : 1.8

  return (
    <div style={{ width: '100vw', height: '100%', background: '#253237' }}>
      <Parallax ref={parallax} pages={5}>
        {/* <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />
        <ParallaxLayer offset={3} speed={1} style={{ backgroundColor: '#87BCDE' }} />
        <ParallaxLayer offset={4} speed={1} style={{ backgroundColor: '#87BCDE' }} /> */}

        <ParallaxLayer
          className="fondo1"
          offset={0}
          speed={0}
          factor={5}
          style={{
            backgroundImage: `url(${fondoEspacio})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer offset={alto} speed={2} style={{ pointerEvents: 'none' }}>
          {/* <img src={urls('satellite4')} style={{ width: '15%', marginLeft: '70%' }} /> */}
          <img
            src={skillsBaloom}
            style={{ width: '35%', minWidth: '150px', maxWidth: '400px', marginLeft: '25%', opacity: '0.8' }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0.8} speed={0.1} style={{ opacity: 0.2 }}>
          <img src={luna} style={{ display: 'block', width: '20%', minWidth: '300px', marginLeft: '15%' }} />
          <img
            src={pluton}
            style={{ display: 'block', width: '20%', minWidth: '150px', marginLeft: '55%', marginTop: '40%' }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={3.2} speed={0.1}>
          <img
            src={marte}
            style={{ display: 'block', width: '10%', minWidth: '300px', marginLeft: '10%', opacity: 0.3 }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.2} speed={-0.8}>
          <img
            src={drone}
            style={{ display: 'block', width: '10%', minWidth: '80px', marginLeft: '0%', opacity: 0.8 }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.9} speed={-1} style={{ opacity: 0.9 }}>
          <img
            src={rocket}
            style={{ display: 'block', width: '10%', minWidth: '80px', position: 'absolute', right: '10px' }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={3.2} speed={-0.1} style={{ opacity: 0.6 }}>
          <img src={alien} style={{ display: 'block', width: '10%', minWidth: '80px', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-3}>
          {/* <img
            src={comet}
            style={{ display: 'block', width: '5%', minWidth: '30px', marginLeft: '40%', opacity: 0.3 }}
          /> */}
        </ParallaxLayer>

        <ParallaxLayer offset={4.1} speed={-0.1}>
          <img
            src={satelite}
            style={{ display: 'block', width: '10%', minWidth: '80px', marginLeft: '15%', opacity: 0.5 }}
          />
          {/* <img
            src={zepelin}
            style={{ display: 'block', width: '20%', minWidth: '80px', marginLeft: '5%', opacity: 0.7 }}
          /> */}
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.4}>
          <img
            src={astronautDescargar}
            style={{ display: 'block', width: '20%', minWidth: '150px', marginLeft: '5%', opacity: '0.6' }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={2.2} speed={0.1}>
          <img
            src={neptune}
            style={{ display: 'block', width: '10%', minWidth: '80px', marginLeft: '75%', opacity: '0.3' }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={0.1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}>
          <img src={tierra} style={{ width: '20%', minWidth: '300px', opacity: '0.6' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={3.95} speed={0.1}>
          <img
            src={cartoonMars}
            style={{ display: 'block', width: '25%', minWidth: '300px', marginLeft: '70%', opacity: 0.2 }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}>
          {/* <Link activeClass="active" to="" spy={true} smooth={true} offset={-70} duration={500}></Link> */}
          {/* <Card /> */}

          <Page1 />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          // onClick={() => parallax.current.scrollTo(2)}
          style={
            {
              // display: 'flex',
              // alignItems: 'center',
              // justifyContent: 'center',
            }
          }>
          <Page2 />
          <div
            onClick={() => parallax.current.scrollTo(2)}
            style={{
              position: 'absolute',
              width: '13%',
              height: '100%',
              right: '0',
              bottom: '0',
              // backgroundColor: 'white',
            }}></div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => parallax.current.scrollTo(3)}>
          {/* <img src={about} alt="about" style={{ display: 'block', width: '75%', minWidth: '390px' }} /> */}
          <Page3 />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={-0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0',
            width: '100%',
          }}>
          <Page4 />
          <div
            onClick={() => parallax.current.scrollTo(4)}
            style={{
              position: 'absolute',
              width: '13%',
              height: '100%',
              right: '0',
              bottom: '0',
              // backgroundColor: 'white',
            }}></div>
        </ParallaxLayer>

        <ParallaxLayer
          id="pagina5"
          offset={4}
          speed={-0}
          style={{
            // display: 'flex',
            // alignItems: 'center',
            // justifyContent: 'center',
            width: '100%',
          }}>
          <Page5 />
          <div
            onClick={() => parallax.current.scrollTo(0)}
            style={{
              position: 'absolute',
              width: '13%',
              height: '100%',
              right: '0',
              bottom: '0',
              // backgroundColor: 'white',
            }}></div>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}