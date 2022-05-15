import React from "react";
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';

const BasicButton = ({text,navigate=''}) => {
    if (navigate!=''){
    return( 
        <Link to={navigate}>
        <Button className='w-60' variant="contained" >{text}</Button>
        </Link>
    )
    } else {
    return(
        <Button className='w-60' variant="contained" >{text}</Button>
    )
    }

}

export default BasicButton;