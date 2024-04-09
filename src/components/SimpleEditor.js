import React from 'react'

const SimpleEditor = ({ id, content }) => {
    return (
        <>
            <div contentEditable>{id}</div>
            <div contentEditable>{content}</div>
        </>
    )
}

export default SimpleEditor