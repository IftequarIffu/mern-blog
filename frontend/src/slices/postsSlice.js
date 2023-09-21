import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const postsSlice = createSlice(
    {
    name: 'posts',
    initialState: null,
    reducers: {
        setPosts : (state, action) => {

            
            const newState = action.payload
            return newState
            

            // You cannot simply do state = {userId: action.payload.userId, userName: action.payload.userName}.
            // This will not work.
            // Use the return statement instead as implemented above.
        }
        
    }
    }
)

export default postsSlice.reducer
export const {setPosts} = postsSlice.actions