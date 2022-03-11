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
                    <span 
                        style={{display:"flex", 
                        justifyContent:"space-evenly", 
                        alignItems:"center", 
                        color: "#182C61", 
                        fontWeight: "bolder" }}>
                    <h1 >Hello, I&apos;M 
                        Aakash Jain
                        </h1>
                    </span>
                    <span className='typical'>
                        <Typical
                            loop={Infinity}
                            wrapper="b"
                            color="antiquewhite"
                            steps={[
                                'Frontend Developer 🔥', 1000, "Enthusiast Coder 🤠", 1000, " Designer✌"]}
                        />
                    </span>
                </div>
                <span style={{display:"flex", justifyContent:"space-evenly", marginTop:"1rem"}}>
                    <Button className='hire-me-btn' style={{marginLeft: "-1.5rem"}} variant="contained">Hire me</Button>
                    <Button className='resume-btn' style={{marginLeft: "0.5rem"}} variant="contained">Get Resume</Button>
                </span>
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
