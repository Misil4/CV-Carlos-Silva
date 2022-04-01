import { Typography } from '@mui/material'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import reactPic from '../public/react.png'
import nodePic from '../public/node.png'
import mongoPic from '../public/mongo.png'
import Particles from 'react-tsparticles'
import { options } from '../animation/animation'

const About = () => {
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
            <div className={styles.main}>
                <Typography variant="h1">About me</Typography>
                <div className={styles.description}>

                    <p >Im <a id='name' onMouseLeave={() => document.getElementById("name").style.color = null} onMouseOver={() => document.getElementById("name").style.color = "red"} >Carlos Silva</a><br />  a 21 years old front-end Developer that love challenges, it doesn´t matter the language or the task, im open to make it </p>
                </div>
                <p className={styles.description}>These are the technologies i normaly use:</p>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <Image alt="" src={reactPic} width={100} height={100}></Image>
                    </div>
                    <div className={styles.card}>
                        <Image alt="" src={nodePic} width={100} height={100}></Image>
                    </div>
                    <div className={styles.card}>
                        <Image alt="" src={mongoPic} width={100} height={100}></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About