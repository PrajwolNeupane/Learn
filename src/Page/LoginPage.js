import { Box, Button, Stack } from '@mui/material'
import React, { useRef } from 'react';
import logo from '../img/logo.svg';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase-auth.js';
import { Navigate } from 'react-router-dom';

export default function LoginPage({ user }) {


    const emailRef = useRef();
    const passwordRef = useRef();


    const onClick = async () => {

        try {
            await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
        } catch (e) {
            console.log(e);
        }

    }

    return (
        <>
            {
                user === null ? <Box sx={{ backgroundColor: "#eb9250", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Stack sx={{ backgroundColor: "primary.main", gap: "20px", alignItems: "flex-start", padding: "50px 20px", borderRadius: "10px", border: "5px solid white" }}>
                        <Stack sx={{ justifyContent: "center", width: "100%", alignItems: "center" }}>
                            <img src={logo} style={{ width: "130px" }} />
                        </Stack>
                        <input type={"email"} placeholder="युजरनेम वा ई-मेल" style={{ fontSize: "16px", padding: "1px 2px" }} ref={emailRef} width={"100%"} />
                        <input type={"password"} placeholder="पासवर्ड" style={{ fontSize: "16px", padding: "1px 2px" }} ref={passwordRef} />
                        <Stack sx={{ flexDirection: "row", justifyContent: "flex-start", gap: "10px" }}>
                            <input type={"checkbox"} id="box" />
                            <label htmlFor="box" style={{ fontWeight: 500, fontSize: "15px", color: "#444444" }}>मलाई सम्झनुहोस्</label>
                        </Stack>
                        <Stack sx={{ alignItems: "center", justifyContent: "center", width: "100%" }}>
                            <Button sx={{
                                fontWeight: 600,
                                width: "100%",
                                fontSize: "16px",
                                color: "primary.main",
                                backgroundColor: "white", "&:hover": {
                                    backgroundColor: "white",
                                },
                                borderRadius: "2px",
                                border: "none"
                            }} onClick={() => {
                                onClick();
                            }}
                            >
                                प्रवेश गार्नुहोस
                            </Button>
                        </Stack>
                    </Stack>
                </Box> : <Navigate to="/"/>
            }
        </>
    )
}
