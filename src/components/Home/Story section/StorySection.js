import axios from 'axios';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import { enterUsers } from '../../../rootSlice';
import '../../../style/home.css';
import { Story } from './Story';

export const StorySection = () => {
    
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);

    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/users', {headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }}).then((res) => {
            const users = res.data.data;
            dispatch(enterUsers(users))
        }) }, [users]);

    let userList = Array.from(users).map((user,index)=>{
        return (
        <Link to='/user'>
            <Story id={user._id} src={`http://localhost:5000/profilepicture/${user.image}`} username={user.username} key={index}/>
        </Link> )
      });

    return(
        <div id='story-section' className='story-section'>
            { userList }
        </div>

    )
}