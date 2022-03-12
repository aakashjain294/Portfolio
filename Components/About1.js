import { Button, Link } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import reactIcon from "../assets/reactIcon.png";
import HTML from "../assets/HTML.png";
import CSS from "../assets/CSS.png";
import JAVA from "../assets/JAVA.png";
import MUI from "../assets/MUI.png";
import leetcode from "../assets/leetcode.png";
import gfg from "../assets/gfg.png";
import insta from "../assets/Insta1.PNG";
// import news from "../assets/Newsapp.png";
import camera from "../assets/camera.PNG";
import movies from "../assets/Movies.PNG";
import jira from "../assets/jira.PNG";
import excel from "../assets/excel.PNG";
import portf from "../assets/portf.PNG";
import hackerrrank from "../assets/hackerrrank.png";
import firebase from "../assets/firebase.png";
import bootstrap from "../assets/bootstrap.png";
import JavascriptIcon from "@mui/icons-material/Javascript";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import next from "../public/favicon.ico";
import Image from "next/image";
import Footer from "./Footer";
import { withTheme } from "@emotion/react";
function About() {
  return (
    <div>
      <div className="main">
        <div className="about-project-section">
          <div className="about">
            <h3>
              <span
                style={{
                  fontSize: "23px",
                  fontStyle: "italic",
                  color: "antiquewhite",
                  margin: "2rem",
                }}
              >
                <u>ABOUT</u>
              </span>
            </h3>
            <div
            className="about-text"
            >
              Hi! This is Aakash Jain. I&apos;m currently pursuing my B.Tech
              Degree (Pre-Final Year) in Information Technology from GGSIPU.
              I&apos;m an aspiring Frontend developer who loves to learn and
              create new things and a result-oriented professional willing to
              work as a software engineer in a globally reputed company.
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "1rem",
              }}
            >
              <Button className="hire-me-btn">Resume</Button>
            </div>
          </div>
          <div className="project">
            <h3>
              <span
                style={{
                  fontSize: "23px",
                  fontStyle: "italic",
                  color: "antiquewhite",
                  margin: "2rem",
                }}
              >
                <u>PROJECTS</u>
              </span>
            </h3>
            <div className="projects-section">
              <Box
                sx={{
                  width: 250,
                  height: 200,
                  borderRadius: 3,
                  margin: "15px",
                }}
              >
                <Image
                  src={insta}
                  className="projectImage"
                  height={160}
                  width={250}
                />
                <Box
                  sx={{
                    borderColor: "blue",
                    height: "2.3rem",
                    borderRadius: 3,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Button
                    variant="outlined"
                    style={{
                      minWidth: "30px",
                      border: "none",
                    }}
                  >
                    <Link href="#" target="_blank">
                      <GitHubIcon
                        style={{ fontSize: "2rem", color: "antiquewhite" }}
                      />
                    </Link>
                  </Button>
                  <Button
                    className="hire-me-btn"
                    variant="outlined"
                    style={{
                      minWidth: "170px",
                    }}
                  >
                    Reels clone
                  </Button>

                  <Button
                    variant="outlined"
                    style={{
                      minWidth: "30px",
                      border: "none",
                    }}
                  >
                    <Link href="#" target="_blank">
                      <SlideshowIcon
                        style={{ fontSize: "2rem", color: "antiquewhite" }}
                      />
                    </Link>
                  </Button>
                </Box>
              </Box>

              <Box
                sx={{
                  width: 250,
                  height: 200,
                  borderRadius: 3,
                  margin: "15px",
                }}
              >
                <Image
                  src={portf}
                  className="projectImage"
                  height={160}
                  width={250}
                />
                <Box
                  sx={{
                    borderColor: "blue",
                    height: "2.3rem",
                    borderRadius: 3,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Button
                    variant="outlined"
                    style={{
                      minWidth: "30px",
                      border: "none",
                    }}
                  >
                    <Link href="#" target="_blank">
                      <GitHubIcon
                        style={{ fontSize: "2rem", color: "antiquewhite" }}
                      />
                    </Link>
                  </Button>
                  <Button
                    className="hire-me-btn"
                    variant="outlined"
                    style={{
                      minWidth: "170px",
                    }}
                  >
                    PortFolio
                  </Button>

                  <Button
                    variant="outlined"
                    style={{
                      minWidth: "30px",
                      border: "none",
                    }}
                  >
                    <Link href="#" target="_blank">
                      <SlideshowIcon
                        style={{ fontSize: "2rem", color: "antiquewhite" }}
                      />
                    </Link>
                  </Button>
                </Box>
              </Box>

              <Box
                sx={{
                  width: 250,
                  height: 200,
                  borderRadius: 3,
                  margin: "15px",
                }}
              >
                <Image
                  src={movies}
                  className="projectImage"
                  height={160}
                  width={250}
                />
                <Box
                  sx={{
                    borderColor: "blue",
                    height: "2.3rem",
                    borderRadius: 3,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Button
                    variant="outlined"
                    style={{
                      minWidth: "30px",
                      border: "none",
                    }}
                  >
                    <Link href="#" target="_blank">
                      <GitHubIcon
                        style={{ fontSize: "2rem", color: "antiquewhite" }}
                      />
                    </Link>
                  </Button>
                  <Button
                    className="hire-me-btn"
                    variant="outlined"
                    style={{
                      minWidth: "170px",
                    }}
                  >
                    Movies App
                  </Button>

                  <Button
                    variant="outlined"
                    style={{
                      minWidth: "30px",
                      border: "none",
                    }}
                  >
                    <Link href="#" target="_blank">
                      <SlideshowIcon
                        style={{ fontSize: "2rem", color: "antiquewhite" }}
                      />
                    </Link>
                  </Button>
                </Box>
              </Box>

              <Box
                sx={{
                  width: 250,
                  height: 200,
                  borderRadius: 3,
                  margin: "15px",
                }}
              >
                <Image
                  src={camera}
                  className="projectImage"
                  height={160}
                  width={250}
                />
                <Box
                  sx={{
                    borderColor: "blue",
                    height: "2.3rem",
                    borderRadius: 3,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Button
                    variant="outlined"
                    style={{
                      minWidth: "30px",
                      border: "none",
                    }}
                  >
                    <Link href="#" target="_blank">
                      <GitHubIcon
                        style={{ fontSize: "2rem", color: "antiquewhite" }}
                      />
                    </Link>
                  </Button>
                  <Button
                    className="hire-me-btn"
                    variant="outlined"
                    style={{
                      minWidth: "170px",
                    }}
                  >
                    Camera App
                  </Button>

                  <Button
                    variant="outlined"
                    style={{
                      minWidth: "30px",
                      border: "none",
                    }}
                  >
                    <Link href="#" target="_blank">
                      <SlideshowIcon
                        style={{ fontSize: "2rem", color: "antiquewhite" }}
                      />
                    </Link>
                  </Button>
                </Box>
              </Box>

              <Box
                sx={{
                  width: 250,
                  height: 200,
                  borderRadius: 3,
                  margin: "15px",
                }}
              >
                <Image
                  src={jira}
                  className="projectImage"
                  height={160}
                  width={250}
                />
                <Box
                  sx={{
                    borderColor: "blue",
                    height: "2.3rem",
                    borderRadius: 3,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Button
                    variant="outlined"
                    style={{
                      minWidth: "30px",
                      border: "none",
                    }}
                  >
                    <Link href="#" target="_blank">
                      <GitHubIcon
                        style={{ fontSize: "2rem", color: "antiquewhite" }}
                      />
                    </Link>
                  </Button>
                  <Button
                    className="hire-me-btn"
                    variant="outlined"
                    style={{
                      minWidth: "170px",
                    }}
                  >
                    jira clone
                  </Button>

                  <Button
                    variant="outlined"
                    style={{
                      minWidth: "30px",
                      border: "none",
                    }}
                  >
                    <Link href="#" target="_blank">
                      <SlideshowIcon
                        style={{ fontSize: "2rem", color: "antiquewhite" }}
                      />
                    </Link>
                  </Button>
                </Box>
              </Box>

              {/* <Box
                sx={{
                  width: 250,
                  height: 200,
                  borderRadius: 3,
                  margin: "15px",
                }}
              >
                <Image
                  src={news}
                  className="projectImage"
                  height={160}
                  width={250}
                />
                <Box
                  sx={{
                    borderColor: "blue",
                    height: "2.3rem",
                    borderRadius: 3,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Button
                    variant="outlined"
                    style={{
                      minWidth: "30px",
                      border: "none",
                    }}
                  >
                    <Link href="#" target="_blank">
                      <GitHubIcon
                        style={{ fontSize: "2rem", color: "antiquewhite" }}
                      />
                    </Link>
                  </Button>
                  <Button
                    className="hire-me-btn"
                    variant="outlined"
                    style={{
                      minWidth: "170px",
                    }}
                  >
                    News App
                  </Button>

                  <Button
                    variant="outlined"
                    style={{
                      minWidth: "30px",
                      border: "none",
                    }}
                  >
                    <Link href="#" target="_blank">
                      <SlideshowIcon
                        style={{ fontSize: "2rem", color: "antiquewhite" }}
                      />
                    </Link>
                  </Button>
                </Box>
              </Box> */}

              <Box
                sx={{
                  width: 250,
                  height: 200,
                  borderRadius: 3,
                  margin: "15px",
                }}
              >
                <Image
                  src={excel}
                  className="projectImage"
                  height={160}
                  width={250}
                />
                <Box
                  sx={{
                    borderColor: "blue",
                    height: "2.3rem",
                    borderRadius: 3,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Button
                    variant="outlined"
                    style={{
                      minWidth: "30px",
                      border: "none",
                    }}
                  >
                    <Link href="#" target="_blank">
                      <GitHubIcon
                        style={{ fontSize: "2rem", color: "antiquewhite" }}
                      />
                    </Link>
                  </Button>
                  <Button
                    className="hire-me-btn"
                    variant="outlined"
                    style={{
                      minWidth: "170px",
                    }}
                  >
                    excel clone
                  </Button>

                  <Button
                    variant="outlined"
                    style={{
                      minWidth: "30px",
                      border: "none",
                    }}
                  >
                    <Link href="#" target="_blank">
                      <SlideshowIcon
                        style={{ fontSize: "2rem", color: "antiquewhite" }}
                      />
                    </Link>
                  </Button>
                </Box>
              </Box>
            </div>
          </div>
        </div>
        <div className="skills-profile-section">
          <div className="skills-section">
            <h1 style={{ textAlign: "center" }}>
              <span
                style={{
                  color: "antiquewhite",
                }}
              >
                <u>SKILLS</u>
              </span>
            </h1>
            <div className="skills-btn">
              <Button
                style={{
                  marginLeft: "0.2rem",
                  marginBottom: "0.1rem",
                  backgroundColor: "#0d144f",
                  color: "antiquewhite",
                }}
                variant="outlined"
              >
                React js
                <Image height={25} width={35} src={reactIcon} />
              </Button>
              <Button
                style={{
                  marginLeft: "0.2rem",
                  marginBottom: "0.1rem",
                  backgroundColor: "#0d144f",
                  color: "antiquewhite",
                }}
                variant="outlined"
              >
                Html
                <Image height={25} width={30} src={HTML} />
              </Button>
              <Button
                style={{
                  marginLeft: "0.2rem",
                  marginBottom: "0.1rem",
                  backgroundColor: "#0d144f",
                  color: "antiquewhite",
                }}
                variant="outlined"
                endIcon={<JavascriptIcon style={{ fontSize: 30 }} />}
              >
                javascript
              </Button>
              <Button
                style={{
                  marginLeft: "0.2rem",
                  marginBottom: "0.1rem",
                  backgroundColor: "#0d144f",
                  color: "antiquewhite",
                }}
                variant="outlined"
              >
                css
                <Image height={25} width={30} src={CSS} />
              </Button>
              <Button
                style={{
                  marginLeft: "0.2rem",
                  marginBottom: "0.1rem",
                  backgroundColor: "#0d144f",
                  color: "antiquewhite",
                }}
                variant="outlined"
              >
                Material ui
                <Image height={25} width={30} src={MUI} />
              </Button>
              <Button
                style={{
                  marginLeft: "0.2rem",
                  marginBottom: "0.1rem",
                  backgroundColor: "#0d144f",
                  color: "antiquewhite",
                }}
                variant="outlined"
              >
                java
                <Image height={25} width={30} src={JAVA} />
              </Button>
              <Button
                style={{
                  marginLeft: "0.2rem",
                  marginBottom: "0.1rem",
                  backgroundColor: "#0d144f",
                  color: "antiquewhite",
                }}
                variant="outlined"
              >
                next js
                <Image height={25} width={30} src={next} />
              </Button>
              <Button
                style={{
                  marginLeft: "0.2rem",
                  marginBottom: "0.1rem",
                  backgroundColor: "#0d144f",
                  color: "antiquewhite",
                }}
                variant="outlined"
                endIcon={<GitHubIcon />}
              >
                git/github
              </Button>
              <Button
                style={{
                  marginLeft: "0.2rem",
                  marginBottom: "0.1rem",
                  backgroundColor: "#0d144f",
                  color: "antiquewhite",
                }}
                variant="outlined"
              >
                bootstrap
                <Image height={25} width={30} src={bootstrap} />
              </Button>
              <Button
                style={{
                  marginLeft: "0.2rem",
                  marginBottom: "0.1rem",
                  backgroundColor: "#0d144f",
                  color: "antiquewhite",
                }}
                variant="outlined"
              >
                firebase
                <Image height={25} width={30} src={firebase} />
              </Button>
              <Button
                style={{
                  marginLeft: "0.2rem",
                  marginBottom: "0.1rem",
                  backgroundColor: "#0d144f",
                  color: "antiquewhite",
                }}
                variant="outlined"
              >
                alogithms
              </Button>
              <Button
                style={{
                  marginLeft: "0.2rem",
                  marginBottom: "0.1rem",
                  backgroundColor: "#0d144f",
                  color: "antiquewhite",
                }}
                variant="outlined"
              >
                data structures
              </Button>
            </div>
          </div>
          <div className="profile-section">
            <h1 style={{ textAlign: "center" }}>
              <span
                style={{
                  color: "antiquewhite",
                }}
              >
                <u>PROFILES</u>
              </span>
            </h1>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <Link href="#" target="_blank">
                  <GitHubIcon style={{ fontSize: 35, color:"antiquewhite" }} />
                </Link>
                <Link href="#" target="_blank">
                  <LinkedInIcon style={{ fontSize: 35, color:"antiquewhite" }} />
                </Link>
                <Link href="#" target="_blank">
                  <Image height={40} width={40} src={leetcode}/>
                </Link>
                <Link href="#" target="_blank">
                  <Image height={40} width={40} src={gfg} />
                </Link>
                <Link href="#" target="_blank">
                  <Image height={40} width={40} src={hackerrrank} />
                </Link>
              </div>
              <div style={{ textAlign: "center", color: "antiquewhite" }}>
                -----------------------------------
              </div>
              <div
                style={{
                   display:"flex",fontSize:"1.4rem",color:"antiquewhite",marginTop:"0.2rem",marginLeft:"1rem"
                }}
              >
                <PhoneIcon style={{ fontSize: 35, marginLeft: "0.5rem", color:"antiquewhite" }} />
                <span style={{ fontSize: "1.1rem" }}>:- +91 9625783388</span>
              </div>
              <div
                style={{
                    display:"flex",fontSize:"1.4rem",color:"antiquewhite",marginTop:"0.2rem",marginLeft:"1rem"
                }}
              >
                <EmailIcon style={{ fontSize: 30, marginLeft: "0.5rem" }} />
                <span style={{ fontSize: "1rem" }}>
                    :- officialaakashjain119@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
