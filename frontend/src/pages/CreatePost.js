import axios from 'axios';
import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreatePost = () => {

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

    const [input, setInput] = useState({})


    const createPost = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('title', input.title)
        formData.append('summary', input.summary)
        formData.append('content', input.content)
        formData.append('bannerPic', input.bannerPic)
        const response = await axios.post('http://localhost:1111/posts/new', formData)
        console.log(response)

    }

    const changeState = (e) => {


        setInput({
            ...input,
            [e.target.name]: e.target.value
        })

    }

    const clearContent = (e) => {
        setInput({
            ...input,
            content: ""
        })
    }

    const uploadImage = (e) => {
        console.log(e.target.files)
        setInput({
            ...input,
            bannerPic: e.target.files[0]
        })
        console.log(input)
    }


    return (
        <div className='w-3/4 md:max-w-2xl mx-auto'>
            <h1 className='mb-8 text-3xl font-semibold dark:text-white'>Create a new post</h1>
            <form encType="multipart/form-data">
                <div className="mb-6">
                    <input type="text" name="title" value={input.title} onChange={(e) => changeState(e)} id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title" required />
                </div>
                <div className="mb-6">
                    <input type="text" name="summary" value={input.summary} onChange={(e) => changeState(e)} id="summary" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Summary" required />
                </div>

                <input name="bannerPic" onChange={(e) => uploadImage(e)} className="block w-full mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file" />

                {/* <textarea id="message" rows={8} className="block p-2.5 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Post content here..." defaultValue={""} /> */}

                <div className='rounded-full'>
                    <ReactQuill theme="snow" name="content" className='rounded-full mb-20 dark:text-white' style={{height: '200px'}} modules={modules} formats={formats} value={input.content} onChange={(newValue) => setInput({ ...input, content: newValue })} />
                </div>
                <div className='flex space-x-4'>

                    <button type="reset" onClick={(e) => clearContent(e)} className="text-white  bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-700 dark:hover:bg-red-800 dark:focus:ring-blue-800">Clear Text</button>
                    <button type="submit" onClick={(e) => createPost(e)} className="text-white  bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-700 dark:hover:bg-green-800 dark:focus:ring-green-800">Submit</button>

                </div>
            </form>


        </div>
    )
}

export default CreatePost