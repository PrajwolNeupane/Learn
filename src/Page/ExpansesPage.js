import { Box, Typography, Stack } from '@mui/material'
import React from 'react'

export default function ExpansesPage({ open }) {
    return (
        <Box sx={{ marginTop: "64px", position: "absolute", marginLeft: `${open === true ? "8%" : "0%"}`, transition: ".5s", width: `${open === true ? '92%' : '100%'}`, backgroundColor: '#f4f5fa' }}>
            <Stack sx={{ flexDirection: "row", marginTop: "20px" ,alignItems:"center",justifyContent:"center"}}>
                <Typography variant="h2" sx={{ fontSize: "50px", color: "secondary.main" }}>खर्च</Typography>
                <Stack sx={{padding:"15px 25px",backgroundColor:"text.light",gap:"5px",borderRadius:"4px",border:"1px solid #bfbfbf",position:"absolute",right:"40px",top:"20px"}}>
                    <Stack sx={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <Typography variant="h3" sx={{ fontSize: "20px", color: "green" }}>
                        कुल बजेट : </Typography>
                        <Typography variant="h3" sx={{ fontSize: "20px", color: "green" }}>
                        रु 0 /- </Typography>
                    </Stack>
                    <Stack sx={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <Typography variant="h3" sx={{ fontSize: "20px", color: "red" }}>
                        कुल खर्च : </Typography>
                        <Typography variant="h3" sx={{ fontSize: "20px", color: "red" }}>
                        रु 0 /- </Typography>
                    </Stack>
                    <Stack sx={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <Typography variant="h3" sx={{ fontSize: "20px", color: "blue" }}>
                    बाकी रखम :</Typography>
                        <Typography variant="h3" sx={{ fontSize: "20px", color: "blue" }}>
                        रु 0 /- </Typography>
                    </Stack>
                </Stack>
            </Stack>


        </Box>
    )
}
