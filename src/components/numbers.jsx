import { Box, Button, Typography } from "@mui/material"
import { useContext, useState } from "react"
import { TicketContext } from "./context"

export const NumberPad = () => {
    const NumberBlock = {
        width: "110px",
        height: "70px",
        textAlign: "center",
        border: "1px solid #e9e9e9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    const {SetTickets,Tickets} = useContext(TicketContext)

    const [ticket, SetTicket] = useState("")

    // if(Tickets.length>=6)

    return ticket.length < 6 ? (
        <Box sx={{mt:5}}>
            <Box sx={{height:"50px",m:"auto"}}>

            <Typography >

                {ticket}
            </Typography>

            </Box>
            <Box sx={{ display: "flex" }}>
                <Box sx={NumberBlock} onClick={() => { SetTicket(ticket + "7") }}>
                    <Typography>

                        7
                    </Typography>

                </Box>
                <Box sx={NumberBlock} onClick={() => { SetTicket(ticket + "8") }}>
                    <Typography>

                        8
                    </Typography>

                </Box>
                <Box sx={NumberBlock} onClick={() => { SetTicket(ticket + "9") }}>
                    <Typography>

                        9
                    </Typography>

                </Box>
            </Box>

            <Box sx={{ display: "flex" }}>

                <Box sx={NumberBlock} onClick={() => { SetTicket(ticket + "4") }}>
                    <Typography>

                        4
                    </Typography>

                </Box>
                <Box sx={NumberBlock} onClick={() => { SetTicket(ticket + "5") }}>
                    <Typography>

                        5
                    </Typography>

                </Box>
                <Box sx={NumberBlock} onClick={() => { SetTicket(ticket + "6") }}>
                    <Typography>

                        6
                    </Typography>

                </Box>
            </Box>

            <Box sx={{ display: "flex" }}>
                <Box sx={NumberBlock} onClick={() => { SetTicket(ticket + "1") }}>
                    <Typography>

                        1
                    </Typography>

                </Box>
                <Box sx={NumberBlock} onClick={() => { SetTicket(ticket + "2") }}>
                    <Typography>

                        2
                    </Typography>

                </Box>
                <Box sx={NumberBlock} onClick={() => { SetTicket(ticket + "3") }}>
                    <Typography>

                        3
                    </Typography>

                </Box>
            </Box>

            <Box sx={{ display: "flex" }}>

                <Box sx={NumberBlock}>clear</Box>
                <Box sx={NumberBlock} onClick={() => { SetTicket(ticket + "0") }}>
                    <Typography>

                        0
                    </Typography>

                </Box>
                <Box sx={NumberBlock}>delet</Box>
            </Box>
            <Box>
                <Button sx={{width:"100%"}} disabled>+ Add Ticket</Button>
            </Box>
        </Box>
    ) : (
        <Box sx={{mt:5}} >
            <Typography sx={{height:"50px"}}>

                {ticket}
            </Typography>
            <Box sx={{ display: "flex" }}>
                <Box sx={NumberBlock} onClick={() => { alert("limet reached") }}>
                    <Typography>

                        7
                    </Typography>

                </Box>
                <Box sx={NumberBlock} onClick={() => { alert("limet reached") }}>
                    <Typography>

                        8
                    </Typography>

                </Box>
                <Box sx={NumberBlock} onClick={() => { alert("limet reached") }}>
                    <Typography>

                        9
                    </Typography>

                </Box>
            </Box>

            <Box sx={{ display: "flex" }}>

                <Box sx={NumberBlock} onClick={() => { alert("limet reached") }}>
                    <Typography>

                        4
                    </Typography>

                </Box>
                <Box sx={NumberBlock} onClick={() => { alert("limet reached") }}>
                    <Typography>

                        5
                    </Typography>

                </Box>
                <Box sx={NumberBlock} onClick={() => { alert("limet reached") }}>
                    <Typography>

                        6
                    </Typography>

                </Box>
            </Box>

            <Box sx={{ display: "flex" }}>
                <Box sx={NumberBlock} onClick={() => { alert("limet reached") }}>
                    <Typography>

                        1
                    </Typography>

                </Box>
                <Box sx={NumberBlock} onClick={() => { alert("limet reached") }}>
                    <Typography>

                        2
                    </Typography>

                </Box>
                <Box sx={NumberBlock} onClick={() => { alert("limet reached") }}>
                    <Typography>

                        3
                    </Typography>

                </Box>
            </Box>

            <Box sx={{ display: "flex" }}>

                <Box sx={NumberBlock}>clear</Box>
                <Box sx={NumberBlock} onClick={() => { alert("limet reached") }}>
                    <Typography>

                        0
                    </Typography>

                </Box>
                <Box sx={NumberBlock}>delet</Box>
            </Box>
            <Box>
                <Button onClick={()=>{
                    if(Tickets.length<=5){
                        SetTickets([...Tickets,ticket])
                        SetTicket("")
                    }else{
                        alert("limit reached")
                    }
                }} >+ Add Ticket</Button>
            </Box>
        </Box>
    )
}
