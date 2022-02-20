import React from 'react';
import '../../../style/forms.css';

export const Input = props  => {

  return (
        <div className='input-container'>
            <input id={props.id} type={props.type} name={props.name} className={props.className} placeholder={props.placeholder} value={props.value}/>
        </div>
    );
    }