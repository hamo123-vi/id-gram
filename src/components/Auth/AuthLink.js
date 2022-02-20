import React from 'react';
import '../../style/forms.css';

export const AuthLink = props => {

  return (
        <div className='auth-link-container'>
            <p className='auth-link-text'>{props.text}&nbsp;<span class='link'>{props.link}</span></p>
        </div>
    );
}