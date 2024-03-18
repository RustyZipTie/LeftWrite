import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postUser } from './userSlice';

const User = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch()

    const Account = () => {
        return <div className='navlink thing'>{user.username}</div>
    }

    const SingnIn = () => {
        return (<div style={{ display: 'flex', flexDirection: 'row' }}>
            <div className='navlink thing' onClick={() => document.querySelector('#signup').showModal()}>Sign Up</div>
            <div className='navlink thing' onClick={() => document.querySelector('#login').showModal()}>Log In</div>
        </div>)
    }

    return (
        <>
            <div
                className='navlink thing'
            >{
                    user.username ? (<Account />) : (<SingnIn />)
                }</div>
            <dialog id='signup'>
                <h2>Sign Up</h2><br/>
                <p>Username:</p>
                <input id='username' placeholder='username' /><br/>
                <p>Password (if none provided, then account will be public):</p>
                <input id='password' placeholder='password' /><br/>
                <div className='navlink thing' onClick={() => {
                    dispatch(postUser({
                        id: document.querySelector('#username').value,
                        password: document.querySelector('#password').value,
                        documents: []
                    }));
                    document.querySelector('#signup').close();
                }}>Submit</div>
            </dialog>
            <dialog id='login'>Log In</dialog>
            <dialog id='profile'>{user.username}</dialog>
        </>
    )
}

export default User