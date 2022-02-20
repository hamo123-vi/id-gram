import React from 'react';
import { Input } from '../Auth/Form components/Input';
import '../../style/forms.css';

export const EditProfileInfo = () => {

  return (
        <div className='insta-form'>
            <form>
                <Input type='file' name='profile-picture' className='profile-picture-file-input' />
                <Input type='email' name='email' className='text-input' placeholder='Email: ' />
                <Input type='text' name='full-name' className='text-input' placeholder='Full Name: ' />
                <Input type='text' name='user-name' className='text-input' placeholder='Username: ' />
                <Input type='submit' className='submit-button' value='Update' />
            </form>
        </div>
    );
}