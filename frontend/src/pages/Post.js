import React from 'react'
import { Link } from 'react-router-dom'

const Post = () => {
    return (
        <div className='w-4/5 md:max-w-3xl mx-auto'>
            <img
                alt="Office"
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                className="h-36 w-full object-cover md:h-56"
            />

            <h3 className="mt-6 text-2xl text-start font-bold md:text-4xl  text-gray-900">
                How to position your furniture for positivity?
            </h3>
            <p className='mt-2 text-zinc-500'>10th August, 2023</p>
            <div className='flex space-x-2 items-center'>
                <img className="w-5 h-5 rounded-full" src="https://source.unsplash.com/random" alt="Rounded avatar" />
                <h1 className=' text-zinc-500'>By Kent Francois</h1>
            </div>

            <p className='mt-8'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                Molestias explicabo corporis voluptatem?

            </p>
        </div>
    )
}

export default Post