const schema = {
    get: {
        discover: {
            url: (id, season_number) => `/tv/${id}/season/${season_number}`
        },
    },
    post: {},
}
export default schema;