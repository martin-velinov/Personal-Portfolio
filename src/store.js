import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { testimonialsReducer } from "./components/Testimonials/duck";

const reducer = {
    testimonialsReducer: testimonialsReducer
}

export default configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})