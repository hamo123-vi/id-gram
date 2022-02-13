import React from 'react';
import { Logo } from './Logo';
import { Search } from './Search'
import { MenuButton } from './Menu-Button';
import '../../style/navigation.css'


export const Navigation = () => {

    return(
        <div className='navigation-container'>
            <div className='navigation-outer'>
                <div className='navigation-inner'>
                    <Logo />
                    <Search />
                    <MenuButton />
                </div>
            </div>
        </div>
    )

}