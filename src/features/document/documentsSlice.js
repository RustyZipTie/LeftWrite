import { createSlice } from "@reduxjs/toolkit";

const initialState = {

};

const documentsSlice = createSlice({
    name: 'documents',
    initialState,
    reducers: {
        newDocument: (state, action) => {
            state.documentsArray.push({
                title: 'New Document',
                nodes: [
                    {
                        type: 'text',
                        content: 'Hello, World'
                    }
                ]
            });
        },
        setActive: (state, action) => {
            state.activeDocument = action.payload;
        },
        updateActive: (state, action) => {}
    }
});

export const documentsReducer = documentsSlice.reducer;

export const selectAllDocuments = (state) => state.documents.documentsArray;