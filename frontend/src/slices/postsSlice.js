import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const postsSlice = createSlice(
    {
    name: 'posts',
    initialState: null,
    reducers: {
        setPosts : async (state, action) => {

            try {
                const response = await axios.get("http://localhost:1111/posts")
                const posts = response.data
                const newState = {
                    posts: posts
                }
                return newState
            } catch (error) {
                console.log(error)
                return null
            }

            // You cannot simply do state = {userId: action.payload.userId, userName: action.payload.userName}.
            // This will not work.
            // Use the return statement instead as implemented above.
        },
        
    }
    }
)

export default postsSlice.reducer
export const {setUserInfo, unsetUserInfo} = postsSlice.actions