import { Stack, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import BusinessIcon from '@mui/icons-material/Business';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import React from 'react'

export default function Order4() {

   
  return (
    <Stack sx={{marginLeft:"10px",gap:"20px",flexDirection:"column"}}>
        <Stack sx={{flexDirection:"row",gap:"10px",alignItems:"center"}}>
            <BusinessIcon sx={{fontSize:"30px",color:"text.main"}}/>
            <Typography variant='h2' sx={{color:"text.main",fontSize:"20px"}}>कार्यालय व्यवस्थापन</Typography>
        </Stack>
        <Stack sx={{flexDirection:"row",gap:"10px",alignItems:"center"}}>
            <ArrowForwardIosIcon sx={{fontSize:"20px",color:"white"}}/>
            <Typography variant='h3' sx={{color:"white",fontSize:"16px"}}>कार्यालयको विवरण</Typography>
        </Stack>
        <Stack sx={{flexDirection:"row",gap:"10px",alignItems:"center"}}>
            <ArrowForwardIosIcon sx={{fontSize:"20px",color:"white"}}/>
            <Typography variant='h3' sx={{color:"white",fontSize:"16px"}}>कार्यालयका शाखाहरू</Typography>
        </Stack>
        <Stack sx={{flexDirection:"row",gap:"10px",alignItems:"center"}}>
            <AssignmentIndIcon sx={{fontSize:"30px",color:"text.main"}}/>
            <Typography variant='h2' sx={{color:"text.main",fontSize:"20px"}}>कर्मचारी व्यवस्थापन</Typography>
        </Stack>
        <Stack sx={{flexDirection:"row",gap:"10px",alignItems:"center"}}>
            <ArrowForwardIosIcon sx={{fontSize:"20px",color:"white"}}/>
            <Typography variant='h3' sx={{color:"white",fontSize:"16px"}}>पदको विवरण</Typography>
        </Stack>
        <Stack sx={{flexDirection:"row",gap:"10px",alignItems:"center"}}>
            <ArrowForwardIosIcon sx={{fontSize:"20px",color:"white"}}/>
            <Typography variant='h3' sx={{color:"white",fontSize:"16px"}}>कर्मचारीको विवरण</Typography>
        </Stack>
        <Stack sx={{flexDirection:"row",gap:"10px",alignItems:"center"}}>
            <ArrowForwardIosIcon sx={{fontSize:"20px",color:"white"}}/>
            <Typography variant='h3' sx={{color:"white",fontSize:"16px"}}>प्रयोगकर्ताको विवरण</Typography>
        </Stack>
    </Stack>
  )
}
