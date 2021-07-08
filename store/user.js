export const state = () => ({
    user: {
        id: "11",
        name: "Martin"
    }
});

export const getters = {
    getUser: state => state.user
};
