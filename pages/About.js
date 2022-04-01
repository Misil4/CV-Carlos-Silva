import { Typography } from '@mui/material'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import reactPic from '../public/react.png'
import nodePic from '../public/node.png'

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <Typography variant="div">About me</Typography>
                <div className={styles.description}>

                    <p >    Im <p className={styles.name}>Carlos Silva</p>, a 21 years old front-end Developer that love challenges, it doesn´t matter the language or the task, im open to make it </p>
                </div>
                <p className={styles.description}>These are the technologies i normaly use:</p>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <Image src={reactPic} width={100} height={100}></Image>
                    </div>
                    <div className={styles.card}>
                        <Image src={nodePic} width={100} height={100}></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About