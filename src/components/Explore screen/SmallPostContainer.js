import React from 'react';
import { useSelector } from 'react-redux';
import '../../style/explore.css'
import { Image } from '../Home/Image'

export const SmallPostContainer = () => {

    const exp = useSelector(state => state.explorePosts);
    let expList = []

    
    for(let i=3; i< exp.length; i++) {
        expList[i-3] = exp[i];
    }
    

    return(
        <div className='second-container'>
            <>
                {
                    expList.map((post, index) => {
                        return(
                            <div className='small-post' key={index}>
                                <Image src={`http://localhost:5000/posts/${post.image}`} />
                            </div>
                        );
                    })
                } 
            </>
        </div>
    )
}