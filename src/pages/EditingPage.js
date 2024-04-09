import React from "react";
import Editor from "../components/Editor";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

const EditingPage = () => {
    const docId = useParams();
    const doc = useSelector(state => state.user.user.documents.find(val => val.id = docId));

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
        </>
    );
};

export default EditingPage;