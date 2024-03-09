import React, { useState } from "react";

const Editor = ({ document }) => {
    const { title, nodes } = document;
    const lines = (text) => {
        let ct = 0;
        text.split('\n').forEach(line => {
            ct += line.length > 100 ? Math.ceil(line.length / 100) : 1;
        });
        return ct;
    }
    const save = e => {
        //do something with value
        e.target.rows = lines(e.target.value);
        console.log(e.target.value);
    }
    return (
        <>
            <div className="editor thing">
                <textarea
                    rows={1}
                    onInput={save}
                    className="thing"
                >{title}</textarea>
                {
                    nodes.map((node, idx) => {
                        switch (node.type) {
                            case 'text':
                                return (
                                    <>
                                        <br />
                                        <textarea
                                            cols={100}
                                            rows={lines(node.content)}
                                            onInput={save}
                                            id='txt'
                                            className="thing"
                                        >{node.content}</textarea>
                                    </>
                                );
                            case 'section':
                                return (
                                    <>
                                        <br />
                                        <Editor document={node.content} />
                                    </>
                                )
                        }
                    })
                }
                <button className='thing' onClick={() => document.nodes.push({ title: '', type: 'section', content: {} })}>new section</button>
                <button className='thing' onClick={() => document.nodes.push({ title: '', type: 'text', content: '' })}>new text</button>
            </div>
        </>

    )
}

export default Editor;