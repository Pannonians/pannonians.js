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
        }
    },
    post: {},
}
export default schema;