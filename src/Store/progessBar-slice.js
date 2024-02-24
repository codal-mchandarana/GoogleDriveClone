import { createSlice } from '@reduxjs/toolkit';

const Progess_bar_Slice = createSlice({
    name: 'progess',
    initialState: { ProgessItems: [] },
    reducers: {
        updateProgessBar(state, actions) {
            const name = actions.payload.payload;
            const value = actions.payload.value || 0;
            const findItemIndex = state.ProgessItems.findIndex((element) => {
                return element.name === name;
            })

            if (findItemIndex === -1) {
                state.ProgessItems.push({ name: name, value: value });
            }
            else
                state.ProgessItems[findItemIndex].value = value;
        }
    }
})

export const ProgessBarActions = Progess_bar_Slice.actions;

export default Progess_bar_Slice;