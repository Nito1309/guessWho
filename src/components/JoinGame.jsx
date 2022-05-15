import React from 'react'
import { Stack, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import BasicButton from './form-components/BasicButton';

function JoinGame() {
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
    
    return (
        <div id="parent" className='w-full h-screen bg-background-join bg-cover'>
                <Stack spacing={2}
                    alignItems="center" >
                    <Stack spacing={3}
                        direction="column"
                        alignItems="center"
                        className='w-96 border-2 rounded-3xl p-10 pb-20 mt-20'>
                        <h1 className='text-3xl'>Join Game</h1>
                        <h2 className='text-2xl'>Enter Game ID</h2>
                       <TextField className="w-9/12" id="outlined-basic" label="Gamer ID" variant="outlined"/>
            <BasicButton navigate='/' text='Enter'></BasicButton>
                    </Stack>
                </Stack>
            </div>
    )
}

export default JoinGame