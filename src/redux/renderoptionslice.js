import { createSlice } from "@reduxjs/toolkit";

const renderoptionslice = createSlice({
  name: "counter",
  initialState: {
    activeSection: 'about',
  },
  reducers: {
    setActiveSection:(state,action)=>{
        state.activeSection=action.payload
    }
  },
});

export const { setActiveSection} = renderoptionslice.actions;
export default renderoptionslice.reducer;
