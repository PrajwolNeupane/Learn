import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Footer({ open }) {
    return (
        <> {
            open === true ? <Box sx={{position:"fixed",bottom:"0px",left:"8vw",zIndex:"0",width:"92%",backgroundColor:"#e28743",padding:"10px 0px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                <Typography sx={{fontSize:"12px",color:"white",marginLeft:"20px"}} variant="h4">चालु आर्थिक वर्ष: २०७८/२०७९ | आजकाे मिति: २०७९-०३-३२</Typography>
                <Typography sx={{fontSize:"12px",color:"white",marginRight:"20px"}} variant="h4">सर्वाधिकार सुरक्षित © २०२२</Typography>
            </Box> : <></>
        }
        </>
    )
}
