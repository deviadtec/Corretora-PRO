import { configureStore } from "@reduxjs/toolkit";
import { storeReducer } from "./store.reducer";
// ...

export const ReduxStore = configureStore({
  reducer: storeReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof ReduxStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof ReduxStore.dispatch;
