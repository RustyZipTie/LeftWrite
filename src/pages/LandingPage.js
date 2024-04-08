import { useSelector } from "react-redux";
import quill from '../app/assets/quill.svg';

const LandingPage = () => {
    const user = useSelector(state => state.user);


    return (
        user.loggedIn ? (
            <div 
                className="thing"
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}
            >
                <button className="navlink thing">+ New Document</button>
                {user.user.documents[0] && (
                    user.user.documents.map((doc, idx) => {
                        return <div className="navlink thing">{doc.id}</div>
                    })
                )}
            </div>
        ) : (
            <div>You should use this really awesome web app!</div>
        )
    );
};

export default LandingPage;