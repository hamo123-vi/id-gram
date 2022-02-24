import React from 'react';
import '../../style/forms.css';
import { Link } from 'react-router-dom'

export const AuthLink = props => {

  return (
        <div className='auth-link-container'>
            <p className='auth-link-text'>{props.text}&nbsp;<Link style={{ textDecoration: 'none' }} to = {props.path} ><span class='link'>{props.link}</span></Link></p>
        </div>
    );
}