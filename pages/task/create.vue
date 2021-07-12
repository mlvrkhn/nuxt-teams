<template>
    <div class="form-container">
        <h1>Add new task</h1>
        <form class="task-form" @submit.prevent="handleSubmit">
            <input v-model="task.title" type="text" placeholder="Title" />
            <textarea
                v-model="task.description"
                type="text"
                placeholder="Description"
            />
            <select v-model="task.category">
                <option>Teambuilding</option>
                <option>Other</option>
            </select>
            <datepicker
                v-model="task.date"
                class="datepicker"
                placeholder="Select a date"
            />
            <button type="submit">Add</button>
        </form>
    </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import TaskService from "@/services/TaskService";

export default {
    components: {
        Datepicker
    },
    data() {
        return {
            task: this.createNewTask()
        };
    },
    computed: {},
    methods: {
        handleSubmit() {
            this.$store
                .dispatch("task/createTask", this.task)
                .then(() => {
                    TaskService.postTask(this.task);
                    this.task = this.createNewTask();
                })
                .catch(err => {
                    console.log(
                        "Something went wrong with you TASK",
                        err.message
                    );
                });
        },
        createNewTask() {
            const id = Math.random()
                .toString(36)
                .substring(7);
            console.log("id", id);
            const owner = this.getUser;

            return {
                id,
                owner,
                category: "",
                title: "",
                description: "",
                date: "",
                isCompleted: false,
                attendees: []
            };
        }
    }
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/variables.scss";

.form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.task-form {
    display: flex;
    flex-direction: column;
    width: 90%;
    justify-content: center;

    > * {
        margin: 5px 0;
    }
}

.datepicker {
    text-align: center;
}
</style>
