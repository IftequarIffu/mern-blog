import React from 'react'
import { UseSelector, useSelector } from 'react-redux'

const Hero = () => {

  const posts = useSelector((state) => state.posts)
  console.log(posts)

  return (
    <div className='border-b-2 border-gray-300 dark:border-b-1 dark:border-gray-700 py-4 bg-zinc-200 dark:bg-inherit pb-16'>
        <div className='w-1/2 mx-auto py-10 '>
          <h1 className='text-center text-5xl md:text-6xl font-light  dark:text-white'>Thoughts, Stories and Ideas from Narrative</h1>
          <div className='flex justify-center  mt-12'>
              <input type="text" className='rounded-xl md:w-3/5' placeholder='Search for posts'/>
              <button className='bg-green-600 text-white rounded-xl px-6 ms-2 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600'>Search</button>
          </div>
        </div>
    </div>
  )
}

export default Hero