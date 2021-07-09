export default {
    setCategoryFilter({ commit }, category) {
        commit("SET_CATEGORY_FILTER", category);
    },
    updateSearchQuery({ commit }, value) {
        commit("UPDATE_SEARCH_QUERY", value);
    }
};
