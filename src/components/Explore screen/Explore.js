import axios from 'axios';
import React, { useEffect } from 'react';
import { showNav } from '../../assets/js/showNav';
import '../../style/explore.css'
import { FirstContainer } from './FirstContainer';
import { SmallPostContainer } from './SmallPostContainer';
import { useDispatch, useSelector } from 'react-redux';
import { enterExplorePosts } from '../../rootSlice';

export const Explore = () => {

    const exp = useSelector(state => state.explorePosts)

    const dispatch = useDispatch();

    useEffect(() => {
        showNav();
        axios.get('http://localhost:5000/api/v1/posts/explore', { headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }}).then((res) => {
            dispatch(enterExplorePosts(res.data.posts))
        })
    },[])

    return(
        <div className='explore-screen'>
            <FirstContainer />
            <SmallPostContainer />
        </div>
    )
}