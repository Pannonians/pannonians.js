const schema = {
    get: {
        genres: {
            url: '/genre/movie/list'
        },
        singleGenre: {
            url: '/list/${GENRE_ID}'
        },
    },
    post: {},
}
export default schema;