import { configureStore } from "@reduxjs/toolkit";
import { coinApi } from "./services/coin";
import { setupListeners } from "@reduxjs/toolkit/query";
import coinSlice from "./slices/coinSlice";

const store = configureStore({
  reducer: {
    [coinApi.reducerPath]: coinApi.reducer,
    coin: coinSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coinApi.middleware),
});
export default store;
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
