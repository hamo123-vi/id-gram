import React from 'react';
import '../../../style/home.css';
import { StoryImage } from './StoryImage';
import { StoryName } from './StoryName';

export const Story = props => {

    return(
        <div className='story'>
            <StoryImage imgClass='story-image' src={props.src}/>
            <StoryName username={props.username} />
        </div>
    )
}