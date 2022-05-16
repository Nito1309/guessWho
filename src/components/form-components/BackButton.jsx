import React from "react";
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { fontSize } from "@mui/system";

const BackButton = ({text,navigate='' , bgcolor}) => {
    if (navigate!==''){
    return( 
        <Link to={navigate}>
        <Button className='w-30 h-18 !mt-10' size="large"  variant="contained" startIcon={<ArrowBackIosIcon/>} 
        sx={{ bgcolor: bgcolor , fontSize: '20px', //TODO change magic numbers
        '&:hover': {
            backgroundColor: adjustColor(bgcolor,-20),  },}}>{text}</Button>

        </Link>
    )
    } else {
    return(
        <Button className='w-60' variant="contained" >{text}</Button>
    )
    }
}
function adjustColor(color, amount) {
    return '#' + color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
}
export default BackButton;