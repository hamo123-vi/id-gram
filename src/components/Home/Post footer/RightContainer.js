import React from 'react';
import '../../../style/post.css';
import { InnerContainer } from './InnerContainer';
import save from '../../../assets/Save.png'
export const RightContainer = () => {

    return(
        <div className='right-container'>
            <InnerContainer src={save} />
        </div>
    )
}