import React, {useEffect, useState} from 'react';
import { Input } from '../Auth/Form components/Input';
import img from '../../assets/1.png'
import '../../style/forms.css';

export const EditProfileInfo = () => {

    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }

    const uploadPhoto = () => {
        alert('Post uploaded');
    }

  return (
        <div id='edit' className='insta-form'>
            <form>
                <div className='edit-profile-picture-container'>
                    <img className='edit-picture' src={preview} alt='Error' />
                    <div class='label-div'>
                        <p className='username-on-edit'>amil.valjevac</p>
                        <label id='edit-picture-label' htmlFor='editImage' className='image-upload'>
                            Edit profile picture
                        </label>
                    </div>
                    <Input id='editImage' divId='edit-image' type='file' name='profile-picture' onChange={onSelectFile}/>
                </div>
                <Input type='email' name='email' className='text-input' placeholder='Email: ' />
                <Input type='text' name='full-name' className='text-input' placeholder='Full Name: ' />
                <Input type='text' name='user-name' className='text-input' placeholder='Username: ' />
                <Input type='submit' className='submit-button' value='Update' onClick={uploadPhoto}/>
            </form>
        </div>
    );
}