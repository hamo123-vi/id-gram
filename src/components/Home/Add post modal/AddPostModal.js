import React from 'react';
import '../../../style/add-post-modal.css';
import x from '../../../assets/x-icon-white-17.jpg';
import { ModalBody } from './ModalBody';

export const AddPostModal = () => {

    const cancel = () => {
        document.getElementById('modal').style.display = 'none';
    }

    return(
        <div id='modal' className='add-post-modal'>
            <div className='cancel-button-container'>
                <img src={x} className='cancel-button' onClick={cancel} alt='Error' />
            </div>
            <ModalBody />
        </div>
    )
}