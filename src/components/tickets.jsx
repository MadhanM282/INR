import { Box, Typography } from "@mui/material"
import { useContext } from "react"
import { TicketContext } from "./context"

export const Tickets = () => {
    const { Tickets } = useContext(TicketContext)

    return (
        <Box sx={{ display: "flex", gap: 5, backgroundColor: "#1d78c7"}}>
            {Tickets.map((e) => {
                return <Box sx={{height:"100px",m:"auto",display: "flex",alignItems: "center"}}>

                    <Typography>
                        {e}
                    </Typography>
                </Box>
            })}
        </Box>
    )
}