import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import baseURL from "../../app/shared/baseUrl";

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async (username, state) => {

        const response = await fetch(baseURL + '/users/' + username);
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
)

export const postUser = createAsyncThunk(
    'user/postUser',
    async ({user, setLoggedIn}, { dispatch }) => {
        console.log(user);
        console.log(JSON.stringify(user));
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
        dispatch(userSlice.actions.setUser({data, setLoggedIn}));
    }
)

const initialState = {
    userLoading: false,
    nameStaus: '',
    usernames: [],
    user: {},
    loggedIn: false,
    errMsg: ''
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user.user = action.payload.data;
            state.user.loggedIn = true;
            window.localStorage.setItem('user', state.user);
            action.payload.setLoggedIn(state.user.user.id);
            console.log(state.user.user);
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
            console.log(action);
            alert(state.errMsg === '500' ? `The username you chose is already taken. Please try again with a different username` : `Error: ${state.errMsg}`);
        },


    }
});

export const userReducer = userSlice.reducer;