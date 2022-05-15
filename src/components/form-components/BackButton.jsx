import React from "react";
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';

const BackButton = ({text,navigate='' }) => {
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
        <Button className='w-60'  variant="contained" >{`<  ${text}`}</Button>
        </Link>
    )
    } else {
    return(
        <Button className='w-60' variant="contained" >{text}</Button>
    )
    }
}

export default BackButton;