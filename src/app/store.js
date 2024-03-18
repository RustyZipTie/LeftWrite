import { configureStore } from '@reduxjs/toolkit';
import { documentsReducer } from '../features/document/documentsSlice';
import { userReducer } from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    documents: documentsReducer,
    user: userReducer
  },
});
