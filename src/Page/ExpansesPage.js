import { Box, Typography, Stack, Snackbar, InputBase } from '@mui/material'
import React, { useState, useEffect, useRef } from 'react';
import { collection, setDoc, doc, query, orderBy, onSnapshot, updateDoc } from 'firebase/firestore';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { db } from '../Firebase/firebase-connection';
import { useSelector } from 'react-redux'

export default function ExpansesPage({ open }) {



    const [data, setData] = useState([]);
    const exAmountRef = useRef();
    const [exAmount,setExAmount] = useState(null);
    const myRef = useRef();
    const [send, setSend] = useState(false);
    const [totalExpense, setExpense] = useState(0);

    const budget = useSelector(state => state.budget);
    const totalBudget = useSelector(state => state.totalBudget);



    const getData = async () => {
        const Collection = collection(db, "Budget");
        try {

            const q = query(Collection, orderBy("date", "desc"));
            onSnapshot(q, (snapshot) => {
                setData(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }))
                );
            })


        } catch (e) {
            console.log(e);
        }
    }

    const onClick = async (id, date, title, code, desc, budget,expenses) => {
        try {
           
            await setDoc(doc(db, "Budget", id), {
                date: date,
                title: title,
                code: code,
                desc: desc,
                budgetAmount: budget,
                expenseAmount:expenses + Number(exAmount),
                remainingAmount:budget - expenses - Number(exAmount)
            });
            setSend(true);
           
        } catch (e) {
            console.log(e);
        }
    }

   

    // const totalData = (data) => {
    //     var temp_budget = 0;
    //     var temp_expenses = 0;

    //     data.map((curr) => {
    //         temp_budget += Number(curr.budgetAmount);
    //         temp_expenses += Number(curr.expenseAmount);
    //     });
    //     setBudget(temp_budget);
    //     setExpense(temp_expenses);
    //     // console.log(totalBudget,totalExpense);
    // }
    useEffect(() => {
        // totalData(budget.data);


    }, [budget.data]);
   




    return (
        <Box sx={{ marginTop: "64px", position: "absolute", marginLeft: `${open === true ? "8%" : "0%"}`, transition: ".5s", width: `${open === true ? '92%' : '100%'}`, backgroundColor: '#f4f5fa', minHeight: "90vh" }}>
            <Stack sx={{ flexDirection: "row", marginTop: "20px", alignItems: "center", justifyContent: "center" }}>
                <Typography variant="h2" sx={{ fontSize: "50px", color: "secondary.main" }}>खर्च</Typography>
                {/* <Stack sx={{ padding: "15px 25px", backgroundColor: "text.light", gap: "5px", borderRadius: "4px", border: "1px solid #bfbfbf", position: "absolute", right: "40px", top: "20px" }}>
                    <Stack sx={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Typography variant="h3" sx={{ fontSize: "20px", color: "green" }}>
                            कुल बजेट : </Typography>
                        <Typography variant="h3" sx={{ fontSize: "20px", color: "green" }}>
                            रु {totalBudget} /- </Typography>
                    </Stack>
                    <Stack sx={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Typography variant="h3" sx={{ fontSize: "20px", color: "red" }}>
                            कुल खर्च : </Typography>
                        <Typography variant="h3" sx={{ fontSize: "20px", color: "red" }}>
                            रु {"0"}/- </Typography>
                    </Stack>
                    <Stack sx={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Typography variant="h3" sx={{ fontSize: "20px", color: "blue" }}>
                            बाकी रखम :</Typography>
                        <Typography variant="h3" sx={{ fontSize: "20px", color: "blue" }}>
                            रु {"0"} /- </Typography>
                    </Stack>
                </Stack> */}
            </Stack>
            <Stack sx={{ gap: "20px", margin: "80px 20px" }}>
                {
                    budget.data?.map((curr, indx) => (
                        <Stack key={indx} sx={{ padding: "25px 10px", backgroundColor: "white", borderRadius: "5px", border: "1px solid gray", gap: "10px" }}>
                            <Stack sx={{ flexDirection: "row",gap:"5px" }}>
                                <Typography variant='h3' sx={{ color: "secondary.main", fontSize: "18px" }}>मिति :</Typography>
                                <Typography variant='h2' sx={{ color: "secondary.main", fontSize: "18px" }}>
                                    {curr.date}
                                </Typography>
                            </Stack>
                            <Stack sx={{
                                flexDirection: "row", alignItem: "center", justifyContent: "space-between"
                            }} key={indx}>
                                <Stack gap="5px">
                                    <Typography variant='h3' sx={{ color: "secondary.main", fontSize: "18px" }}>
                                        शीर्षक
                                    </Typography>
                                    <Typography variant='h2' sx={{ color: "secondary.main", fontSize: "18px" }}>
                                        {curr.title}
                                    </Typography>
                                </Stack>
                                <ArrowForwardIcon sx={{ color: "secondary.main", fontSize: "30px" }} />
                                <Stack gap="5px">
                                    <Typography variant='h3' sx={{ color: "secondary.main", fontSize: "18px" }}>
                                        शोरोत
                                    </Typography>
                                    <Typography variant='h2' sx={{ color: "secondary.main", fontSize: "18px" }}>
                                        {curr.code}
                                    </Typography>
                                </Stack>
                                <ArrowForwardIcon sx={{ color: "secondary.main", fontSize: "30px" }} />
                                <Stack gap="5px">
                                    <Typography variant='h3' sx={{ color: "secondary.main", fontSize: "18px" }}>
                                        कुल बजेट
                                    </Typography>
                                    <Typography variant='h2' sx={{ color: "secondary.main", fontSize: "18px" }}>
                                        {"रु " + curr.budgetAmount}
                                    </Typography>
                                </Stack>
                                <Stack gap="5px">
                                    <Typography variant='h3' sx={{ color: "secondary.main", fontSize: "18px" }}>
                                        खर्च
                                    </Typography>
                                    <input placeholder="खर्च" type='number' onChange={(e) => {
                                        setExAmount(e.target.value);
                                    }} />
                                    <button
                                        onClick={() => {
                                            if(curr.remainingAmount >= Number(exAmount)){
                                                onClick(curr.id, curr.date, curr.title, curr.code, curr.desc, curr.budgetAmount,curr.expenseAmount);
                                               
                                            }else{
                                                alert("अवैध रकम");
                                            }
                                        }}
                                    >
                                        जडान गर्नुहोस्
                                    </button>
                                </Stack>
                                <Stack gap="5px">
                                    <Typography variant='h3' sx={{ color: "secondary.main", fontSize: "18px" }}>
                                        बाकी रखम
                                    </Typography>
                                    <Typography variant='h2' sx={{ color: "secondary.main", fontSize: "18px" }}>
                                        रु {curr.remainingAmount }

                                    </Typography>
                                </Stack>
                            </Stack>
                            <Stack sx={{ flexDirection: "row",gap:"5px" }}>
                                <Typography variant='h2' sx={{ color: "secondary.main", fontSize: "18px" }}>वर्णन :</Typography>
                                <Typography variant='h3' sx={{ color: "secondary.main", fontSize: "18px" }}>
                                    {curr.desc}
                                </Typography>
                            </Stack>
                        </Stack>
                    ))
                }
            </Stack>
            <Snackbar open={send} onClose={() => {
                setSend(false);
            }} message={"रेकर्ड सफलतापूर्वक भयो"}
                autoHideDuration={3000}
            />


        </Box>
    )
}
