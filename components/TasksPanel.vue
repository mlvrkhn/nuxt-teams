<template>
    <div class="container container--task-list">
        <ul class="task--list">
            <li
                v-for="(task, index) in searchResults"
                :key="index"
                :task="task"
                class="task--list_item"
            >
                <label for="toggle-button">
                    <input
                        id="toggle-button"
                        type="checkbox"
                        class="list_item--checkbox"
                        :checked="task.isCompleted"
                        @click="toggleTaskStatus(task)"
                    />
                </label>
                <NuxtLink
                    :to="{ name: 'task-id', params: { id: task.id } }"
                    class="task--wrapper"
                >
                    <h3 class="task--title">{{ task.title }}</h3>
                    <p class="task--description cut-text">
                        {{ task.description }}
                    </p>
                    <p class="task--date">{{ task.date }}</p>
                </NuxtLink>
            </li>
        </ul>
        <submit-button />
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    computed: {
        ...mapState({
            tasks: state => state.task.tasks,
            activeFilter: state => state.central.activeFilter,
            searchQuery: state => state.central.searchQuery
        }),
        filteredTasks() {
            if (this.activeFilter === "All") {
                return this.tasks;
            }
            return this.tasks.filter(task => {
                if (task.category === this.activeFilter) {
                    return task;
                }
                return null;
            });
        },
        searchResults() {
            if (this.filteredTasks.length === 0) {
                return this.tasks;
            }
            return this.filteredTasks.filter(task => {
                if (
                    task.title
                        .toLowerCase()
                        .includes(this.searchQuery.toLowerCase()) ||
                    task.description
                        .toLowerCase()
                        .includes(this.searchQuery.toLowerCase())
                ) {
                    return task;
                }
                return null;
            });
        }
    },
    created() {
        this.getTasks();
    },
    methods: {
        toggleTaskStatus(task) {
            this.$store.dispatch("task/toggleTaskStatus", task);
        },
        getTasks() {
            this.$store.dispatch("task/fetchTasks");
        }
    }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
.task--list {
    width: 100%;
    &_item {
        padding: 10px 10px;
        border-bottom: 1px solid grey;
        display: flex;
        flex-direction: row;
        &:hover {
            background-color: $yellow;
        }
        /* display: flex; */
        /* flex-direction: row; */
    }
}
.task {
    &--wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    &--title {
        font-size: large;
    }
    &--description {
        font-size: smaller;
        width: 95%;
    }
    &--date {
        font-size: small;
    }
    .active {
        color: red;
    }
}
.cut-text {
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    overflow: hidden;
    height: 1.2em;
    white-space: nowrap;
}
</style>
