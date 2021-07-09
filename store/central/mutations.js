export default {
    SET_CATEGORY_FILTER(state, category) {
        state.activeFilter = category;
    },
    UPDATE_SEARCH_QUERY(state, value) {
        state.searchQuery = value;
    }
};
