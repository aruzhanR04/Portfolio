import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './reducers/themeSlice';
import projectsReducer from './reducers/projectsSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    projects: projectsReducer,
  },
});

export default store;
