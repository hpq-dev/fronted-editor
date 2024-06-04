import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Interface {
    name: string
    id: number
}

interface props {
    items: Interface[]
    current: number
}

const initialState: props = {
    items: [
        {
            name: 'gamemodehpq',
            id: 0
        },
        {
            name: 'marketplace',
            id: 1
        }
    ],
    current: 0
}

const sliceInterface = createSlice({
    name: 'interfaces',
    initialState,
    reducers: {
        setInterfaces(state, action: PayloadAction<props>) {
            state.items = action.payload.items
        },
        setCurrInterface(state, action: PayloadAction<number>) {
            state.current = action.payload
        }
    }
})

export const { setInterfaces, setCurrInterface } = sliceInterface.actions
export default sliceInterface.reducer