<template>
    <div class="column details-container">
        <h2 class="task-details__title">{{ task.title }}</h2>
        <h2 class="task-details__user">{{ user.name }}</h2>
        <p class="task-details__date">🕰 {{ task.date }}</p>
        <p class="task-details__description">{{ task.description }}</p>
        <span v-show="task.isCompleted" class="task-details__completed">✅ Completed!</span>
        <label class="task-details__attendees-label">Who is joining:</label>
        <ul class="task-details__attendees-list">
            <li v-for="(a, i) in task.attendees" :key="i">{{ a.name }}</li>
        </ul>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    computed: {
        taskID() {
            return this.$route.params.id;
        },
        ...mapState({
            task: state => state.task.task,
            user: state => state.user.user
        })
    },
    created() {
        this.getTask();
    },
    methods: {
        getTask() {
            this.$store.dispatch("task/fetchTask", this.taskID);
        }
    }
};
</script>

<style scoped lang="scss">
.details-container {
    display: flex;
    padding: 5px;
    flex-direction: column;
    text-align: left;
    > * {
        margin: 1rem 0;
    }
}
.task-details {
    &__title {
        font-size: xx-large;
        font-weight: 700;
    }
    &__date {
        font-size: small;
    }
    &__attendees-label {
        margin-bottom: 0;
        font-weight: 500;
    }
}
</style>
