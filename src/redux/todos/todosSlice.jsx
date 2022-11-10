import { createSlice } from '@reduxjs/toolkit'

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [],
    },
    reducer: {},
});

export default todosSlice.reducer;