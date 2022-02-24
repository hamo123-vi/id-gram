import React from 'react';
import '../../style/home.css';
import { Primary } from './Primary';
import { Secondary } from './Secondary';

export const Home = () => {

    return(
            <div className='home-container'>
                <Primary />
                <Secondary />
            </div>
    )
}
