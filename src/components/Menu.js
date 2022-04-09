import React from 'react'
import { Stack, Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Menu() {
    return (
        <div id="parent" className='w-full h-screen bg-background-menu bg-cover'>
            <div >
                <Stack spacing={2}
                    alignItems="center" >
                    <Stack spacing={3}
                        direction="column"
                        alignItems="center"
                        className='w-96 border-2 rounded-3xl p-10 pb-20 mt-20'>
                        <h1 className='text-3xl'>Guess Who</h1>
                        < AccountCircleIcon color='primary' sx={{ fontSize: 50 }} />
                        <Button className='w-60' variant="contained" >Crear partida</Button>
                        <Button className='w-60' variant="contained" >Unirse a partida</Button>
                        <Button className='w-60' variant="contained" >Iniciar sesi&oacute;n</Button>
                        <Button className='w-60' variant="contained" >Configuraci&oacute;n</Button>
                    </Stack>
                </Stack>
            </div>
        </div>
    )
}

export default Menu