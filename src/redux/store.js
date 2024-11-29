//setup in future

import { configureStore } from "@reduxjs/toolkit";
import {  blogsApi, faqApi, showcaseGalleryApi, signupForNewsLetterApi, wordsFromClientApi } from "./rtkQuery/rtkQuery";
export const store=configureStore({
    reducer: {
        [faqApi.reducerPath]:faqApi.reducer,
        [showcaseGalleryApi.reducerPath]:showcaseGalleryApi.reducer,
        [wordsFromClientApi.reducerPath]:wordsFromClientApi.reducer,
        [signupForNewsLetterApi.reducerPath]: signupForNewsLetterApi.reducer,
        [blogsApi.reducerPath]:blogsApi.reducer
        
    }, 

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false })
        .concat(faqApi.middleware)
        .concat(showcaseGalleryApi.middleware)
        .concat(wordsFromClientApi.middleware)
        .concat(signupForNewsLetterApi.middleware)
        .concat(blogsApi.middleware)
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(getfaqApi.middleware()),

})

