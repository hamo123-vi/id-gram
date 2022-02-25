import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { disableButton } from '../../assets/js/disableButton';
import { enableButton } from '../../assets/js/enableButton';
import '../../style/forms.css';

export const Login = () => {

    const navigate = useNavigate();
    const email = useSelector(state => state.email);
    const password = useSelector(state => state.password);
    const { register, handleSubmit} = useForm({defaultValues:{email, password}})

    const onSubmit = (data) => {

        const loginData = {
            email: data.email,
            password: data.password
        }

        disableButton('log-in-button');

        axios.post('http://localhost:5000/api/v1/auth/login', loginData)
        .then(res => {
            localStorage.setItem("token", res.data.token);
            enableButton('log-in-button'); 
            navigate('/home');
        }).catch(() => {
            enableButton('log-in-button'); 
            alert("Error") 
        })
    }

  return (
        <div className='insta-form'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='input-container'><input type='email' name='email' {...register('email')} className='text-input' placeholder='Email: ' /></div>
                <div className='input-container'><input type='password' name='password' {...register('password')} className='text-input' placeholder='Password: ' /></div>
                <div className='input-container'><input id='log-in-button' type='submit' className='submit-button' value='Log in' /></div>
                
            </form>
        </div>
    );
}