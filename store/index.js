export const state = () => ({
    projects: ["Development", "Sport", "Health", "Social", "All"],
    activeFilter: "All",
    searchQuery: ""
});

export const mutations = {
    SET_CATEGORY_FILTER(state, category) {
        state.activeFilter = category;
    },
    UPDATE_SEARCH_QUERY(state, value) {
        state.searchQuery = value;
    }
};

export const actions = {
    setCategoryFilter({ commit }, category) {
        commit("SET_CATEGORY_FILTER", category);
    },
    updateSearchQuery({ commit }, value) {
        commit("UPDATE_SEARCH_QUERY", value);
    }
};
