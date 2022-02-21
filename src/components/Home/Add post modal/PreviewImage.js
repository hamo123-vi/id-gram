import React from 'react';
import '../../../style/add-post-modal.css';


export const PreviewImage = props => {

    return(
        <div className='preview-image-container'>
            <img id={props.id} src={props.src} />
        </div>
    )
}