import { Box } from "@mui/material"
import { useState } from "react"
import { NumberPad } from "./numbers"
import { Wheel } from "./wheel"
// import { NumberSection } from "./numbersection"

export const Main = () => {
    // const [Num, setNum] = useState("")
    return (

        <Box sx={{ display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#186ab4" }}>

            <Box sx={{ width: "fit-content", borderRadius: 3, boxShadow: 4,backgroundColor:"white" }}>
                <NumberPad />
            </Box>
            <Box sx={{width: "fit-content"}}>
                <Wheel />

            </Box>
        </Box>
    )
}


