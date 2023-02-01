import { Typography, Grid } from '@mui/material'
import '../styles/index.css'
import Particles from 'react-tsparticles'
import { options } from '../animation/animation'
import CoPresentIcon from '@mui/icons-material/CoPresentOutlined';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Image from 'mui-image'

const About = () => {
    const particlesInit = (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        <div className="container">
            <Particles
                className='canvas'
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={options} />
            <div style={{ position: "fixed", color: "white", margin: "auto", textAlign: "center" }}>
                <Typography className={"font"} variant="h1">About me</Typography>
                <p className={"font"}>Im a beginner in this world, my main goal now is gain experience by working and testing with a lot of languages,frameworks, etc.</p>
                <div style={{ width: "100%", height: "100%", textAlign: "center", marginTop: 8, borderRadius: "6px" }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid item xs={2} sm={4} md={4}>
                            <CoPresentIcon /> <br />
                            <Typography className={"font"} variant='h5' component="div">Personality</Typography> <br />
                            <p>Since i started in this world 2 years ago without any idea of programming I started studying web development and worked on various projects on grade and myself,I consider me introvert and a resolutive person that involves on her work until finish it.     </p>

                        </Grid>
                        <Grid item xs={2} sm={4} md={4}>
                            <TimelapseIcon /> <br />
                            <Typography className={"font"} variant='h5' component="div">Experience</Typography> <br />
                            <p>As I said Im a beginner on this world, I worked and im already working as Front-End Developer on CEIT IK4 since last summer.<br /><br />Also I worked as computer maintainer on Jakintza School.</p>
                        </Grid>
                        <Grid item xs={2} sm={4} md={4}>
                            <MenuBookIcon /> <br />
                            <Typography className={"font"} variant='h5' component="div">Studies</Typography> <br />
                            <ul>
                            <li>Middle degree on MicroComputer Systems and Networks on Zubiri Manteo <br />from 2018 until 2020</li>
                            <li>High degree on Web Development on AEG <br />from 2020 until 2022</li>
                            </ul>
                        </Grid>
                    </Grid>
                </div>
                <p className={"description"}>These are the technologies i normaly use:</p>
                <div className={"grid"} style={{ margin: "auto" }}>
                    <div className={"card"}>
                        <Image alt="" src={"/assets/react.png"} width={100} height={100}></Image>
                    </div>
                    <div className={"card"}>
                        <Image alt="" src={"/assets/node.png"} width={100} height={100}></Image>
                    </div>
                    <div className={"card"}>
                        <Image alt="" src={"/assets/mongo.png"} width={100} height={100}></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About