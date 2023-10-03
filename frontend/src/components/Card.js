import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { convertMongoTimeToNormalTime } from '../utils/timeUtils'


const Card = ({post}) => {

    const [user, setUser] = useState(null)

    useEffect(() => {

        const getUserById = async(userId) => {

            try {
                // console.log("Server URI is ", process.env.REACT_APP_SERVER_URI)
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URI}/users/${userId}`)
                setUser(response.data)
                
            } catch (error) {
                console.log(error)
            }
            
        }

        getUserById(post.authorId)

    }, [])



    return (
        <div className=' w-full mx-auto md:max-w-xl mt-8 bg-inherit'>
        <Link to={`/posts/${post._id}`}>
        <article className="mb-6 w-full md:h-52 mx-auto  md:max-w-2xl overflow-hidden rounded-lg shadow transition hover:shadow-lg md:flex">
            <img
                alt="Office"
                src={`${post.bannerPic?.url}`}
                className=" w-full md:h-full  md:w-44 object-cover"
            />

            <div className="bg-white p-4 sm:p-6 dark:bg-slate-900 dark:text-white">
                <time dateTime="2022-10-10" className="block text-xs text-gray-500 dark:text-white">
                    {convertMongoTimeToNormalTime(post.createdAt)}
                </time>

                    <h3 className="mt-2 line-clamp-1 text-lg font-semibold text-gray-900 dark:text-white">
                        {post.title}
                    </h3>

                    
                    <div className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-white" dangerouslySetInnerHTML={{ __html: post.content }} />
                

                <div className='flex mt-4 space-x-2 items-center dark:text-white'>
                    <img className="w-5 h-5 rounded-full" src="https://source.unsplash.com/random" alt="Rounded avatar" />
                    <h1 className='text-xs text-zinc-500 dark:text-white'>By {user?.name}</h1>
                </div>
            </div>
            
        </article>
        </Link>
        </div>
        
    )
}

export default Card