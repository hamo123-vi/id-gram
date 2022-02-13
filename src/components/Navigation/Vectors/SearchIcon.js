import React from 'react';
import '../../../style/navigation.css';
import icon from '../../../assets/Search.png'

export const SearchIcon = () => {

    return(
        <div className='search-icon-container'>
            <img src={icon} alt="Error" className='search-icon'/>
        </div>
    )
}