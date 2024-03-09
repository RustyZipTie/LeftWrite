import React from "react";
import quill from '../app/assets/quill.svg';

const LandingPage = () => {
    return (
        <div>
            <h1 className="thing">
                <img src={quill} alt="logo"></img>
                LeftWrite
            </h1>
            <a className="navlink thing" href="/login">Login</a>
            <a className="navlink thing" href="/editor">Editor</a>
        </div>
    );
};

export default LandingPage;