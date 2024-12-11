import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const faqApi = createApi({
    reducerPath: 'getfaqApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.29.251:3001/api/v1/' }),
    endpoints: (builder) => ({
      getAllFaqs:builder.query({query:()=>'/getAllFaqs'}),
      // deleteFaq:builder.query({query:()=>'/deleteFaq'})
    
    }),
  });

export const {useGetAllFaqsQuery}=faqApi



export const showcaseGalleryApi=createApi({
  reducerPath: 'showcaseGalleryApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.29.251:3001/api/v1/' }),
    endpoints: (builder) => ({
      createImageOfShowcaseGallery:builder.query({query:()=>'/createImageInShowcaseGallery'}),
      getAllImagesOfShowcaseGallery:builder.query({query:()=>'/getAllImageInShowcaseGallery'})
    
    }),
})


export const {useCreateImageOfShowcaseGalleryQuery,useGetAllImagesOfShowcaseGalleryQuery}=showcaseGalleryApi






export const wordsFromClientApi=createApi({
  reducerPath: 'wordsFromClientApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.29.251:3001/api/v1/' }),
    endpoints: (builder) => ({
      getWordsFromClient:builder.query({query:()=>'/getAllReviews'})
    }),
})

export const{useGetWordsFromClientQuery} =wordsFromClientApi


export const blogsApi = createApi({
  reducerPath: 'blogsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.29.251:3001/api/v1/' }),
  tagTypes: ['Post', 'Get'],
  endpoints: (builder) => ({
    getBlogs:builder.query({query:(category)=>`/getAllBlogs?blogCategory=${category}`}),
    // getBlogs:builder.query({query:(category)=>`/getAllBlogs?blogCategory=${category}`}),
    // getBlogByIdNew: builder.query({
    //   query: (id) => `/blog?id=${id}`, 
    // }),
    getLastFewBlogs:builder.query({query:(limit)=>`/getLastFewBlogs?limit=${limit}`}),
    getBlogById:builder.query({query:(id)=>`/getBlog?id=${id}`}),

  }),
});

export const { useGetBlogByIdQuery,useGetLastFewBlogsQuery,useGetBlogsQuery } = blogsApi;



export const signupForNewsLetterApi = createApi({
  reducerPath: 'signupForNewsLetterApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.29.251:3001/api/v1/' }),
  tagTypes: ['Post', 'Get'],
  endpoints: (builder) => ({
    signupForNewsLetterApi: builder.mutation({
      query: (initialPost) => ({
        url: '/signupForNewsLetter',
        method: 'POST',
        body: initialPost, 
      }),
      invalidatesTags: ['Post'],
    }),
    contactusFormApi: builder.mutation({
      query: (initialPost) => ({
        url: '/createContactUs',
        method: 'POST',
        body: initialPost, 
      }),
      invalidatesTags: ['Post'],
    }),
    customizeLiftContactusFormApi: builder.mutation({
      query: (initialPost) => ({
        url: '/createCustomisedLiftContactUs',
        method: 'POST',
        body: initialPost, 
      }),
      invalidatesTags: ['Post'],
    }),
  }),
});
export const { useSignupForNewsLetterApiMutation,useContactusFormApiMutation ,useCustomizeLiftContactusFormApiMutation} = signupForNewsLetterApi;






