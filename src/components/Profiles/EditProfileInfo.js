import React from 'react';
import { Input } from '../Auth/Form components/Input';
import img from '../../assets/1.png'
import '../../style/forms.css';

export const EditProfileInfo = () => {

  return (
        <div className='insta-form'>
            <form>
                <div className='edit-profile-picture-container'>
                    <img className='edit-picture' src={img} alt='Error' />
                    <label for='edit-image' className='image-upload'>
                        Select image
                    </label>
                    <Input id='edit-image' type='file' name='profile-picture' />
                </div>
                <Input type='email' name='email' className='text-input' placeholder='Email: ' />
                <Input type='text' name='full-name' className='text-input' placeholder='Full Name: ' />
                <Input type='text' name='user-name' className='text-input' placeholder='Username: ' />
                <Input type='submit' className='submit-button' value='Update' />
            </form>
        </div>
    );
}