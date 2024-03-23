import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postUser } from './userSlice';

const User = () => {
    const [SIopen, setSIopen] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch()

    const Account = () => {
        console.log(user);
        return <div className='navlink thing'>{loggedIn}</div>
    }

    const SingnIn = () => {
        return (<div style={{ display: 'flex', flexDirection: 'row' }}>
            <div className='navlink thing' onClick={() => setSIopen(true)}>Sign Up</div>
            <div className='navlink thing' onClick={() => {

            }}>Log In</div>
        </div>)
    }

    return (
        <>
            <div
                className='navlink thing'
            >{
                    loggedIn ? (<Account />) : (<SingnIn />)
                }</div>
            {SIopen && <dialog open>
                <h2>Sign Up</h2><br />
                <p>Username:</p>
                <input id='username' placeholder='username' /><br />
                <p>Password (if none provided, then account will be public):</p>
                <input id='password' placeholder='password' /><br />
                <div className='navlink thing' onClick={() => {
                    dispatch(postUser({
                        user: {
                            id: document.querySelector('#username').value,
                            password: document.querySelector('#password').value,
                            documents: []
                        },
                        setLoggedIn
                    }));
                    setSIopen(false);
                }}>Submit</div>
                <div className='navlink thing' onClick={() => {
                    setSIopen(false);
                }}>Cancel</div>
            </dialog>}
            <dialog id='login'>Log In</dialog>
            <dialog id='profile'>{user.username}</dialog>
        </>
    )
}

export default User