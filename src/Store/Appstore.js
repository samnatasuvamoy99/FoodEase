import {configureStore} from "@reduxjs/toolkit"
import CartSlice  from "./CartSlice"

 export const AppStore = configureStore({
      // its also take a reducers for update the ui
      //its a big store you can store multiple slice in his application

       reducer:{
           cart:CartSlice,

       }
 });

