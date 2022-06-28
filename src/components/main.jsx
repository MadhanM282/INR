import { Box } from "@mui/material"
import { useState } from "react"
import { NumberPad } from "./numbers"
// import { NumberSection } from "./numbersection"

export const Main = ()=>{
    const [Num,setNum] = useState("")
    return (
        <Box sx={{border:1,width:"fit-content",pb:5}}>
            {Num}
            <NumberPad number={setNum}/>
        </Box>
    )
}


