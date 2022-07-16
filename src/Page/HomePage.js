import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

export default function HomePage({ open }) {

    const arr = [
        {point:0,type:"कुल दर्ता  / चलानी"},
        {point:0,type:"दर्ता "},
        {point:0,type:" चलानी"},
        {point:0,type:"कुल दर्ता  / चलानी"},
        {point:2,type:"कुल दर्ता  / चलानी"},
    ];

    return (
        <Box sx={{ marginTop: "64px", position: "absolute", marginLeft: `${open === true ? "8%" : "0%"}`, transition: ".5s", width: `${open === true ? '92%' : '100%'}`, backgroundColor: '#f4f5fa' }}>
            <Typography variant='h3' sx={{ fontSize: "18px", margin: "20px 0px", color: "secondary.main" }} textAlign={"center"}>चालू आ.व.: २०७८/२०७९ को आजको मिति २०७९-०३-३२ सम्मको सारांश</Typography>
            <Stack sx={{ flexDirection: "row", margin: `${open === true ? "0px 3vw" : "0px 4vw"}`, transition: "0.3s",justifyContent:"space-between" }}>
                {
                    arr.map((curr, indx) => (
                        <Box sx={{ padding: "10px 0px",width:"200px", borderTop: "5px solid #eb9250", backgroundColor: "white", gap: "10px", display: "flex", flexDirection: "column", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }} key={indx}>
                            <Typography textAlign={"center"} variant="h2" sx={{ fontSize: "30px", color: "otherColor.main" }}>{curr.point}</Typography>
                            <Typography textAlign={"center"} variant="h3" sx={{ fontSize: "18px", color: "otherColor.main" }}>{curr.type}</Typography>
                        </Box>
                    ))
                }
            </Stack>
        </Box>
    )
}
