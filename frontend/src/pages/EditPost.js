import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditPost = () => {

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
        ],
    }

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ]

    const params = useParams()
    const postId = params.postId

    const [post, setPost] = useState(null)

    useEffect(() => {

        const getPost = async(postId) => {

            try {
                const response = await axios.get(`http://localhost:1111/posts/${postId}`)
                const postData = response.data
                setPost(postData)
            } catch (error) {
                console.log(error)
            }
        }

        getPost(postId)
    }, [postId])


    const editPost = async(e) => {
        e.preventDefault()
        
        try {
            const formData = new FormData()
            formData.append('title', post.title)
            formData.append('summary', post.summary)
            formData.append('content', post.content)
            formData.append('bannerPic', post.bannerPic)
            const response = await axios.post(`http://localhost:1111/posts/${postId}/edit`, formData)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
        

    }

    const uploadImage = (e) => {
        // console.log(e.target.files)
        

        setPost({
            ...post,
            bannerPic: e.target.files[0]
        })
        // console.log(post)
    }



    return (
        
        <div className='w-3/4 md:max-w-2xl mx-auto pt-4'>
            <h1 className='mb-8 text-3xl font-semibold dark:text-white'>Edit this post</h1>
            {
                post ? (
                    
            <form className='dark:text-white' encType="multipart/form-data">
                <div className="mb-6">
                    <input type="text" value={post.title} onChange={(e) => setPost({...post, title: e.target.value})} id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title" required />
                </div>
                <div className="mb-6">
                    <input type="text" value={post.summary} onChange={(e) => setPost({...post, summary: e.target.value})} id="summary" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Summary" required />
                </div>

                <input name="bannerPic" onChange={(e) => uploadImage(e)} className="block w-full mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file" />

                {/* <textarea id="message" rows={8} className="block p-2.5 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Post content here..." defaultValue={""} /> */}

                <div className='rounded-full'>
                    <ReactQuill theme="snow" className='rounded-full mb-20' style={{height: '200px'}} modules={modules} formats={formats} value={post.content} onChange={(newValue) => setPost({...post, content: newValue})}/>
                </div>
                <div className='flex space-x-4'>

                <button type="reset" onClick={(e) => setPost({...post, content: ""})} className="text-white  bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-700 dark:hover:bg-red-800 dark:focus:ring-red-800">Clear Text</button>
                <button type="submit" onClick={(e) => editPost(e)} className="text-white  bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-700 dark:hover:bg-green-800 dark:focus:ring-green-800">Submit</button>

                </div>
            </form>
                ) : (
                    <h2 className='text-center dark:text-white'>Loading...</h2>
                )
            }
            


        </div>
    )
}

export default EditPost