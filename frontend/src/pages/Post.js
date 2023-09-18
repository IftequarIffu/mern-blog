import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Post = () => {

    const params = useParams();
    const postId = params.postId
    const [post, setPost] = useState(null)
    // console.log(postId)

    useEffect(() => {

        const getPost = async (postId) => {

            const response = await axios.get(`http://localhost:1111/posts/${postId}`)
            const post = response.data
            // console.log(post)
            setPost(post)
            // if(post){
            //     const tag = await document.getElementById("content")
            //     tag.innerHTML = post.content
            //     console.log(tag)
            // }

        }

        getPost(postId)

        

    }, [postId])



    return (
        <div className='w-4/5 md:max-w-3xl mx-auto dark:text-white '>
            
            {
                post ? (
                    <div>
                    <div className='flex justify-center'>
                        <img src={post.bannerPic?.url} className='rounded-lg max-h-84' alt="bannerPic"/>
                    </div>
                    <h1 className='mt-6 text-5xl text-center font-semibold'>{post.title}</h1>
                    <p className='mt-4 text-3xl text-center font-light'>{post.summary}</p>
                    <p className='mt-4 text-xl p-2' id="content">
                        {/* {
                            () => {
                                if(post){
                                    const tag = document.getElementById("content")
                                    tag.innerHTML = post.content
                                    console.log(tag)
                                }
                                else{
                                    const tag = document.getElementById("content")
                                    tag.innerHTML = null
                                }
                            }
                        } */}
                    </p>
                    </div>
                ) : (<h1>Loading</h1>)
            }
            
            
        </div>
    )
}

export default Post