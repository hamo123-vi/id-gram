import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import '../../style/forms.css';

export const Register = () => {

    const navigate = useNavigate();
    const email = useSelector(state => state.email);
    const fullname = useSelector(state => state.fullname);
    const username = useSelector(state => state.username);
    const password = useSelector(state => state.password);
    const { register, handleSubmit} = useForm({defaultValues:{email, fullname, username, password}})

    const onSubmit = (data) => {

        const registerData = {
            email: data.email,
            fullname: data.fullname,
            username: data.username,
            password: data.password
        }

        axios.post('http://localhost:5000/api/v1/auth/register', registerData)
        .then(res => {
            localStorage.setItem("token", res.data.token);
            navigate('/home');
        }).catch(err => { alert("Error") })
    }

  return (
        <div className='insta-form'>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div className='input-container'><input type='email' name='email' {...register('email')} className='text-input' placeholder='Email: ' /></div>
                <div className='input-container'><input type='text' name='fullname' {...register('fullname')} className='text-input' placeholder='Full Name: ' /></div>
                <div className='input-container'><input type='text' name='username' {...register('username')} className='text-input' placeholder='Username: ' /></div>
                <div className='input-container'><input type='password' name='password' {...register('password')} className='text-input' placeholder='Password: ' /></div>
                <div className='input-container'><input type='submit' className='submit-button' value='Sign up' /></div> 
            </form>
        </div>
    );
}