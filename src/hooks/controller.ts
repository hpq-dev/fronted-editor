import { ControllerProps } from "@/types/controller";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import util from "@/util";
import { Vector2 } from "@/types";

const initialState: ControllerProps = {
    position: util.Vector2(-960, -540),
    scale: 1
}

const sliceInterface = createSlice({
    name: 'controller',
    initialState,
    reducers: {
        setPosition(state, action: PayloadAction<Vector2>) {
            state.position = action.payload
        },
        setScale(state, action: PayloadAction<number>) {
            state.scale = action.payload
        }
    }
})

export const {
    setPosition,
    setScale
} = sliceInterface.actions
export default sliceInterface.reducer