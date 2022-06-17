import React, { useEffect, useState } from 'react'
import { Button, Stack, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import BasicButton from './form-components/BasicButton';
import BackButton from './form-components/BackButton';
import { useForm, Controller, set } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { stringify } from 'postcss';
import { useNavigate} from 'react-router-dom';

function Signup({sessionUpdate}) {
    
    const navigate = useNavigate();
    const validationSchema = Yup.object().shape({
        nombre: Yup.string().required('name is required'),
        apellido: Yup.string().required('lastname is required'),
        nickname: Yup.string()
          .required('Username is required')
          .max(20, 'Username must not exceed 20 characters'),
        correo: Yup.string()
          .required('Email is required')
          .email('Email is invalid'),
        contra: Yup.string()
          .required('Password is required')
          .max(40, 'Password must not exceed 40 characters')
      });

    const { register, control, handleSubmit,formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
    });
    
    async function onSubmit (data) {
        const jsonData = JSON.stringify(data);
            await fetch('https://guesswhofunc.azurewebsites.net/api/SIGNUP', {
                method: 'POST',
                headers: {
                    "Content-Type":"application/json",
                },
                body: jsonData
            })
            .then((response) => response.json())
            .then((data) => {
                if(data.success){
                    sessionUpdate(JSON.stringify({jsonData, logged:true}));
                    navigate('/');                
                }else{
                    alert("Something went wrong");
                    navigate('/signup');
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
                                <h1 className='text-3xl'>Signup</h1>
                                <h2 className='text-2xl'>Signup to start guessing !</h2>
                                <TextField required className="w-9/12" id="outlined-basic" name="nombre" label="Name" variant="outlined" 
                                {...register('nombre')} error={errors.nombre ? true: false}/>
                                <Typography>{errors.nombre?.message}</Typography>
                                <TextField required className="w-9/12" id="outlined-basic" name='apellido' label="Lastname" variant="outlined"
                                {...register('apellido')} error={errors.apellido ? true: false}/>
                                <Typography>{errors.nombre?.message}</Typography>
                                <TextField required className="w-9/12" id="outlined-basic" name='nickname' label="Nickname" variant="outlined"
                                {...register('nickname')} error={errors.nickname ? true: false}/>
                                <Typography>{errors.nickname?.message}</Typography>
                                <TextField required type="email" className="w-9/12" id="outlined-basic" name='correo' label="Email" variant="outlined"
                                {...register('correo')} error={errors.correo ? true: false}/>
                                <Typography>{errors.correo?.message}</Typography>
                                <TextField required type="password" className="w-9/12" id="outlined-basic" name='contra' label="Password" variant="outlined"
                                {...register('contra')} error={errors.contra ? true: false}/>
                                <Typography>{errors.contra?.message}</Typography>
                                <Button onClick={handleSubmit(onSubmit)} className='w-60' variant="contained">Signup</Button>
                        </Stack>
                </Stack>
            </div>
    )
}

export default Signup;