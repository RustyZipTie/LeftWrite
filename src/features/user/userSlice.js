import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../app/shared/baseUrl";

export const fetchUsernames = createAsyncThunk(
    'user/fetchUsernames',
    async () => {
        const response = await fetch(baseURL + '/usernames');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
)

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async (username, state) => {
        if (state.user.usernames.includes(username)) {
            const response = await fetch(baseURL + '/users/' + username);
            if (!response.ok) {
                return Promise.reject('Unable to fetch, status: ' + response.status);
            }
            const data = await response.json();
            return data;
        }else{
            alert('Username not found. Please try again');
        }
    }
)

export const postUser = createAsyncThunk(
    'user/postUser',
    async (user, { dispatch }, state) => {
        console.log(user);
        console.log(JSON.stringify(user));
        //await dispatch(fetchUsernames());
        //if(!state.user.usernames.includes(user.username)) {
            //post user
            const response = await fetch(
                baseURL+'/users/', 
                {
                    method: 'POST',
                    body: user,
                    headers: {'Content-Type': 'application/json'}
                }
            );
            if (!response.ok){
                return Promise.reject(response.status);
            }
            // const data = await response.json();
            // dispatch(userSlice.actions.setUser(data));

            //post username
            const response2 = await fetch(
                baseURL+'/usernames/', 
                {
                    method: 'POST',
                    body: user.username,
                    headers: {'Content-Type': 'application/json'}
                }
            );
            if (!response2.ok){
                return Promise.reject(response2.status);
            }
        //}
    }
)

const initialState = {
    userLoading: false,
    namesLoading: false,
    usernames: [],
    user: {},
    errMsg: ''
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user.user = action.payload;
        }
    },
    extraReducers: {
        //fetch usernames
        [fetchUsernames.pending]: state => {
            state.namesLoading = true;
        },
        [fetchUsernames.fulfilled]: (state, action) => {
            state.namesLoading = false;
            state.errMsg = '';
            state.usernames = action.payload;
        },
        [fetchUsernames.rejected]: (state, action) => {
            state.namesLoading = false;
            state.errMsg = action.error ? action.error.message : 'Usernames Fetch failed';
            console.error(state.errMsg);
        },

        //fetch user
        [fetchUser.pending]: state => {
            state.userLoading = true;
        },
        [fetchUser.fulfilled]: (state, action) => {
            state.userLoading = false;
            state.errMsg = '';
            state.user = action.payload;
        },
        [fetchUser.rejected]: (state, action) => {
            state.namesLoading = false;
            state.errMsg = action.error ? action.error.message : 'Usernames Fetch failed';
            console.error(state.errMsg);
        },

        //post user
        [postUser.pending]: state => {
            state.userLoading = true;
        },
        [postUser.fulfilled]: (state, action) => {
            state.userLoading = false;
            state.errMsg = '';
            state.user = action.payload;
        },
        [postUser.rejected]: (state, action) => {
            state.namesLoading = false;
            state.errMsg = action.error ? action.error.message : 'User post failed';
            console.error(state.errMsg);
        }
    }
});

export const userReducer = userSlice.reducer;