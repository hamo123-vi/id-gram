import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { enableButton } from '../../../assets/js/enableButton';
import { disableButton } from '../../../assets/js/disableButton';
import '../../../style/add-post-modal.css';

export const ImageInputLabel = () => {

    const description = useSelector(state => state.description);

    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState();

    const { register, handleSubmit } = useForm({defaultValues: { description }});

    useEffect(() => {

        if (!selectedFile) {
            document.getElementById('input-label').style.display = 'flex'
            document.getElementById('description-input').style.display = 'none'
            setPreview(undefined)
            return
        }

        const imageUrl = URL.createObjectURL(selectedFile)
        document.getElementById('input-label').style.display = 'none'
        document.getElementById('description-input').style.display = 'flex'
        setPreview(imageUrl)
        console.log(selectedFile)

    }, [selectedFile]);

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            return
        }

        setSelectedFile(e.target.files[0])
    }

    const uploadPhoto = (data) => {

        disableButton('post-submit-button')

        var formData = new FormData();
        formData.append("image", selectedFile);
        formData.append("description", data.description);

       axios.post("http://localhost:5000/api/v1/posts/upload", formData, { headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }})
                  .then(res => {
                      enableButton('post-submit-button')
                  }).catch(() =>
                    {
                        enableButton('post-submit-button')
                        alert("Error")
                })

    }

    return(
        <div className='upload-field'>
            <div className='preview-image-container'>
                <img id='uploaded-image' src={preview} alt='Upload'/>
            </div>
            <form noValidate onSubmit={handleSubmit(uploadPhoto)} encType="multipart/form-data">
            
                <div id='description-input' className='add-comment-section'>
                    <div className='comment-input-container'>
                        <input {...register('description')} name='description' type='text' placeholder='Enter description...' className='add-comment' />
                    </div>
                    <div className='post-button-comment-container'>
                        <input id='post-submit-button' type='submit' className='post-image-button' value='Post' />
                    </div>
                </div>

                <label id='input-label' className='image-label-button' htmlFor='imageInput'>
                        Choose an image
                </label>
                <input id='imageInput' name='image' type='file' {...register('image')} onChange={onSelectFile}/>
            </form>
        </div>
    )
}