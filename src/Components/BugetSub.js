import { Button, Stack, Typography } from '@mui/material'
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import React from 'react'

export default function BudgetSub() {
  return (
    <Stack sx={{ marginLeft:"10px",gap:"20px",flexDirection:"column"}}>
      {/* <Stack sx={{ flexDirection: "row", alignItems: "center", gap: "5px" }}>
        <InsertLinkIcon sx={{ fontSize: "30px", color: "text.main" }} />
        <Typography variant='h3' sx={{ fontSize: "20px", color: "text.main" }}>दर्ता सम्बन्धि</Typography>
      </Stack>
      <Button sx={{
        alignItems: 'center',
        width:"200px",
        border : "2px solid gray",
        color: "white",
        backgroundColor: "primary.light", "&:hover": {
          backgroundColor: "primary.main",
        }, fontSize: "14px", borderRadius: "3px"
      }} >
       <Stack sx={{flexDirection:"row",gap:"10px",alignItems:"center"}}>
       <AddCircleOutlineRoundedIcon sx={{ fontSize: "30px", color: "white" }} />
       <Typography  variant='h2' sx={{ fontSize: "19px", color: "white" }}> नयाँ दर्ता</Typography>
       </Stack>

      </Button>
      <Button sx={{
        alignItems: 'center',
        width:"200px",
        border : "2px solid gray",
        color: "white",
        backgroundColor: "primary.light", "&:hover": {
          backgroundColor: "primary.main",
        }, fontSize: "14px", borderRadius: "3px"
      }} >
       <Stack sx={{flexDirection:"row",gap:"10px",alignItems:"center"}}>
       <InsertLinkIcon sx={{ fontSize: "30px", color: "white" }} />
       <Typography  variant='h2' sx={{ fontSize: "19px", color: "white" }}>दर्ता रेकोर्ड</Typography>
       </Stack>

      </Button> */}
    </Stack>
  )
}
