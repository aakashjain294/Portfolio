import React from 'react'
import { Link } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
function Footer() {
    return (
        <div style={{
            height: "100px",
            backgroundColor: "#182C61",
            // borderTop: "1px solid #e0e0e0",
            paddingTop: "20px",
            color: "antiquewhite",
            textAlign: "center",
        }}>
            <div className='social-icons'>
            </div>
            <footer>
                <div>
                    <Link href="#" target="_blank">
                        <GitHubIcon style={{ fontSize: 35 }} />
                    </Link>
                    <Link href="#" target="_blank">
                        <LinkedInIcon style={{ fontSize: 35 }} />
                    </Link>
                    <Link href="#" target="_blank">
                        <EmailIcon style={{ fontSize: 35 }} />
                    </Link>
                </div>
                <div className="mui-container mui--text-center" >
                   <span >Made with ♥ by Aakash Jain</span> 
                </div>
            </footer>
        </div >
    )
}

export default Footer
