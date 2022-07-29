import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    id: '',
}

export const idSlice = createSlice({
    name: 'id',
    initialState,
    reducers: {
        setId: (state, action) => {
            state.id = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { setId } = idSlice.actions

export default idSlice.reducer