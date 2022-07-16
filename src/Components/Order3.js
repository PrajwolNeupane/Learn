import {  Stack, Typography } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ListIcon from '@mui/icons-material/List';
import React from 'react'

export default function Order3() {

   
  return (
    <Stack sx={{marginLeft:"10px",gap:"20px",flexDirection:"column"}}>
        <Stack sx={{flexDirection:"row",gap:"10px",alignItems:"center"}}>
            <BusinessCenterIcon sx={{fontSize:"30px",color:"text.main"}}/>
            <Typography variant='h2' sx={{color:"text.main",fontSize:"20px"}}>संघ-संस्था</Typography>
        </Stack>
        <Stack sx={{flexDirection:"row",gap:"10px",alignItems:"center"}}>
            <ArrowForwardIosIcon sx={{fontSize:"20px",color:"white"}}/>
            <Typography variant='h3' sx={{color:"white",fontSize:"16px"}}>संघ-संस्थाको प्रकार </Typography>
        </Stack>
        <Stack sx={{flexDirection:"row",gap:"10px",alignItems:"center"}}>
            <ArrowForwardIosIcon sx={{fontSize:"20px",color:"white"}}/>
            <Typography variant='h3' sx={{color:"white",fontSize:"16px"}}>संघ-संस्थाको प्रकार </Typography>
        </Stack>
        <Stack sx={{flexDirection:"row",gap:"10px",alignItems:"center"}}>
            <ArrowForwardIosIcon sx={{fontSize:"20px",color:"white"}}/>
            <Typography variant='h3' sx={{color:"white",fontSize:"16px"}}>संघ-संस्थाको दर्ता प्रकार </Typography>
        </Stack>
        <Stack sx={{flexDirection:"row",gap:"10px",alignItems:"center"}}>
            <ArrowForwardIosIcon sx={{fontSize:"20px",color:"white"}}/>
            <Typography variant='h3' sx={{color:"white",fontSize:"16px"}}>प्रेषक / प्रापक</Typography>
        </Stack>
        <Stack sx={{flexDirection:"row",gap:"10px",alignItems:"center"}}>
            <ListIcon sx={{fontSize:"30px",color:"text.main"}}/>
            <Typography variant='h2' sx={{color:"text.main",fontSize:"20px"}}>अन्य</Typography>
        </Stack>
        <Stack sx={{flexDirection:"row",gap:"10px",alignItems:"center"}}>
            <ArrowForwardIosIcon sx={{fontSize:"20px",color:"white"}}/>
            <Typography variant='h3' sx={{color:"white",fontSize:"16px"}}>साधनको विवरण</Typography>
        </Stack>
    </Stack>
  )
}
