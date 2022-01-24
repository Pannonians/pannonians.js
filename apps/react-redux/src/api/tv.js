const schema = {
    get: {
        discover: {
            url: "/discover/tv"
        },
        single: {
            url: (id) => `/tv/${id}`
        },
        genres: {
            url: '/genre/tv/list'
        },
        credits: {
            url: (id) => `/tv/${id}/credits`
        },
    },
    post: {},
}
export default schema;