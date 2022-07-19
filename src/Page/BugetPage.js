import { Box, Button, Stack, TextField, Typography, MenuItem, Snackbar } from '@mui/material'
import React, { useRef, useState } from 'react';
import Calendar from "@sbmdkl/nepali-datepicker-reactjs";
import "@sbmdkl/nepali-datepicker-reactjs/dist/index.css";
import { collection, addDoc } from 'firebase/firestore';
import {db} from '../Firebase/firebase-connection';


export default function BugetPage({ open }) {


    const descRef = useRef();
    const amountRef = useRef();
    const [send,setSend] = useState(false);



    const revenue_code = [
        {
            value: '2100(प्र.स)',
            label: '2100(प्र.स)',
        },
        {
            value: '2110(स्था.स)',
            label: '2110(स्था.स)',
        },
        {
            value: '1000(के.स)',
            label: '1000(के.स)',
        },
        {
            value: '1100(पा.स)',
            label: '1100(पा.स)',
        },
    ];
    const title_option = [
        {
            value: 'तलब(Salary)',
            label: 'तलब(Salary)',
        },
        {
            value: 'निर्माण(Construction)',
            label: 'निर्माण(Construction)',
        },
        {
            value: 'महंगी(Mahangi)',
            label: 'महंगी(Mahangi)',
        },
    ];

    const [code, setCode] = useState('2100(प्र.स)');

    const [title, setTitle] = useState('तलब(Salary)');

    const changeCode = (event) => {
        setCode(event.target.value);
    };

    const changeTitle = (event) => {
        setTitle(event.target.value);
    };
    const [date, setDate] = useState("");

    const handleDate = ({ bsDate, adDate }) => {
        setDate({ date: bsDate });
    };

    const handleSubmmit = async () => {
        const BudgetCollection = collection(db,"Budget");
       try{
        await addDoc(BudgetCollection,{
            date:date.date,
            title:title,
            code:code,
            desc:descRef.current.value,
            budgetAmount:Number(amountRef.current.value),
            expenseAmount:0,
            remainingAmount:Number(amountRef.current.value)
        });
        setSend(true);
        descRef.current.value = ''
        amountRef.current.value = ""

       }catch(e){
        console.log(e);
       }
    }   

    return (
        <Box sx={{ marginTop: "64px", position: "absolute", marginLeft: `${open === true ? "8%" : "0%"}`, transition: ".5s", width: `${open === true ? '92%' : '100%'}`, backgroundColor: '#f4f5fa' }}>
            <Typography textAlign={"center"} variant="h2" sx={{ fontSize: "50px", color: "secondary.main", marginTop: "20px" }}>बजेट</Typography>
            <Stack sx={{ flexDirection: "column", gap: "20px", alignItems: "flex-start", margin: `${open === true ? "45px 30px" : "45px 70px"}`, transition: ".3s" }}>
                <Stack sx={{ flexDirection: "row", gap: "10px", alignItems: "center" }}>
                    <Typography variant='h3' sx={{ color: "secondary.main", fontSize: "18px" }}>मिति : </Typography>
                    <Calendar onChange={handleDate} />
                </Stack>
                <Stack sx={{flexDirection:"row",alignItems:"center",gap:"50px"}}>
                <Stack sx={{ flexDirection: "row", gap: "10px", alignItems: "center" }}>
                    <Typography variant='h3' sx={{ color: "secondary.main", fontSize: "18px" }}>शीर्षक : </Typography>
                    <TextField id="outlined-select-currency"
                        select
                        value={title}
                        onChange={changeTitle} sx={{ backgroundColor: "white" }}>
                        {title_option.map((option) => (
                            <MenuItem key={option.value} value={option.value} sx={{ backgroundColor: "white" }}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Stack>
                <Stack sx={{ flexDirection: "row", gap: "10px", alignItems: "center" }}>
                    <Typography variant='h3' sx={{ color: "secondary.main", fontSize: "18px" }}>शोरोत : </Typography>
                    <TextField id="outlined-select-currency"
                        select
                        value={code}
                        onChange={changeCode} sx={{ backgroundColor: "white" }}>
                        {revenue_code.map((option) => (
                            <MenuItem key={option.value} value={option.value} sx={{ backgroundColor: "white" }}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Stack>
                </Stack>
                <Stack sx={{ flexDirection: "row", gap: "10px", alignItems: "flex-start" }}>
                    <Typography variant='h3' sx={{ color: "secondary.main", fontSize: "18px" }}>वर्णन : </Typography>
                    <textarea placeholder='वर्णन लेखन ठाउँ' style={{ resize: "none", height: "200px", width: "1100px", ontSize: "16px", border: "1px solid #6c757d", borderRadius: "3px", padding: "1px 5px" }} ref={descRef}/>
                </Stack>
                <Stack sx={{ flexDirection: "row", gap: "10px", alignItems: "center" }}>
                    <Typography variant='h3' sx={{ color: "secondary.main", fontSize: "18px" }}>रकम : </Typography>
                    <input type={"number"} placeholder="रु" style={{ fontSize: "18px", border: "1px solid #6c757d", borderRadius: "3px", padding: "1px 5px" }} ref={amountRef}/>
                </Stack>
                <Button onClick={() => {
                    handleSubmmit();
                }} sx={{
                    width: "20%",
                    color: "white",
                    fontSize: "17px",
                    backgroundColor: "secondary.main", "&:hover": {
                        backgroundColor: "secondary.main",
                    },
                    borderRadius: "3px",
                    border: "1px gray solid"
                }} >
                    जडान गर्नुहोस्
                </Button>
            </Stack>
            <Snackbar open={send} onClose={() => {
                setSend(false);
            }} message={"रेकर्ड सफलतापूर्वक भयो"}
            autoHideDuration={3000}
            />
        </Box> 
    )
}
