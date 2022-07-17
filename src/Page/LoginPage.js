import { Box, Button, Stack } from '@mui/material'
import React from 'react';
import logo from '../img/logo.svg';

export default function LoginPage() {
    return (
        <Box sx={{backgroundColor:"#eb9250",minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <Stack sx={{width:"25%",backgroundColor:"primary.main",gap:"20px",alignItems:"center",padding:"50px 180px",borderRadius:"10px",border:"5px solid white"}}>
                <img src={logo} style={{ width: "100px" }} />
                <input type={"email"} placeholder="युजरनेम वा ई-मेल" style={{fontSize:"16px",padding:"1px 3px"}}/>
                <input type={"password"} placeholder="पासवर्ड" style={{fontSize:"16px",padding:"1px 3px"}}/>
                <Stack sx={{flexDirection:"row",width:"100%"}}>
                    <input type={"checkbox"} id="box" />
                    <label for="box">मलाई सम्झनुहोस्</label>
                </Stack>
                <Button>
                    प्रवेश गार्नुहोस
                </Button>
            </Stack>
        </Box>
    )
}
