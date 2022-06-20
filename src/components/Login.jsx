import React, {useEffect} from 'react'
import { Stack, Typography, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import BasicButton from './form-components/BasicButton';
import BackButton from './form-components/BackButton';
import { useNavigate , useLocation } from 'react-router-dom';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import SessionObserver from './SessionObserver';


function Login({sessionUpdate}) {

    const navigate = useNavigate();
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });

      const validationSchema = Yup.object().shape({
        nickname: Yup.string()
          .required('Nickname is required')
          .max(20, 'Username must not exceed 20 characters'),
        contra: Yup.string()
          .required('Password is required')
          .max(40, ' Password must not exceed 40 characters')
      });

      const { register, control, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(validationSchema)
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

    async function onSubmit (data) {
        const jsonData = JSON.stringify(data);
            await fetch('https://gameguesswho.azurewebsites.net/api/LOGIN', {
                method: 'POST',
                headers: {
                    "Content-Type":"application/json",
                },
                body: jsonData
            })
            .then((response) => response.json())

            .then((data) => {
                if(data.success){  
                  sessionUpdate({jsonData, logged:true});   
                  navigate('/');              
                }else{
                    alert("Something went wrong");
                    navigate('/login');
                } 
            })
            .catch((error) => {
                console.error(error.message);
            });
    }

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
                       <TextField required className="w-9/12" name='nickname' id="outlined-basic" label="Nickname" variant="outlined"
                        {...register('nickname')} error={errors.nickname ? true: false}/>
                        <Typography>{errors.nickname?.message}</Typography>
                       <TextField required className="w-9/12" name='contra' id="outlined-basic" label="Password" variant="outlined"
                    {...register('contra')} error={errors.contra ? true: false}
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
            <Typography>{errors.contra?.message}</Typography>
            <Button onClick={handleSubmit(onSubmit)} className='w-60' variant="contained">Signup</Button>

                    </Stack>
                </Stack>
            </div>
    )
}

export default Login