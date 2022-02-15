import React from 'react';
import '../../../style/home.css';
import image from '../../../assets/1.png';
import { StoryImage } from './StoryImage';
import { StoryName } from './StoryName';

export const Story = () => {

    return(
        <div className='story'>
            <StoryImage imgClass='story-image' image={image}/>
            <StoryName />
        </div>
    )
}