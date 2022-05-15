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

function Login() {
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    return (
        <div id="parent" className='w-full h-screen bg-background-menu bg-cover'>
                <Stack spacing={2}
                    alignItems="center" >
                    <Stack spacing={3}
                        direction="column"
                        alignItems="center"
                        className='w-96 border-2 rounded-3xl p-10 pb-20 mt-20'>
                        <h1 className='text-3xl'>Login</h1>
                        <h2 className='text-2xl'>Start guessing !</h2>
                       <TextField className="w-9/12" id="outlined-basic" label="Email" variant="outlined"/>
                       <TextField className="w-9/12" id="outlined-basic" label="Password" variant="outlined"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    InputProps={{
               endAdornment:(
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
            }}
            />
            <BasicButton text='Login'></BasicButton>
                    </Stack>
                </Stack>
            </div>
    )
}

export default Login