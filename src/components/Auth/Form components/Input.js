import React from 'react';
import '../../../style/forms.css';

export const Input = props  => {

  return (
        <div id={props.divId} className='input-container'>
            <input id={props.id} type={props.type} accept={props.accept} name={props.name}
                className={props.className} placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
        </div>
    );
    }