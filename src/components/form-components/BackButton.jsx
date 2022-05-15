import React from "react";
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { fontSize } from "@mui/system";

const BackButton = ({text,navigate='' , bgcolor}) => {
    // const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    //     color: theme.palette.getContrastText(purple[500]),
    //     backgroundColor: purple[500],
    //     '&:hover': {
    //       backgroundColor: purple[700],
    //     },
    //   }));

    if (navigate!=''){
    return( 
        <Link to={navigate}>
        <Button className='w-30 h-18' size="large"  variant="contained" startIcon={<ArrowBackIosIcon/>} 
        sx={{ bgcolor: bgcolor , fontSize: '20px', 
        '&:hover': {
            backgroundColor: 'white',
          },}}>{text}</Button>

        </Link>
    )
    } else {
    return(
        <Button className='w-60' variant="contained" >{text}</Button>
    )
    }
}

export default BackButton;