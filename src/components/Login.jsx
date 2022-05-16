import React from 'react'
import { Stack } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import BasicButton from './form-components/BasicButton';
import BackButton from './form-components/BackButton';

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
        <div id="parent" className='w-full h-screen bg-background-login bg-cover'>
            <BackButton text={'Guess who ?'} bgcolor='#F8CE3D' navigate='/'/>
                <Stack spacing={2}
                    alignItems="center" >
                    <Stack spacing={3}
                        direction="column"
                        alignItems="center"
                        className='w-96 border-2 bg-white rounded-3xl p-10 pb-20 mt-20'>
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
            <BasicButton navigate='/' text='Login'/>
                    </Stack>
                </Stack>
            </div>
    )
}

export default Login