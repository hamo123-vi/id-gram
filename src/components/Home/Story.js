import React from 'react';
import '../../style/home.css';
import { StoryImage } from './StoryImage';
import { StoryName } from './StoryName';

export const Story = () => {

    return(
        <div className='story'>
            <StoryImage />
            <StoryName />
        </div>
    )
}