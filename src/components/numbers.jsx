import { Box, Button, Typography } from "@mui/material"
import { useState } from "react"

export const NumberPad = ({ number }) => {
    const NumberBlock = {
        width: "90px",
        height: "70px",
        textAlign: "center",
        border: "1px solid #e9e9e9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"

    }

    const [ticket, SetTicket] = useState("")


    return ticket.length < 6 ? (
        <Box sx={{mt:5}}>
            <Typography>

                {ticket}
            </Typography>
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
            <Typography>

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
                <Button>+ Add Ticket</Button>
            </Box>
        </Box>
    )
}
