import React, { useEffect} from 'react';
import { showNav } from '../../assets/js/showNav';
import '../../style/home.css';
import { Primary } from './Primary';
import { Secondary } from './Secondary';

export const Home = () => {

    useEffect(() => {
        showNav()
    },[])

    return(
            <div className='home-container'>
                <Primary />
                <Secondary />
            </div>
    )
}
