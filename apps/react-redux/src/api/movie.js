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
        }
    },
    post: {},
}
export default schema;