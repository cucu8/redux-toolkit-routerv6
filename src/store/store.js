import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "./CounterSlice/CounterSlice.js";
import siteSlice from "./SiteSlice.js/SiteSlice.js"
import authSlice from "./AuthSlice/AuthSlice.js"
export default configureStore({
    reducer: {
        counter: counterSlice,
        site: siteSlice,
        auth:authSlice,
    },
})