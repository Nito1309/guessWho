import{ Stack, Button }from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

//        <Button variant="contained" startIcon={<AccountCircleIcon/>} >First Button!</Button>

function App() {
  return (
    <div>
      <h1>Guess Who</h1>
      <AccountCircleIcon/>
      Nito1309
      <Stack spacing={2} >
        <Button variant="contained" >Crear partida</Button>
        <Button variant="contained" >Unirse a partida</Button>
        <Button variant="contained" >Iniciar sesi&oacute;n</Button>
        <Button variant="contained" >Configuraci&oacute;n</Button>
      </Stack>
    </div>
   
  );
}

export default App;
