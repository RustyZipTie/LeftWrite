import React from "react";
import quill from '../app/assets/quill.svg';

const LandingPage = () => {
    return (
        <div>
            <h1>
                <img src={quill} alt="logo"></img>
                LeftWrite
            </h1>
            <a className="navlink" href="/login">Login</a>
            <a className="navlink" href="/editor">Editor</a>
        </div>
    );
};

export default LandingPage;