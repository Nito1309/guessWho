import React from 'react'
import { Stack } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BasicButton from './form-components/BasicButton';

function Menu() {
    return (
        <div id="parent" className='w-full h-screen bg-background-menu bg-cover'>
                <Stack spacing={2}
                    alignItems="center" >
                    <Stack spacing={3}
                        direction="column"
                        alignItems="center"
                        className='w-96 border-2 rounded-3xl p-10 pb-20 mt-20'>
                        <h1 className='text-3xl'>Guess Who</h1>
                        < AccountCircleIcon color='primary' sx={{ fontSize: 50 }} />
                       <BasicButton navigate='/creategame' text="Create game"/>
                        <BasicButton navigate='/join' text='Join Game'/>
                       <BasicButton navigate='/login' text="Login"/>
                        <BasicButton navigate='/leaderboard' text='Leaderboard'/>
                    </Stack>
                </Stack>
        </div>
    )
}

export default Menu