import React from 'react'
import '../../style/navigation.css';
import { Explore } from './Vectors/Explore';
import { Heart } from './Vectors/Heart';
import { Home } from './Vectors/Home';
import { Inbox } from './Vectors/Inbox';
import { Profile } from './Vectors/Profile';
import { Upload } from './Vectors/Upload';

export const MenuButton = () => {

    return(
        <div className='menu-button-container'>
            <Home />
            <Inbox />
            <Explore />
            <Upload />
            <Heart />
            <Profile />
        </div>
    )
}
