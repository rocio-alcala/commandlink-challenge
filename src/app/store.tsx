import { configureStore, combineReducers } from "@reduxjs/toolkit";
import formReducer from "./formSlice";

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  form: formReducer,
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
