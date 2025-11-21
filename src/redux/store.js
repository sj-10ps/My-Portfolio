import { configureStore } from "@reduxjs/toolkit";
import renderoptionreducer from './renderoptionslice'

const store = configureStore({
  reducer: {
    renderoption: renderoptionreducer,
  },
});

export default store;
