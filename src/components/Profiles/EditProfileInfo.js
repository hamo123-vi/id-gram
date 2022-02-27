import React, {useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import '../../style/forms.css';
import { disableButton } from '../../assets/js/disableButton';
import { enableButton } from '../../assets/js/enableButton';

import axios from 'axios';
import { enterMe } from '../../rootSlice';

export const EditProfileInfo = () => {

    const email = useSelector(state => state.me.email)
    const fullname = useSelector(state => state.me.fullname)
    const username = useSelector(state => state.me.username)
    const image = useSelector(state => state.me.image)

    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm({defaultValues:{ email, username, fullname }})

    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState(`http://localhost:5000/profilepicture/${image}`)

    useEffect(() => {
        if (!selectedFile) {
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }

    const uploadInfo = (data) => {

        disableButton('post-submit-button')

        var formData = new FormData();
        if(selectedFile) {
            formData.append("image", selectedFile)
        }
        formData.append("fullname", data.fullname);
        formData.append("username", data.username);
        formData.append("email", data.email);

       axios.post("http://localhost:5000/api/v1/auth/updatedetails", formData, { headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }})
                  .then(() => {
                      alert('Success')
                  }).catch(() =>
                    {
                        enableButton('post-submit-button')
                        alert("Error")
                })
    }

  return (
        <div id='edit' className='insta-form'>
            <form noValidate encType="multipart/form-data" onSubmit={handleSubmit(uploadInfo)}>
                <div className='edit-profile-picture-container'>
                    <img className='edit-picture' src={preview} alt='' />
                    <div className='label-div'>
                        <p className='username-on-edit'>{username}</p>
                        <label id='edit-picture-label' htmlFor='editImage' className='image-upload'>
                            Edit profile picture
                        </label>
                    </div>
                    <input id='editImage' type='file' name='image' onChange={onSelectFile}/>
                </div>
                <input type='email' {...register('email')} name='email' className='text-input' placeholder='Email: ' />
                <input type='text' {...register('fullname')} name='fullname' className='text-input' placeholder='Full Name: ' />
                <input type='text' {...register('username')} name='username' className='text-input' placeholder='Username: ' />
                <input type='submit' className='submit-button' value='Update'/>
            </form>
        </div>
    );
}