import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../app/shared/baseUrl";

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async ({ username, password }, state) => {
        const response = await fetch(baseURL + 'users/' + username);
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        if (data.password === password) {
            return data;
        } else {
            alert('Incorrect password. Please try again');
        }

    }
)

export const postUser = createAsyncThunk(
    'user/postUser',
    async (user, { dispatch }) => {
        const response = await fetch(
            baseURL + 'users/',
            {
                method: 'POST',
                body: JSON.stringify(user),
                headers: { 'Content-Type': 'application/json' }
            }
        );
        if (!response.ok) {
            return Promise.reject(response.status);
        }
        const data = await response.json();

        return data;
    }
)

const initialState = {
    userLoading: false,
    user: {},
    loggedIn: false,
    errMsg: ''
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logOut: (state, action) => {
            state.user = {};
            state.loggedIn = false;
        }
    },
    extraReducers: {

        //fetch user
        [fetchUser.pending]: state => {
            state.userLoading = true;
        },
        [fetchUser.fulfilled]: (state, action) => {
            state.userLoading = false;
            state.errMsg = '';
            if (action.payload) {
                state.loggedIn = true;
                state.user = action.payload;
            }
        },
        [fetchUser.rejected]: (state, action) => {
            state.userLoading = false;
            state.errMsg = action.error ? action.error.message : 'Usernames Fetch failed';
            console.error(state.errMsg);
            alert(state.errMsg === 'Unable to fetch, status: 404' ? 'An error occured. You may have entered your username incorrectly' : `Error: ${state.errMsg}`);
        },

        //post user
        [postUser.pending]: state => {
            state.userLoading = true;
        },
        [postUser.fulfilled]: (state, action) => {
            state.userLoading = false;
            state.errMsg = '';
            state.loggedIn = true;
            state.user = action.payload;
        },
        [postUser.rejected]: (state, action) => {
            state.userLoading = false;
            state.errMsg = action.error ? action.error.message : 'User post failed';
            console.error(state.errMsg);
            alert(state.errMsg === '500' ? `The username you chose is already taken. Please try again with a different username` : `Error: ${state.errMsg}`);
        },


    }
});

export const { logOut } = userSlice.actions;

export const userReducer = userSlice.reducer;