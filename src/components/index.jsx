import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import '../styles/index.css'
import Particles from 'react-tsparticles'
import { options } from '../animation/animation'
import { useCallback,useRef } from 'react'
import { loadFull } from 'tsparticles'
import TypeWriterEffect from 'react-typewriter-effect';

export default function Home() {
  const ref = useRef()
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);
if (typeof window !== 'undefined') {
  return (
    <div ref={ref} className="container">
      <Particles
        className='canvas'
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options} />
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options} />
      <main className={"main"} style={{  left: "30%"}}>
      <TypeWriterEffect
            textStyle={{  fontFamily: 'in_your_face,joffrey!' }}
            startDelay={100}
            cursorColor="black"
            text="Hello im Carlos"
            typeSpeed={150}
            scrollArea={document}
          />
      <TypeWriterEffect
            textStyle={{  fontFamily: 'in_your_face,joffrey!' }}
            startDelay={2200}
            className="description"
            cursorColor="black"
            text="and this is my portfolio"
            typeSpeed={150}
            scrollArea={document}
          />
        <div className={"grid"}>
          <div className={"card"}>
            <Link to="/about" >
              <h2>About Me &rarr;</h2>
            </Link>
            <p>Learn something more about me.</p>
          </div>
          <div className={"card"}>
            <Link to="/Projects" >
              <h2>My Projects &rarr;</h2>
            </Link>
            <p>Discover the projects I worked in .</p>
          </div>
          <div
            className={"card"}>
            <Link to="/Habilities" >
              <h2>My Habilities &rarr;</h2></Link>
            <p>
              The habilities I gained with the past of the time
            </p>
          </div>
        </div>
      </main>

      <footer className={"footer"}>
        <a
          href="https://github.com/Misil4/CV-Carlos-Silva"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={"logo"}>
            <Typography variant="h5" style={{ fontWeight: "Bold" }}></Typography>
          </span>
        </a>
      </footer>
    </div>
  )}else return <p>loading</p>
}
