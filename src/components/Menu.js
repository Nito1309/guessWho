import React from 'react'
import{ Stack, Button }from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Menu() {
  return (
    <div>
      <AccountCircleIcon/>
      Nito1309
      <div >
      <Stack spacing={2} >
      <h1>Guess Who</h1>
        <Button variant="contained" >Crear partida</Button>
        <Button variant="contained" >Unirse a partida</Button>
        <Button variant="contained" >Iniciar sesi&oacute;n</Button>
        <Button variant="contained" >Configuraci&oacute;n</Button>
      </Stack>
    </div>
  </div>
  )
}

export default Menu