import React, { useEffect } from 'react';
import '../../style/home.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { enterPosts, enterPostsList } from '../../../src/rootSlice'
import { StorySection } from './Story section/StorySection';
import { Post } from './Post';

export const Primary = () => {

    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts);
    const postsList = useSelector(state => state.postsList)


   useEffect(() => {

            axios.get("http://localhost:5000/api/v1/posts/following", { headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }}).then((res) => {

                dispatch(enterPosts(res.data.posts));

                if(!posts) {
                    dispatch(enterPostsList("There are no posts yet"));
                } else {
                    dispatch(enterPostsList(posts.map((post, k) => 
                        <Post src={`http://localhost:5000/posts/${post.image}`} key={k} />
                    )));
                }
            });

        }, [])

    return(
        <div className='primary-home'>
            <StorySection />
            {postsList}
        </div>
    )
}