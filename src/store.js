import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";


const reducer = {
    
}

export default configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})