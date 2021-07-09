export default {
    SET_TASKS(state, tasks) {
        state.tasks = tasks;
    },
    SET_TASK(state, task) {
        state.task = task;
    },
    CREATE_TASK(state, task) {
        state.tasks.push(task);
    },
    TOGGLE_TASK_STATUS(state, taskID) {
        state.tasks = state.tasks.map(t =>
            t.id === taskID ? { ...t, isCompleted: !t.isCompleted } : t
        );
    }
};
