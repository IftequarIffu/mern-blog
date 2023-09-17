import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice(
    {
    name: 'userInfo',
    initialState: null,
    reducers: {
        setUserInfo : (state, action) => {

            const newState = {
                userId: action.payload.userId,
                userName: action.payload.userName
            }
            return newState

            // You cannot simply do state = {userId: action.payload.userId, userName: action.payload.userName}.
            // This will not work.
            // Use the return statement instead as implemented above.
        },
        unsetUserInfo : (state, action) => {
            return null
        }
    }
    }
)

export default authSlice.reducer
export const {setUserInfo, unsetUserInfo} = authSlice.actions