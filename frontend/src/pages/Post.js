import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { useSelector } from 'react-redux'

const Post = () => {

    const params = useParams();
    const postId = params.postId
    const [post, setPost] = useState(null)
    const userInfo = useSelector((state) => state.userInfo)
    // console.log(postId)

    useEffect(() => {

        const getPost = async (postId) => {

            const response = await axios.get(`http://localhost:1111/posts/${postId}`)
            const responseData = response.data
            console.log(userInfo)
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
                            <img src={post.bannerPic?.url} className='rounded-lg max-h-84' alt="bannerPic" />
                        </div>
                        {
                            userInfo?.userId === post?.authorId && (
                                <div className='flex justify-center mt-4'>
                                    <Link to={`/posts/${postId}/edit`}>
                                    <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                                    Edit Post
                                    </button>
                                    </Link>
                                    
                                </div>
                            )
                        }
                        

                        <h1 className='mt-8 text-5xl text-center font-semibold'>{post.title}</h1>
                        <p className='mt-8 text-3xl text-center font-light'>{post.summary}</p>
                        <div className="mt-12" dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>
                ) : (<Spinner />)
            }


        </div>
    )
}

export default Post