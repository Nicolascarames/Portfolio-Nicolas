import './App.css'
import { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'

import { Card } from './Components/Card'
import astronautDescargar from '../img/Descargar_astronaut.png'
import fondoEspacio from '../img/Desktop.png'
import tierra from '../img/Mapa_mundial.png'
import marte from '../img/Mars.png'
import pluton from '../img/pluton.png'
import luna from '../img/moon_cartoon.png'
import alien from '../img/alien.png'
import rocket from '../img/roquetAstronaut.png'
import satelite from '../img/satelite.png'
import drone from '../img/drone.png'
// import comet from '../img/comet.png'
// import zepelin from '../img/zepelin.png'
import neptune from '../img/Neptune.png'
import skillsBaloom from '../img/Skills.png'
import astronautHome from '../img/astronaut home.png'
import cartoonMars from '../img/CartoonMars.png'
import { About } from './Components/About'
import { Page1 } from './Components/Page1'

// Little helpers ...
// const urls = (name: string, wrap = false) =>
//   `${wrap ? 'urls(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

export default function App() {
  const parallax = useRef<IParallax>(null!)

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

        <ParallaxLayer offset={0.5} speed={2} style={{ pointerEvents: 'none' }}>
          {/* <img src={urls('satellite4')} style={{ width: '15%', marginLeft: '70%' }} /> */}
          <img
            src={skillsBaloom}
            style={{ width: '35%', minWidth: '150px', maxWidth: '400px', marginLeft: '74%', opacity: '0.8' }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0.8} speed={0.1} style={{ opacity: 0.2 }}>
          <img src={luna} style={{ display: 'block', width: '20%', minWidth: '300px', marginLeft: '15%' }} />
          <img src={pluton} style={{ display: 'block', width: '20%', minWidth: '150px', marginLeft: '55%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.1}>
          <img
            src={marte}
            style={{ display: 'block', width: '25%', minWidth: '300px', marginLeft: '20%', opacity: 0.3 }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.2} speed={-0.8}>
          <img
            src={drone}
            style={{ display: 'block', width: '10%', minWidth: '80px', marginLeft: '0%', opacity: 0.8 }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={3.8} speed={2} style={{ opacity: 0.9 }}>
          <img src={rocket} style={{ display: 'block', width: '10%', minWidth: '80px', marginLeft: '10%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.2} speed={-0.1} style={{ opacity: 0.6 }}>
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
            style={{ display: 'block', width: '10%', minWidth: '80px', marginLeft: '25%', opacity: 0.5 }}
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
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Card />
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
          <About />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={-0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => parallax.current.scrollTo(4)}>
          <Card />
        </ParallaxLayer>

        <ParallaxLayer
          id="pagina5"
          offset={4}
          speed={-0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => parallax.current.scrollTo(0)}>
          <Card />
          <img
            src={astronautHome}
            style={{
              // marginTop: '66%',
              // marginLeft: '80%',
              bottom: '-55px',
              right: '0',
              width: '20%',
              minWidth: '200px',
              maxWidth: '350px',
              opacity: '0.9',
              position: 'fixed',
            }}
          />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}
