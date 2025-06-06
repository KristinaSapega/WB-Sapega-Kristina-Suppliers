import { configureStore } from "@reduxjs/toolkit";
import deliveriesReducer from "./deliveriesSlice";

export const store = configureStore({
    reducer: {
        deliveries: deliveriesReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch