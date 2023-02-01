import { Box, Grid, Typography } from "@mui/material"
import '../styles/index.css'
import Image from 'mui-image'
import Particles from 'react-tsparticles'
import { options } from '../animation/animation'
const Projects = () => {
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
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={options} />
            <div className="main" style={{ }}>
                <Typography variant="h1" component="div">Projects</Typography>
                <div className="description" >
                    <p>These are my best projects by the moment but in my <a id="repo" onMouseLeave={() => document.getElementById("repo").style.color = null} onMouseOver={() => document.getElementById("name").style.color = "red"} href="https://github.com/Misil4">github</a> profile there are more </p>
                </div>
                <Box sx={{ display : "flex",justifyContent : "center",alignContent : "center" }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid item xs={2} sm={3} md={3} >
                            <Typography variant="h5" component="div" className="project_title">K-Berry</Typography>
                            <div className="image">
                                <Image alt="" src="https://raw.githubusercontent.com/Misil4/E3P1/7a4012e2f74b2c1b9bdf17f8a22835786335f74f/master/img/LogotipoKberri.svg" onClick={() => window.location = "https://2021e3p1talde1.aegcloud.pro/"} width="200px" height="200px" />
                            </div>
                            <p className="project_title">responsive ecommerce for korean cosmetics made with PHP, CSS, JS and SQL </p>
                        </Grid>
                        <Grid item xs={2} sm={3} md={3}>
                            <Typography variant="h5" component="div" className="project_title">Ballin</Typography>
                            <div className="image">
                                <Image alt="" src="https://github.com/Misil4/2122-E4P1/blob/main/assets/logo.jpg?raw=true" onClick={() => window.location = "https://drive.google.com/file/d/1HfMBPRiKrWvHfWtKRYsezWuNQYnzkPy5/view?usp=sharing"} width="200px" height="200px" />
                            </div>
                            <p className="project_title">Android app for natural park management made with React Native, MongoDB, NodeJS and Socket.io</p>
                        </Grid>
                        <Grid item xs={2} sm={3} md={3}>
                            <Typography variant="h5" component="div" className="project_title">Fake-Facebook</Typography>
                            <div className="image">
                                <Image alt="" src=" https://3.bp.blogspot.com/-7kHul4N2PHw/V0UU8no93KI/AAAAAAAAAZU/EUTtm8_a3pUeByg-jAyk15f1DjiVCuMSwCLcB/s1600/facebook-fake-account.png" width="200px" height="200px" onClick={() => window.location = "https://expo.dev/accounts/misil4/projects/fake-facebook"} />
                            </div>
                            <p className="project_title">Facebook Android App clone made with Expo and React Styled Components</p>
                        </Grid>
                        <Grid item xs={2} sm={3} md={3}>
                            <Typography variant="h5" component="div" className="project_title">SnakeJS</Typography>
                            <div className="image">
                                <Image  alt="" src=" https://camo.githubusercontent.com/6d5f79193ea18e2ec4505c251091fa34f28678ecc3348a70a48fc9955816500c/68747470733a2f2f6861636b737465722e696d6769782e6e65742f75706c6f6164732f6174746163686d656e74732f3433313031332f736e616b655f64766c6677436f6e79322e706e673f6175746f3d636f6d7072657373253243666f726d617426773d39303026683d363735266669743d6d696e" width="200px" height="200px" onClick={() => window.location = "https://github.com/Misil4/SnakeJS"} />
                            </div>
                            <p className="project_title">Snake game made in React.JS with canvas</p>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    )
}

export default Projects