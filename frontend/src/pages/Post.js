import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Spinner from '../components/Spinner'

const Post = () => {

    const params = useParams();
    const postId = params.postId
    const [post, setPost] = useState(null)
    // console.log(postId)

    useEffect(() => {

        const getPost = async (postId) => {

            const response = await axios.get(`http://localhost:1111/posts/${postId}`)
            const responseData = response.data
            console.log(responseData)
            setPost(responseData)

        }

        getPost(postId)

        

    }, [postId])




    return (
        <div className='w-4/5 md:max-w-3xl mx-auto dark:text-white pt-4'>
            
            {
                post ? (
                    <div>
                    <div className='flex justify-center'>
                        <img src={post.bannerPic?.url} className='rounded-lg max-h-84' alt="bannerPic"/>
                    </div>
                    <h1 className='mt-6 text-5xl text-center font-semibold'>{post.title}</h1>
                    <p className='mt-4 text-3xl text-center font-light'>{post.summary}</p>
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>
                ) : (<Spinner />)
            }
            
            
        </div>
    )
}

export default Post