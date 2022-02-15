import React, { useEffect, useState } from 'react';
import '../../style/home.css';
import arrow from '../../assets/Arrow.png';
import { StorySection } from './Story section/StorySection';
import { Post } from './Post';

export const Primary = () => {

    let [counter, setCounter] = useState(0);

   /* useEffect(() => {
        if(counter > 0) {
            document.getElementById('scroll-left-button-container').style.visibility = 'visible'
        } else {
            document.getElementById('scroll-left-button-container').style.visibility = 'hidden'
            document.getElementById('story-section').style.paddingLeft = '1px'
        }
    })

    const scrollRight = () => {
        setCounter(counter+1);
        document.getElementById('story-section').scrollBy(250,0);
        
    }

    const scrollLeft = () => {
            setCounter(counter-1)
            document.getElementById('story-section').scrollBy(-250,0);
    }*/

    return(
        <div className='primary-home'>
            <StorySection />
            <Post />   
        </div>
    )
}