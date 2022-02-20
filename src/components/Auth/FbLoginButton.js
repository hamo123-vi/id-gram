import React from 'react';
import '../../style/forms.css';

export const FbLoginButton = props => {

  return (
        <div className='fb-login-button-container'>
            <button id={props.id} className='fb-login-button'>
                <span className={props.className}></span>Log In With Facebook
            </button>
        </div>
    );
}