"use client"

import {createSlice} from '@reduxjs/toolkit';


const Items_Slice = createSlice({
    name:'items',
    initialState:{items:[]},
    reducers:{
        addItems(state,action){
            
            state.items.push(action.payload);
        },
        removeItem(state,action){
            items = item.filter((element)=>{
                return element!=action.payload
            })
        }
    }
})

export const itemsActions = Items_Slice.actions;

export default Items_Slice;