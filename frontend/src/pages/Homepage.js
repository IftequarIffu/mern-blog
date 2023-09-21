import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import axios from 'axios'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Spinner from '../components/Spinner'

const Homepage = () => {

  const [posts, setPosts] = useState(null)

  useEffect(() => {

    const getPosts = async () => {

      try {

        const response = await axios.get("http://localhost:1111/posts")
        const posts = response.data
        // console.log(posts)
        setPosts(posts)

      } catch (error) {
        console.log(error)
      }

    }
    getPosts()


  }, [])


  return (
    <div className="space-y-8 ">
      {/* <Card />
          <Card />
          <Card /> */}

      <Hero />
      <h1 className='text-center  text-4xl dark:text-white font-light'>All Articles</h1>
      <div className="grid md:grid-cols-2 w-4/5 mx-auto">
        {
          posts ? (
            posts.map((post) => {
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