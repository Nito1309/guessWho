import{ Stack, Button }from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function App() {
  return (
    <div>
      <h1>First commit</h1>
      <Stack spacing={2} direction="row">
        <Button variant="contained" startIcon={<AccountCircleIcon/>} >First Button!</Button>
      </Stack>
    </div>
   
  );
}

export default App;
