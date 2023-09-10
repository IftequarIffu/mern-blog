import React from 'react'
import { Link } from 'react-router-dom'

const Card = () => {
    return (
        <div className='mb-6 w-4/5 mx-auto md:max-w-2xl mt-8'>
        <Link to="/login">
        <article className="mb-6 w-full mx-auto md:max-w-2xl overflow-hidden rounded-lg shadow transition hover:shadow-lg md:flex">
            <img
                alt="Office"
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                className="h-36 w-full object-cover md:h-56"
            />

            <div className="bg-white p-4 sm:p-6">
                <time datetime="2022-10-10" className="block text-xs text-gray-500">
                    10th Oct 2022
                </time>

                <a href="#">
                    <h3 className="mt-0.5 text-lg text-gray-900">
                        How to position your furniture for positivity
                    </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                    dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                    sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                    voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                    Molestias explicabo corporis voluptatem?
                </p>

                <div className='flex mt-2 space-x-2 items-center'>
                    <img className="w-5 h-5 rounded-full" src="https://source.unsplash.com/random" alt="Rounded avatar" />
                    <h1 className='text-xs text-zinc-500'>By Kent Francois</h1>
                </div>
            </div>
            
        </article>
        </Link>
        </div>
        
    )
}

export default Card