import { configureStore } from '@reduxjs/toolkit';
import { documentsReducer } from '../features/document/documentsSlice';

export const store = configureStore({
  reducer: {
    document: documentsReducer,
  },
});
