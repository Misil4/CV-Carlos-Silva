import { Typography } from '@mui/material'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Particles from 'react-tsparticles'
import { options } from '../animation/animation'
import dynamic from 'next/dynamic';

const TypeWriter = dynamic(
  () => import('react-typewriter-effect'),
  {
      ssr: false
  }
)

export default function Home() {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className={styles.container}>
      <Particles
        className='canvas'
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options} />
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="My curriculum" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options} />
      <main className={styles.main} style={{  left: "30%"}}>
        {typeof document !== "undefined" ? (
      <TypeWriter
            textStyle={{  fontFamily: 'in_your_face,joffrey!' }}
            startDelay={100}
            cursorColor="black"
            text="Hello im Carlos"
            typeSpeed={150}
            scrollArea={document}
          />) : null}<br />
        {typeof document !== "undefined" ? (
      <TypeWriter
            textStyle={{  fontFamily: 'in_your_face,joffrey!' }}
            startDelay={2200}
            className="description"
            cursorColor="black"
            text="and this is my portfolio"
            typeSpeed={150}
            scrollArea={document}
          />) : null} <br/> <br/>
        <div className={styles.grid}>
          <div className={styles.card}>
            <Link href="/About" passHref={true} >
              <h2>About Me &rarr;</h2>
            </Link>
            <p>Learn something more about me.</p>
          </div>
          <div className={styles.card}>
            <Link href="/Projects" passHref={true}>
              <h2>My Projects &rarr;</h2>
            </Link>
            <p>Discover the projects I worked in .</p>
          </div>
          <div
            className={styles.card}>
            <Link href="/Habilities" passHref={true}>
              <h2>My Habilities &rarr;</h2></Link>
            <p>
              The habilities I gained with the past of the time
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/Misil4/CV-Carlos-Silva"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Typography variant="h5" style={{ fontWeight: "Bold" }}>Carlos Silva</Typography>
          </span>
        </a>
      </footer>
    </div>
  )
}
