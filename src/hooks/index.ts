import { configureStore } from "@reduxjs/toolkit";
import interfaces from "./interfaces";
import nodes from "./nodes";
import controller from "./controller";
import tools from "./tools";

const store = configureStore({
    reducer: {
        tools,
        interfaces,
        nodes,
        controller
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.getState
export default store