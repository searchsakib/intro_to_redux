import { Store, configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';
import Logger from './middlewares/Logger';
// import logger from 'redux-logger'; //! logger middeware

export const store: Store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Logger),
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), //! logger middeware
  // devTools: false, // use it in production, redux dev tool will be disabled
});

// Infer the 'RootState' and 'AppDispatch' types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
