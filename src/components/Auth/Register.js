import React from 'react';
import { Input } from './Form components/Input';
import '../../style/forms.css';

export const Register = () => {

  return (
        <div className='form-container'>
            <form>
                <Input type='email' name='email' className='text-input' placeholder='Email: ' />
                <Input type='text' name='full-name' className='text-input' placeholder='Full Name: ' />
                <Input type='text' name='user-name' className='text-input' placeholder='Username: ' />
                <Input type='password' name='password' className='text-input' placeholder='Password: ' />
                <Input type='submit' className='submit-button'>Sign up</Input>
            </form>
        </div>
    );
}