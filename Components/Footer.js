import { Box, Container, Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import Link from "next/link";
function Footer() {
    return (
        <footer>
      <Box color="white" style={{ backgroundColor: "#182c61", height: "11vh" }}>
        <Container maxWidth="lg">
          <Box
            textAlign="center"
            pt={{ xs: 2, sm: 5 }}
            pb={{ xs: 5, sm: 0 }}
            sx={{ pt: "10px", pb: "10px" }}
            display="flex"
            flexDirection="column"
          >
            <div style={{cursor:"pointer"}}>
              <Link
                href="https://github.com/ajStyles119"
                target="_blank"
                marginRight={2}
              >
                <GitHubIcon 
                style={{ fontSize: 30 }}/>
              </Link>
              <Link
                href="https://www.linkedin.com/in/aakash-jain-2593591aa/"
                target="_blank"
                marginRight={2}
                
              >
                <LinkedInIcon style={{ fontSize: 30 }}/>
              </Link>
              <Link
                href="mailto:officialaakashjain119@gmail.com"
                target="_blank"
                marginRight={2}
              >
                <EmailIcon style={{ fontSize: 30 }}/>
              </Link>
              
              <Link
                href="tel:9625783388"
                target="_blank"
                marginRight={2}
              >
                <PhoneIcon style={{ fontSize: 30 }}/>
              </Link>
            </div>
            <div style={{marginTop:"0.2rem"}}>Made with 🤍 by Aakash Jain &reg; {new Date().getFullYear()}</div>
          </Box>
        </Container>
      </Box>
    </footer>
    )
}

export default Footer
