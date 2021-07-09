import TaskService from "../../services/TaskService";

export default {
    fetchTasks({ commit }) {
        return TaskService.getTasks().then(res => {
            commit("SET_TASKS", res.data);
        });
    },
    fetchTask({ commit }, id) {
        return TaskService.getTask(id).then(res => {
            commit("SET_TASK", res.data);
        });
    },
    createTask({ commit }, task) {
        commit("CREATE_TASK", task);
    },
    toggleTaskStatus({ commit, dispatch }, task) {
        commit("TOGGLE_TASK_STATUS", task.id);
        dispatch("fetchTask", task.id);
        TaskService.updateTaskStatus(task);
    }
};
