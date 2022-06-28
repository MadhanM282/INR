import { Box, Typography } from '@mui/material'
import img from './image.png'
export const Wheel = () => {
    return (
        <Box>

            <Typography sx={{color:"white"}}>Click on the wheel to generate rendom numbers</Typography>
            <img src={img} alt="" />
        </Box>
    )
}