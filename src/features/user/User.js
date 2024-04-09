import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser, postUser, logOut } from './userSlice';

const User = () => {
    const [SIopen, setSIopen] = useState(false);
    const [SIunVal, setSIunVal] = useState('');
    const [SIpwVal, setSIpwVal] = useState('');

    const [LIopen, setLIopen] = useState(false);
    const [LIunVal, setLIunVal] = useState('');
    const [LIpwVal, setLIpwVal] = useState('');

    const [userOpen, setUserOpen] = useState(false);

    const user = useSelector(state => state.user);
    const dispatch = useDispatch()

    const handleSignIn = () => {
        const newUser = {
            id: SIunVal,
            password: SIpwVal,
            documents: []
        };
        dispatch(postUser(newUser));
        setSIopen(false);
    }

    const handleLogIn = () => {
        dispatch(fetchUser({
            username: LIunVal,
            password: LIpwVal
        }));
        setLIopen(false);
    }

    const Account = () => {
        return <div
            className='navlink thing'
            onClick={() => setUserOpen(true)}
        >{user.user.id}</div>
    }

    const SingnIn = () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div className='navlink thing' onClick={() => setSIopen(true)}>Sign Up</div>
                <div className='navlink thing' onClick={() => setLIopen(true)}>Log In</div>
            </div>
        )
    }

    return (
        <>
            <div
                className='navlink thing'
                style={{
                    float: 'right'
                }}
            >{
                    user.userLoading ? (
                        <div>Loading...</div>
                    ) : user.loggedIn ? (
                        <Account />
                    ) : (
                        <SingnIn />
                    )
                }</div>
            {SIopen && <>
                <div
                    style={{
                        position: 'fixed',
                        height: '100%',
                        width: '100%',
                        zIndex: 30
                    }}
                    onClick={() => setSIopen(false)}
                ></div>
                <dialog open style={{
                    zIndex: 31
                }}
                >
                    <h2>Sign Up</h2><br />
                    <p>Username:</p>
                    <input
                        id='username'
                        value={SIunVal}
                        placeholder='username'
                        onChange={e => setSIunVal(e.target.value)}
                        onKeyPress={e => e.key === "Enter" ? handleSignIn() : {}}
                    /><br />
                    <p>Password (if none provided, then account will be public):</p>
                    <input
                        id='password'
                        value={SIpwVal}
                        placeholder='password'
                        onChange={e => setSIpwVal(e.target.value)}
                        onKeyPress={e => e.key === "Enter" ? handleSignIn() : {}}
                    /><br />
                    <div className='navlink thing' onClick={handleSignIn}>Submit</div>
                    <div
                        className='navlink thing'
                        style={{
                            position: 'absolute',
                            top: 10, right: 10
                        }}
                        onClick={() => {
                            setSIopen(false);
                        }}
                    >X</div>
                </dialog>
            </>}
            {LIopen && <>
                <div
                    style={{
                        position: 'fixed',
                        height: '100%',
                        width: '100%',
                        zIndex: 30
                    }}
                    onClick={() => setLIopen(false)}
                ></div>
                <dialog open style={{ zIndex: 31 }}>
                    <h2>Log In</h2><br />
                    <p>Username:</p>
                    <input
                        id='username'
                        value={LIunVal}
                        placeholder='username'
                        onChange={e => setLIunVal(e.target.value)}
                        onKeyPress={e => e.key === "Enter" ? handleLogIn() : {}}
                    /><br />
                    <p>Password (if none provided, then account will be public):</p>
                    <input
                        id='password'
                        value={LIpwVal}
                        onChange={e => setLIpwVal(e.target.value)}
                        placeholder='password'
                        onKeyPress={e => e.key === "Enter" ? handleLogIn() : {}}
                    /><br />
                    <div className='navlink thing' onClick={handleLogIn}>Submit</div>
                    <div
                        className='navlink thing'
                        style={{
                            position: 'absolute',
                            top: 10, right: 10
                        }}
                        onClick={() => {
                            setLIopen(false);
                        }}
                    >X</div>
                </dialog>
            </>}
            {userOpen && <>
                <div
                    style={{
                        position: 'fixed',
                        height: '100%',
                        width: '100%',
                        zIndex: 30
                    }}
                    onClick={() => setUserOpen(false)}
                ></div>
                <dialog open style={{ zIndex: 31 }}>
                    <h2>{user.user.id}</h2><br />
                    <button
                        className='navlink thing'
                        onClick={() => {
                            dispatch(logOut());
                            setUserOpen(false);
                        }}
                    >Log Out</button>
                    <div
                        className='navlink thing'
                        style={{
                            position: 'absolute',
                            top: 10, right: 10
                        }}
                        onClick={() => {
                            setUserOpen(false);
                        }}
                    >X</div>
                </dialog>ß
            </>}
            <dialog id='login'>Log In</dialog>
            <dialog id='profile'>{user.username}</dialog>
        </>
    )
}

export default User