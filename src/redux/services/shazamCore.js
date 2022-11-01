import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
 
export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'c448da5249msh0c0cd058b531996p13835cjsnd44b48a1777f')
            headers.set('X-RapidAPI-Host', 'shazam-core.p.rapidapi.com')
            
            return headers
        }
    }),
    endpoints: (builder)=>({
        getSongByGenre: builder.query({query:(genre)=>`/charts/genre-world?genre_code=${genre}`}),
        getTopCharts: builder.query({query:()=>'/charts/world'}),
        getSongDetails: builder.query({query:(songId)=>`/tracks/details?track_id=${songId}`}),
        getSongRelated: builder.query({query:(songId)=>`/tracks/related?track_id=${songId}`}),
        getArtistDetails: builder.query({query:(artistId)=>`/artists/details?artist_id=${artistId}`}),
        getSongsBySearch: builder.query({ query: (searchTerm) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
    })
})

export const { 
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
    useGetSongByGenreQuery,
    useGetSongsBySearchQuery,
} = shazamCoreApi 

