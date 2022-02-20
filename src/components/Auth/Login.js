import React from 'react';
import { Input } from './Form components/Input';
import '../../style/forms.css';

export const Login = () => {

  return (
        <div className='insta-form'>
            <form>
                <Input type='email' name='email' className='text-input' placeholder='Email: ' />
                <Input type='password' name='password' className='text-input' placeholder='Password: ' />
                <Input type='submit' className='submit-button' value='Log in' />
            </form>
        </div>
    );
}