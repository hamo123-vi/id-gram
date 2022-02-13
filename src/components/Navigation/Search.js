import React from 'react';
import { SearchIcon } from './Vectors/SearchIcon';
import '../../style/navigation.css';

export const Search = () => {

    return(
        <div className='search-box'>
            <SearchIcon />
            <input type="text" placeholder={ 'Search: '} className='search' disabled />
        </div>
    )
}