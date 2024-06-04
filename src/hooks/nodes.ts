import { nodeProps, nodesType } from "@/types/node";
import util from "@/util";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface props {
    items: nodesType
}

const initialState: props = {
    items: [
        {
            node: {
                name: 'gamemodehpq123',
                background: [255, 255, 255, 55],
                width: 55,
                height: 55,
                position: util.Vector2(55, 5),
                rounded: 0,
                rotate: 0,
                stroke: [],
                effects: []
            }
        }
    ]
}

const sliceNodes = createSlice({
    name: 'nodes',
    initialState,
    reducers: {
        setNodes(state, action: PayloadAction<nodesType>) {
            state.items = action.payload
        },
        addNode(state, action: PayloadAction<[number[], nodeProps]>) {
            const [index, node] = action.payload
            state.items.push({
                node
            })
        }
    }
})

export const { setNodes, addNode } = sliceNodes.actions
export default sliceNodes.reducer