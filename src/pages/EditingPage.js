import { useState } from "react";
import Editor from "../components/Editor";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const EditingPage = () => {
    const docId = useParams();
    //const doc = useSelector(state => state.user.user.documents.find(val => val.id = docId));
    const [content, setContent] = useState('');

    return (
        <>
            <ReactQuill theme="snow" value={content} onChange={setContent} />
            <p>{content}</p>
        </>
    );
};

export default EditingPage;


{/* <>
<Editor document={{
    title: 'the linguist',
    nodes: [
        {
            type: 'text',
            content: 'Hello, World!'
        },
        {
            type: 'section',
            content: {
                title: 'chapter one',
                nodes: [
                    {
                        type: 'text',
                        content: 'Once upon a time'
                    },
                    {
                        type: 'text',
                        content: 'there was a child'
                    }
                ]
            }
        }
    ]
}} />
</> */}