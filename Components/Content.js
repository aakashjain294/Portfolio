import React from 'react'
import Image from 'next/image'
// import profile from '../assets/profile.jpg'
import Typical from 'react-typical'
import { Button } from '@mui/material'
import profile from '../assets/profile.jpg'
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Content() {
    return (
        <div className="content">
            <div className='content-detail'>
                <div className='detail'>
                    <h1 >Hello, I'M <span style={{ color: "#182C61", fontWeight: "bolder" }}>Aakash Jain</span></h1>
                    <h2>
                        <Typical
                            loop={Infinity}
                            wrapper="b"
                            color="antiquewhite"
                            steps={[
                                'Frontend Developer 🔥', 1000, "Enthusiast Coder 🤠", 1000, " Designer✌"]}
                        />
                    </h2>
                    <p style={{fontSize:"large", fontStyle:"italic", color:"darkslategrey"}}>Knack of building applications with front end operations.</p>
                </div>
                <div className='detail-button-container'>
                    <Button className='hire-me-btn' style={{marginLeft: "-1.5rem"}} variant="contained">Hire me</Button>
                    <Button className='resume-btn' style={{marginLeft: "0.5rem"}} variant="contained">Get Resume</Button>

                </div>
            </div>
            <div className='content-image'>
                <div className="profile-container">
                    <Image className='profile-img' height={340} width={300} src={profile} />
                </div>
            </div>
        </div>
    )
}

export default Content
