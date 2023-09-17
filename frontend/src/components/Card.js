import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({post}) => {
    return (
        <div className='mb-6 w-4/5 mx-auto md:max-w-2xl mt-8'>
        <Link to={`/posts/${post._id}`}>
        <article className="mb-6 w-full mx-auto  md:max-w-2xl overflow-hidden rounded-lg shadow transition hover:shadow-lg md:flex">
            <img
                alt="Office"
                src={`${post.bannerPic.url}`}
                className="h-36 w-full object-cover md:h-56"
            />

            <div className="bg-white p-4 sm:p-6 dark:bg-slate-800 dark:text-white">
                <time dateTime="2022-10-10" className="block text-xs text-gray-500 dark:text-white">
                    {post.createdAt}
                </time>

                    <h3 className="mt-0.5 text-lg font-semibold text-gray-900 dark:text-white">
                        How to position your furniture for positivity
                    </h3>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-white">
                    {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                    dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                    sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                    voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                    Molestias explicabo corporis voluptatem? */}
                    {post.content}
                </p>

                <div className='flex mt-2 space-x-2 items-center dark:text-white'>
                    <img className="w-5 h-5 rounded-full" src="https://source.unsplash.com/random" alt="Rounded avatar" />
                    <h1 className='text-xs text-zinc-500 dark:text-white'>By Kent Francois</h1>
                </div>
            </div>
            
        </article>
        </Link>
        </div>
        
    )
}

export default Card