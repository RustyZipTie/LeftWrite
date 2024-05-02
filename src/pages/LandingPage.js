import { useState } from "react";
import { useSelector } from "react-redux";
import quill from '../app/assets/quill.svg';

const LandingPage = () => {
    const user = useSelector(state => state.user);

    const [NDopen, setNDopen] = useState(false);
    const [NDtitle, setNDtitle] = useState('');

    const handleSubmit = () => {
        console.log(NDtitle);
        setNDtitle('');
        setNDopen(false);
    }

    return (
        <>
            {NDopen && <>
                <div
                    style={{
                        position: 'fixed',
                        height: '100%',
                        width: '100%',
                        zIndex: 30
                    }}
                    onClick={() => setNDopen(false)}
                ></div>
                <dialog open style={{ zIndex: 31 }}>
                    <h2>New Document</h2><br />
                    <p>Title:</p>
                    <input
                        id='username'
                        value={NDtitle}
                        placeholder='Title'
                        onChange={e => setNDtitle(e.target.value)}
                        onKeyPress={e => e.key === "Enter" ? handleSubmit() : {}}
                    /><br />
                    <div className='navlink thing' onClick={handleSubmit}>Submit</div>
                    <div
                        className='navlink thing'
                        style={{
                            position: 'absolute',
                            top: 10, right: 10
                        }}
                        onClick={() => {
                            setNDopen(false);
                        }}
                    >X</div>
                </dialog>
            </>}
            {user.loggedIn ? (
                <div
                    className="thing"
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap'
                    }}
                >
                    <button
                        className="navlink thing"
                        onClick={() => setNDopen(true)}
                    >+ New Document</button>
                    {
                        user.user.titles.map((doc, idx) => {
                            return <div className="navlink thing">{doc.id}</div>
                        })
                    }
                </div>
            ) : (
                <div>You should use this really awesome web app!</div>
            )}
            <a href='/editor'>editor</a>
        </>
    );
};

export default LandingPage;