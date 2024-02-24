Items_Slice

import {configureStore} from '@reduxjs/toolkit';
import Items_Slice from './items-slice';
import Progess_bar_Slice from './progessBar-slice'
import open_slice from './openModal-slice'

const store = configureStore({
    reducer:{downloadItems:Items_Slice.reducer,ProgessBarItems:Progess_bar_Slice.reducer,
    openModal:open_slice.reducer
    }
})

export default store;