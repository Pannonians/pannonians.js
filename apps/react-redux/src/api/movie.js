const schema = {
    get: {
        discover: {
            url: "/discover/movie"
        },
        single: {
            url: (id) => `/movie/${id}`
        },
        genres: {
            url: '/genre/movie/list'
        },
        credits: {
            url: (id) => `/movie/${id}/credits`
        },
    },
    post: {},
}
export default schema;