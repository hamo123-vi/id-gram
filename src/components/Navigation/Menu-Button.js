import React from 'react'
import { Link } from 'react-router-dom';
import '../../style/navigation.css';
import { Explore } from './Vectors/Explore';
import { Heart } from './Vectors/Heart';
import { Home } from './Vectors/Home';
import { Inbox } from './Vectors/Inbox';
import { Profile } from './Vectors/Profile';
import { Upload } from './Vectors/Upload';
import { useDispatch } from 'react-redux';
import { enterUserprofile } from '../../rootSlice';

export const MenuButton = () => {

    const dispatch = useDispatch();

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

            <Heart />
            
            <Link to='/me' onClick={() => dispatch(enterUserprofile(0))}>
                <Profile />
            </Link>

        </div>
    )
}
