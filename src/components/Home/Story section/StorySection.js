import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import { enterUsers, enterUser, enterUserprofile } from '../../../rootSlice';
import '../../../style/home.css';
import { Story } from './Story';

export const StorySection = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector(state => state.users);

    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/users', {headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }}).then((res) => {
            const users = res.data.data;
            dispatch(enterUsers(users))
        }) }, []);

    let userList = Array.from(users).map((user,index)=>{
        return (
            <div onClick={() => onClick(user._id)}>
                <Story username={user.username} src={user.image} key={index}/>
            </div>
    )});

    function onClick(id)  {
        axios.get(`http://localhost:5000/api/v1/users/${id}`, {headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }}).then((res) => {
            const user = res.data.user;
            dispatch(enterUser(user));
            dispatch(enterUserprofile(1));
            navigate("/user")
        }) }

    return(
        <div id='story-section' className='story-section'>
            { userList }
        </div>

    )
}