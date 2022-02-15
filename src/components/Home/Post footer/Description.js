import React from 'react';
import '../../../style/post.css';

export const Description = () => {

    const more = () => {
        if(document.getElementById('more').value !== "Less") {
            document.getElementById('description-container').style.height="auto";
            document.getElementById('more').value="Less"
        } else {
            document.getElementById('description-container').style.height="55px";
            document.getElementById('more').value="...more"
        }
    }

    return(
        <div id='description-container' className='description-container'>
            <p className='description'>
                <span className="post-publisher">amil.valjevac&nbsp;</span>
                Lorem ipsum is simply dummy text of the printing and typesetting industry.
            </p>
        </div>
    )
}