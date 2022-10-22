
import { taskApi } from "../features/api/taskApi";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer: {
      [taskApi.reducerPath]: taskApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([taskApi.middleware]),
  });
