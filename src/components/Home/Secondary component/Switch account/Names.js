import React from 'react';
import '../../../../style/home.css';

export const Names = props => {

    return(
        <div className='names-container'>
            <p id={props.id} className={props.usernameClass}>amil.valjevac</p>
            <p className={props.fullnameClass}>{props.value}</p>
        </div>
    )
}