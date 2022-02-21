import React from 'react';
import '../../../style/add-post-modal.css';
import { Border } from '../Border';
import { ImageInputLabel } from './ImageInputLabel';

export const ModalBody = () => {

    return(
        <div className='modal-body'>
            <p className='add-post-text'>Create new post</p>
            <Border />
            <ImageInputLabel />
        </div>
    )
}