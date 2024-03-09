import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    documentsArray: [],
    activeDocument: null
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
            console.log('docs arr', state.documentsArray);
        },
        setActive: (state, action) => {
            state.activeDocument = action.payload;
            console.log('active:', state.activeDocument);
        },
        updateActive: (state, action) => {}
    }
});

export const documentsReducer = documentsSlice.reducer;

export const selectAllDocuments = (state) => state.documents.documentsArray;