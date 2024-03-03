import {configureStore} from "@reduxjs/toolkit";
import bagSlice from "@/store/bagSlice.ts";

export const store = configureStore({
  reducer: {
    bag: bagSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
