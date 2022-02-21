import React, { useEffect, useState } from 'react';
import '../../../style/add-post-modal.css';
import { Input } from '../../Auth/Form components/Input';
import { AddComment } from '../Post footer/AddComment';
import { PreviewImage } from './PreviewImage';

export const ImageInputLabel = () => {

    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    useEffect(() => {
        if (!selectedFile) {
            document.getElementById('input-label').style.display = 'flex'
            document.getElementById('description-input').style.display = 'none'
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        document.getElementById('input-label').style.display = 'none'
        document.getElementById('description-input').style.display = 'flex'
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

    return(
        <div className='upload-field'>
            <PreviewImage id='uploaded-image' src={preview}/>
            <AddComment id='description-input' onClick={uploadPhoto} buttonClass='post-image-button' placeholder='Enter description...'/>
            <label id='input-label' className='image-label-button' htmlFor='imageInput'>
                    Choose an image
            </label>
            <Input type='file' id='imageInput' onChange={onSelectFile}/>
        </div>
    )
}