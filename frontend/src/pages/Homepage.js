import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import axios from 'axios'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Spinner from '../components/Spinner'
import { useSelector, useDispatch } from 'react-redux'
import { setPosts } from '../slices/postsSlice'

const Homepage = () => {


  const [posts, setPosts] = useState(null)
  const [filteredPosts, setFilteredPosts] = useState(null)
  const [query, setQuery] = useState(null)
  // const [postsList, setPostsList] = useState(useSelector((state) => state.posts))
  // const dispatch = useDispatch()

  useEffect(() => {

    const getPosts = async () => {

      try {

        const response = await axios.get("http://localhost:1111/posts")
        const posts = response.data
        // console.log(posts)
        // setPostsList(posts)
        setPosts(posts)
        setFilteredPosts(posts)


      } catch (error) {
        console.log(error)
      }

    }
    getPosts()

  }, [])

  
  useEffect(() => {

    const searchFunction = () => {
  
      if (query !== null || query !== "") {
  
        const postsAfterFiltered = posts?.filter(
          post => {
            return (
              post
                .title
                .toLowerCase()
                .includes(query.toLowerCase()) ||
              post
                .summary
                .toLowerCase()
                .includes(query.toLowerCase()) ||
              post
                .content
                .toLowerCase()
                .includes(query.toLowerCase())
            );
          }
        );
  
        setFilteredPosts(postsAfterFiltered)
      }
      else {
        setFilteredPosts(posts)
      }
  
    }

    searchFunction()
    
  }, [query])

  

  // console.log(query)
  // console.log(filteredPosts)


  return (
    <div className="space-y-8 ">
      {/* <Card />
          <Card />
          <Card /> */}

      {/* <Hero /> */}
      <div className='border-b-2 border-gray-300 dark:border-b-1 dark:border-gray-700 py-4 bg-zinc-200 dark:bg-inherit pb-16'>
        <div className='w-1/2 mx-auto py-10 '>
          <h1 className='text-center text-5xl md:text-6xl font-light  dark:text-white'>Thoughts, Stories and Ideas from Narrative</h1>
          <div className='flex justify-center  mt-12'>
            <input type="text"  value={query} onChange={(e) => setQuery(e.target.value)} className='rounded-xl md:w-3/5 w-full ' placeholder='Search for posts...' />
            {/* <button className='bg-green-600 text-white rounded-xl px-6 ms-2 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600'>Search</button> */}
          </div>
        </div>
      </div>
      <h1 className='text-center  text-4xl dark:text-white font-light'>All Articles</h1>
      <div className="grid md:grid-cols-2 w-4/5 mx-auto">
        {
          filteredPosts ? (
            filteredPosts?.map((post) => {
              return (<Card post={post} key={post._id} />)
            })
          ) : (<Spinner />)


        }
      </div>
      <Footer />
    </div>
  )
}

export default Homepage