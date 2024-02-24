"use client"

import { createSlice } from '@reduxjs/toolkit';

const open_Slice = createSlice({
    name: 'open',
    initialState: { open: false },
    reducers: {
        openModal(state) {
            state.open = true;
        },
        closeModal(state) {
            state.open = false;
        }
    }
})

export const openActions = open_Slice.actions;

export default open_Slice;