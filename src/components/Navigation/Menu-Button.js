import React from 'react'
import { Link } from 'react-router-dom';
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
            <Link to='/home'>
                <Home />
            </Link>
            
            <Inbox />

            <Link to='/explore'>
                <Explore />
            </Link>
            
            <Upload />

            <Link to = '/user'>
                <Heart />
            </Link>
            
            <Link to='/me'>
                <Profile />
            </Link>

        </div>
    )
}
