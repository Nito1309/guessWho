import React from 'react'
import { Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import BasicButton from './form-components/BasicButton';
import BackButton from './form-components/BackButton';

function Login() {
    
    return (
        <div id="parent" className='w-full h-screen bg-background-login bg-cover'>
            <BackButton text={'Guess who ?'} bgcolor='#F8CE3D' navigate='/'/>
                <Stack spacing={2}
                    alignItems="center" >
                    <Stack spacing={3}
                        direction="column"
                        alignItems="center"
                        className='w-96 border-2 bg-white rounded-3xl p-10 pb-20 mt-20'>
                        <h1 className='text-3xl'>Signup</h1>
                        <h2 className='text-2xl'>Signup to start guessing !</h2>
                       <TextField className="w-9/12" id="outlined-basic" label="Name" variant="outlined"/>
                       <TextField className="w-9/12" id="outlined-basic" label="Lastname" variant="outlined"/>
                       <TextField className="w-9/12" id="outlined-basic" label="Nickname" variant="outlined"/>
                       <TextField className="w-9/12" id="outlined-basic" label="Email" variant="outlined"/>
                       <TextField type="password" className="w-9/12" id="outlined-basic" label="Password" variant="outlined"/>
            <BasicButton navigate='/' text='Signup'/>
                    </Stack>
                </Stack>
            </div>
    )
}

export default Login