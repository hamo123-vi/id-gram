import React from 'react';
import '../../style/profiles.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useSelector } from 'react-redux';

export const GeneralOne = props => {

    const user = useSelector(state => state.user)
    const userProfile = useSelector(state => state.userProfile);
    const navigate = useNavigate();
    console.log(userProfile)

    const follow = () => {
        if(userProfile === 0) {
            navigate('/edit-info');
            return
    } 
        
         axios.put(`http://localhost:5000/api/v1/users/follow/${user._id}`, {}, { headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        } }
        ).then((res) => {
            alert(res.data.message)
        });
    
    }

    return(
        <div className='general-one'>
            
            <div className='general'>
                <div class='profile-name'>
                    {props.username}
                </div>
                <div className="follow-button-container" onClick={() => follow()}>
                    <button className={props.buttonClass} >{props.buttonValue}</button>
                </div> 
            </div>
            <div id='profile-more-button-container' className='more-button-container'>
                <Link to={props.path}>
                    <img src={props.icon} alt='Error' className='more-button' />
                </Link>
            </div>
        </div>
    )
}