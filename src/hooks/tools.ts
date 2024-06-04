
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { toolsProps } from "@/types/tools";

const initialState: toolsProps = {
    createNode: false
}

const sliceTools = createSlice({
    name: 'tools',
    initialState,
    reducers: {
        setCreateNode(state, action: PayloadAction<boolean>) {
            state.createNode = action.payload
        }
    }
})

export const {
    setCreateNode
} = sliceTools.actions
export default sliceTools.reducer