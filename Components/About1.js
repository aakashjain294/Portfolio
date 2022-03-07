import { Button, Link } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import reactIcon from '../assets/reactIcon.png'
import HTML from '../assets/HTML.png'
import CSS from '../assets/CSS.png'
import JAVA from '../assets/JAVA.png'
import MUI from '../assets/MUI.png'
import leetcode from '../assets/leetcode.png'
import gfg from '../assets/gfg.png'
import insta from '../assets/Insta1.PNG'
import camera from '../assets/camera.PNG'
import movies from '../assets/Movies.PNG'
import jira from '../assets/jira.PNG'
import excel from '../assets/excel.PNG'
import portf from '../assets/portf.PNG'
import hackerrrank from '../assets/hackerrrank.png'
import firebase from '../assets/firebase.png'
import bootstrap from '../assets/bootstrap.png'
import JavascriptIcon from '@mui/icons-material/Javascript';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import next from '../public/favicon.ico'
import Navbar from './Navbar'
import Image from 'next/image'
import Footer from './Footer'
function About() {
    return (
        <div>
            <Navbar />
            <div className='main'>
                <div className='about-project-both'>
                    <div className='skills-profile'>
                        <div className='skills-section'>
                            <h2 style={{ textAlign: "center" }}><u>SKILLS</u></h2>
                            <div className='skills-btn' style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
                                <Button  style={{ marginLeft: "0.2rem", marginBottom: "0.1rem", backgroundColor: "black", color: "white" }} variant="outlined">
                                    React js
                                    <Image height={25} width={40} src={reactIcon} />
                                </Button>
                                <Button style={{ marginLeft: "0.2rem", marginBottom: "0.1rem", backgroundColor: "black", color: "white" }} variant="outlined" >
                                    Html
                                    <Image height={25} width={40} src={HTML} />
                                </Button>
                                <Button style={{ marginLeft: "0.2rem", marginBottom: "0.1rem", backgroundColor: "black", color: "white" }} variant="outlined" endIcon={<JavascriptIcon style={{ fontSize: 30 }} />}>
                                    javascript
                                </Button>
                                <Button style={{ marginLeft: "0.2rem", marginBottom: "0.1rem", backgroundColor: "black", color: "white" }} variant="outlined">
                                    css
                                    <Image height={25} width={40} src={CSS} />
                                </Button>
                                <Button style={{ marginLeft: "0.2rem", marginBottom: "0.1rem", backgroundColor: "black", color: "white" }} variant="outlined" >
                                    Material ui
                                    <Image height={25} width={30} src={MUI} />
                                </Button>
                                <Button style={{ marginLeft: "0.2rem", marginBottom: "0.1rem", backgroundColor: "black", color: "white" }} variant="outlined">
                                    java
                                    <Image height={25} width={40} src={JAVA} />
                                </Button>
                                <Button style={{ marginLeft: "0.2rem", marginBottom: "0.1rem", backgroundColor: "black", color: "white" }} variant="outlined">
                                    next js
                                    <Image height={25} width={30} src={next} />
                                </Button>
                                <Button style={{ marginLeft: "0.2rem", marginBottom: "0.1rem", backgroundColor: "black", color: "white" }} variant="outlined" endIcon={<GitHubIcon />}>
                                    git/github
                                </Button>
                                <Button style={{ marginLeft: "0.2rem", marginBottom: "0.1rem", backgroundColor: "black", color: "white" }} variant="outlined">
                                    bootstrap
                                    <Image height={25} width={30} src={bootstrap} />
                                </Button>
                                <Button style={{ marginLeft: "0.2rem", marginBottom: "0.1rem", backgroundColor: "black", color: "white" }} variant="outlined">
                                    firebase
                                    <Image height={25} width={30} src={firebase} />
                                </Button>
                                <Button style={{ marginLeft: "0.2rem", marginBottom: "0.1rem", backgroundColor: "black", color: "white" }} variant="outlined">
                                    alogithms
                                </Button>
                                <Button style={{ marginLeft: "0.2rem", marginBottom: "0.1rem", backgroundColor: "black", color: "white" }} variant="outlined">
                                    data structures
                                </Button>

                            </div>
                        </div>
                        <div className='profile-section'>
                            <h2 style={{ textAlign: "center" }}><u>PROFILES</u></h2>
                            <div className='profile-btn-section'>
                                <Link href="#" target="_blank">
                                    <GitHubIcon style={{ fontSize: 35 }} />
                                </Link>
                                <Link href="#" target="_blank">
                                    <LinkedInIcon style={{ fontSize: 35 }} />
                                </Link>
                                <Link href="#" target="_blank">
                                    <Image height={40} width={40} src={leetcode} />
                                </Link>
                                <Link href="#" target="_blank">
                                    <Image height={40} width={40} src={gfg} />
                                </Link>
                                <Link href="#" target="_blank">
                                    <Image height={40} width={40} src={hackerrrank} />
                                </Link>
                            </div>
                            <div className='profile-contact'>

                                <div style={{display:"flex",justifyContent:"center",alignItems:"center", fontFamily:"arial",marginTop:"1rem" }}>
                                    <PhoneIcon style={{ fontSize: 35, marginLeft: "0.5rem"}} /><span style={{fontSize:"1.1rem"}}>:- +91 9625783388</span> 
                                </div >
                                <div style={{display:"flex",justifyContent:"center",alignItems:"center", fontFamily:"arial",marginTop:"1rem" }}>
                                    <EmailIcon style={{ fontSize: 30, marginLeft: "0.5rem" }} /><span style={{fontSize:"1rem"}}>:- itsaakashjain119@gmail.com</span> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='about-project'>
                        <div className='about-section'>
                            <h1 style={{ fontStyle: "italic", paddingLeft: "1rem" }}><u>About</u></h1>
                            <p style={{ marginTop:"-0.6rem",paddingLeft: "0.5rem" }}>I am currently pursuing B.Tech Degree(Final Year) in Computer Science Engineering from Academy of Technology. I have 3+ years of experience in Web Development and I have a Youtube Channel where I teach Full Stack Web Development Projects</p>
                            <Button className='resume-btn' style={{ marginLeft: "0.5rem" }} variant="outlined">Resume</Button>
                        </div>
                        <div className='project-section'>

                            <h1
                                style={{
                                    fontStyle: "italic",
                                    paddingLeft: "1rem"
                                }}>
                                <u>Projects</u>
                            </h1>
                            <div className='project-box'>
                                <Box
                                    sx={{
                                        width: 220,
                                        height: 150,
                                        // backgroundColor: 'red',
                                        // '&:hover': {
                                        //     backgroundColor: 'primary.main',
                                        //     opacity: [0.9, 0.8, 0.7],
                                        // },
                                        borderRadius: '15px',
                                        marginBottom: '0.5rem'
                                    }}
                                >
                                    <Image src={insta} />
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-evenly",
                                            backgroundColor:"black",
                                            borderRadius:"15px"
                                        }}
                                    >
                                        <Button style={{ backgroundColor: "black", color: "white" }} variant="outlined">
                                            Reels clone
                                        </Button>
                                        <Link href="#" target="_blank">
                                            <GitHubIcon style={{ fontSize: 35 }} />
                                        </Link>
                                        <Link href="#" target="_blank">
                                            <SlideshowIcon style={{ fontSize: 35 }} />
                                        </Link>
                                    </Box>
                                </Box>

                                <Box
                                    sx={{
                                        width: 220,
                                        height: 150,
                                        // backgroundColor: 'red',
                                        // '&:hover': {
                                        //     backgroundColor: 'primary.main',
                                        //     opacity: [0.9, 0.8, 0.7],
                                        // },
                                        borderRadius: '15px',
                                        marginBottom: '0.5rem'
                                    }}
                                >
                                    <Image  src={movies} />
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-evenly"
                                        }}
                                    >
                                        <Button style={{ backgroundColor: "black", color: "white" }} variant="outlined">
                                            Movies App
                                        </Button>
                                        <Link href="#" target="_blank">
                                            <GitHubIcon style={{ fontSize: 35 }} />
                                        </Link>
                                        <Link href="#" target="_blank">
                                            <SlideshowIcon style={{ fontSize: 35 }} />
                                        </Link>
                                    </Box>
                                </Box>

                                <Box
                                    sx={{
                                        width: 220,
                                        height: 150,
                                        // backgroundColor: 'red',
                                        // '&:hover': {
                                        //     backgroundColor: 'primary.main',
                                        //     opacity: [0.9, 0.8, 0.7],
                                        // },
                                        borderRadius: '15px',
                                        marginBottom: '0.5rem'
                                    }}
                                >
                                    <Image height={650} src={portf} />
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-evenly"
                                        }}
                                    >
                                        <Button style={{ backgroundColor: "black", color: "white" }} variant="outlined">
                                            protfolio
                                        </Button>
                                        <Link href="#" target="_blank">
                                            <GitHubIcon style={{ fontSize: 35 }} />
                                        </Link>
                                        <Link href="#" target="_blank">
                                            <SlideshowIcon style={{ fontSize: 35 }} />
                                        </Link>
                                    </Box>
                                </Box>

                                <Box
                                    sx={{
                                        width: 220,
                                        height: 150,
                                        // backgroundColor: 'red',
                                        // '&:hover': {
                                        //     backgroundColor: 'primary.main',
                                        //     opacity: [0.9, 0.8, 0.7],
                                        // },
                                        borderRadius: '15px',
                                        marginBottom: '0.5rem'
                                    }}
                                >
                                    <Image height={650} src={camera} />
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-evenly"
                                        }}
                                    >
                                        <Button style={{ backgroundColor: "black", color: "white" }} variant="outlined">
                                            Camera App
                                        </Button>
                                        <Link href="#" target="_blank">
                                            <GitHubIcon style={{ fontSize: 35 }} />
                                        </Link>
                                        <Link href="#" target="_blank">
                                            <SlideshowIcon style={{ fontSize: 35 }} />
                                        </Link>
                                    </Box>
                                </Box>

                                <Box
                                    sx={{
                                        width: 220,
                                        height: 150,
                                        // backgroundColor: 'red',
                                        // '&:hover': {
                                        //     backgroundColor: 'primary.main',
                                        //     opacity: [0.9, 0.8, 0.7],
                                        // },
                                        borderRadius: '15px',
                                        marginBottom: '0.5rem'
                                    }}
                                >
                                    <Image height={650} src={jira} />
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-evenly"
                                        }}
                                    >
                                        <Button style={{ backgroundColor: "black", color: "white" }} variant="outlined">
                                            Jira clone
                                        </Button>
                                        <Link href="#" target="_blank">
                                            <GitHubIcon style={{ fontSize: 35 }} />
                                        </Link>
                                        <Link href="#" target="_blank">
                                            <SlideshowIcon style={{ fontSize: 35 }} />
                                        </Link>
                                    </Box>
                                </Box>

                                <Box
                                    sx={{
                                        width: 220,
                                        height: 150,
                                        // backgroundColor: 'red',
                                        // '&:hover': {
                                        //     backgroundColor: 'primary.main',
                                        //     opacity: [0.9, 0.8, 0.7],
                                        // },
                                        borderRadius: '15px',
                                        marginBottom: '0.5rem'
                                    }}
                                >
                                    <Image src={excel} />
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-evenly"
                                        }}
                                    >
                                        <Button style={{ backgroundColor: "black", color: "white" }} variant="outlined">
                                            excel clone
                                        </Button>
                                        <Link href="#" target="_blank">
                                            <GitHubIcon style={{ fontSize: 35 }} />
                                        </Link>
                                        <Link href="#" target="_blank">
                                            <SlideshowIcon style={{ fontSize: 35 }} />
                                        </Link>
                                    </Box>
                                </Box>

                                {/* <Box
                                    sx={{
                                        width: 220,
                                        height: 150,
                                        // backgroundColor: 'red',
                                        // '&:hover': {
                                        //     backgroundColor: 'primary.main',
                                        //     opacity: [0.9, 0.8, 0.7],
                                        // },
                                        borderRadius: '15px',
                                        marginBottom: '0.5rem'
                                    }}
                                >
                                    <Image src={insta} />
                                    <Box 
                                        sx={{
                                            display:"flex",
                                            flexWrap:"wrap",
                                            alignItems:"center", 
                                            justifyContent:"space-evenly"
                                        }}
                                    >
                                        <Button style={{ backgroundColor: "black", color: "white" }} variant="outlined">
                                            Reels clone
                                        </Button>
                                        <Link href="#" target="_blank">
                                            <GitHubIcon style={{ fontSize: 35 }} />
                                        </Link>
                                        <Link href="#" target="_blank">
                                            <SlideshowIcon style={{ fontSize: 35 }} />
                                        </Link>
                                    </Box>
                                </Box>

                                <Box
                                    sx={{
                                        width: 220,
                                        height: 150,
                                        // backgroundColor: 'red',
                                        // '&:hover': {
                                        //     backgroundColor: 'primary.main',
                                        //     opacity: [0.9, 0.8, 0.7],
                                        // },
                                        borderRadius: '15px',
                                        marginBottom: '0.5rem'
                                    }}
                                >
                                    <Image src={insta} />
                                    <Box 
                                        sx={{
                                            display:"flex",
                                            flexWrap:"wrap",
                                            alignItems:"center", 
                                            justifyContent:"space-evenly"
                                        }}
                                    >
                                        <Button style={{ backgroundColor: "black", color: "white" }} variant="outlined">
                                            Reels clone
                                        </Button>
                                        <Link href="#" target="_blank">
                                            <GitHubIcon style={{ fontSize: 35 }} />
                                        </Link>
                                        <Link href="#" target="_blank">
                                            <SlideshowIcon style={{ fontSize: 35 }} />
                                        </Link>
                                    </Box>
                                </Box> */}

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default About
