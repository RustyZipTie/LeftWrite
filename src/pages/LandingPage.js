import useSelector from "react";
import quill from '../app/assets/quill.svg';

const LandingPage = () => {

    

    return (
        <div>
            <h1
                className="thing"
                style={{
                    width: "fit-content",
                    margin: "auto"
                }}
            >
                <img
                    src={quill}
                    alt="logo"
                    className="navlink thing"
                ></img>
                LeftWrite
            </h1>

            <a className="navlink thing" href="/editor">Editor</a>
        </div>
    );
};

export default LandingPage;