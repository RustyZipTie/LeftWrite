import React from "react";
import Editor from "../components/Editor";

const EditingPage = () => {

    return (
        <>
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
            <a className="navlink" href="/">Home</a>
        </>
    );
};

export default EditingPage;