import { createSlice } from "@reduxjs/toolkit"
 

const initialState: {
    open:boolean
    
} = {
    open:false

}


export const Sidebar = createSlice({
    name: 'Sidebar',
    initialState,
    reducers: {
        changeOpenMenu: (state ) => {
            let newState = state;
            newState['open'] = !state.open;
            return newState;
        },

    }
})

export const {
    changeOpenMenu,

    
} = Sidebar.actions

export default Sidebar.reducer