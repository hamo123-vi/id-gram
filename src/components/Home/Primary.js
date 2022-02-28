import React, { useEffect } from 'react';
import '../../style/home.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { enterPosts } from '../../../src/rootSlice'
import { StorySection } from './Story section/StorySection';
import { Post } from './Post';

export const Primary = () => {

    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts);


   useEffect(() => {

            axios.get("http://localhost:5000/api/v1/posts/following",  { headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }}).then((res) => {
                const posts = res.data.posts;
                dispatch(enterPosts(posts))
                }) }, []);

          let postList = posts.map((post,index)=>{
            return <Post id={post._id} src={`http://localhost:5000/posts/${post.image}`}
            user={post.user} likes={post.likes.length} key={index}/> 
          });

    return(
        <div className='primary-home'>
            <StorySection />
            { postList }
        </div>
    )
}