import { useSelector } from "react-redux";
import quill from '../app/assets/quill.svg';

const LandingPage = () => {
    const user = useSelector(state => state.user);


    return (
        user.loggedIn ? (
            <div>welcome!</div>
        ) : (
            <div>You should use this really awesome web app!</div>
        )
    );
};

export default LandingPage;