import { AppBar, Avatar, Stack, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../img/logo.svg';
import { Box } from '@mui/system';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NextWeekIcon from '@mui/icons-material/NextWeek';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ExpensesSub from './ExpensesSub';
import BudgetSub from './BugetSub';
import ReportSub from './ReportSub';
import { useNavigate } from 'react-router-dom';

export default function NavBar({setOpen,open}) {

    const [order,setOrder] = useState(null);
    const Navigate = useNavigate();

    return (
        <>
            <AppBar elevation={0} position="fixed">
                <Toolbar sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <MenuIcon sx={{fontSize:"35px",color:"white",cursor:"pointer"}} onClick={() => {
                        setOpen(!open);
                    }}/>
                   <Stack sx={{ flexDirection: "row", alignItems: "center", gap: "10px" }}>
                    <img src={logo} style={{width:"50px"}} alt="ok"/>
                   <Typography variant='h2' sx={{ fontSize: "22px", color: "white" }}>हाम्रो नगरपालिका, कार्यालयको ठेगाना</Typography>
                   </Stack>
                    <Stack sx={{ flexDirection: "row", alignItems: "center", gap: "10px" }}>
                        <Typography variant='h2' sx={{ fontSize: "18px", color: "white" }}>कर्मचारीको नाम</Typography>
                        <Avatar sx={{ backgroundColor: "white" }}><PersonIcon sx={{ fontSize: "35px", color: "primary.main" }} /></Avatar>
                        <Avatar sx={{ backgroundColor: "#32CD32" ,color:"#32CD32",position:"absolute",width:"10px",height:"10px",bottom:"12px",right:"25px"}}></Avatar>
                    </Stack>
                </Toolbar>
            </AppBar>
            <Box sx={{ position: "absolute", height: "100%", backgroundColor: "#eb9250",transition: ".5s", transform: `translateX(${open === true ? "0px" : "-100%"})`, display: "flex",flexDirection: "row", overflow: "hidden",zIndex:"1" }}>
                   <Stack sx={{gap:"30px"}}>
                   <Stack sx={{marginTop:"100px",gap:"5px",alignItems:"center",cursor:"pointer",width:"8vw"
                        }}  onClick={()=>{
                           setOrder(null);
                        }}>
                        <DesktopWindowsIcon sx={{fontSize:"30px",color:"white",transition:"0.3s","&:hover":{
                            fontSize:"35px"
                        }}} onClick={() => {
                            Navigate("/");
                        }}/>
                        <Typography variant='h4' sx={{ fontSize: "15px", color: "white" }}>ड्यासबोर्ड</Typography>
                    </Stack>
                    <Stack sx={{gap:"5px",alignItems:"center",cursor:"pointer",width:"8vw"}} onClick={()=>{
                        if(order === 1){
                            setOrder(null);
                        }else{
                            setOrder(null);
                        }
                        Navigate("/budget");
                    }}>
                        <AccountBalanceWalletIcon sx={{fontSize:"30px",color:"white",transition:"0.3s","&:hover":{
                            fontSize:"35px"
                        }}}/>
                        <Typography variant='h4' sx={{ fontSize: "15px", color: "white" }}>बजेट</Typography>
                    </Stack>
                    <Stack sx={{gap:"5px",alignItems:"center",cursor:"pointer",width:"8vw"}} onClick={()=>{
                        if(order === 2){
                            setOrder(null);
                        }else{
                            setOrder(2);
                        }
                    }}>
                        <NextWeekIcon sx={{fontSize:"30px",color:"white",transition:"0.3s","&:hover":{
                            fontSize:"35px"
                        }}}/>
                        <Typography variant='h4' sx={{ fontSize: "15px", color: "white" }}>खर्च</Typography>
                    </Stack>
                    <Stack sx={{gap:"5px",alignItems:"center",cursor:"pointer",width:"8vw"}} 
                    onClick={()=>{
                        if(order === 3){
                            setOrder(null);
                        }else{
                            setOrder(3);
                        }
                    }}>
                        <AssignmentIcon sx={{fontSize:"30px",color:"white",transition:"0.3s","&:hover":{
                            fontSize:"35px"
                        }}}/>
                        <Typography variant='h4' sx={{ fontSize: "15px", color: "white" }}>रिपोर्ट</Typography>
                    </Stack>

                   </Stack>
                   {
                    order !== null ?  <Stack sx={{width:"18vw",backgroundColor:"secondary.main",paddingTop:"90px",transition:".3s"}}>
                    {
                        order === 1 ? <BudgetSub /> : <></>
                    }
                    {
                        order === 2 ? <ExpensesSub /> : <></>
                    }
                    {
                        order === 3 ? <ReportSub /> : <></>
                    }
                   </Stack> : <></>
                   }
            </Box>
        </>
    )
}
