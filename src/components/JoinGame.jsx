import React from 'react'
import { Stack, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import BasicButton from './form-components/BasicButton';
import BackButton from './form-components/BackButton';
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
            <BackButton text={'Guess who ?'} bgcolor='#1976D2' navigate='/'/>
                <Stack spacing={2}
                    alignItems="center" >
                    <Stack spacing={3}
                        direction="column"
                        alignItems="center"
                        className='w-96 border-2 rounded-3xl p-10 pb-20 mt-20'>
                        <h1 className='text-3xl'>Join Game</h1>
                        <h2 className='text-2xl'>Enter Game ID</h2>
                       <TextField className="w-9/12" id="outlined-basic" label="Gamer ID" variant="outlined"/>
            <BasicButton navigate='/creategame' text='Enter'/>
                    </Stack>
                </Stack>
            </div>
    )
}

export default JoinGame