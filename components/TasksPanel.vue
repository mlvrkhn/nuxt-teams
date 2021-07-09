<template>
    <div class="">
        <ul class="">
            <h1>Tasks Panel</h1>
            <!-- <li
                v-for="(task, index) in searchResults"
                :key="index"
                :task="task"
            >
                <div class="">
                    <label for="">
                        <input
                            id="toggle-button"
                            type=""
                            class=""
                            :checked="task.isCompleted"
                            @click="toggleTaskStatus(task)"
                        />
                    </label>
                    <router-link
                        :to="{ name: 'tasks', params: { id: task.id } }"
                        class="link"
                    >
                        <div class="">
                            <h3>{{ task.title }}</h3>
                            <p class="">
                                {{ task.description }}
                            </p>
                            <p class="">{{ task.date }}</p>
                        </div>
                    </router-link>
                </div>
            </li> -->
        </ul>
        <submit-button />
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    computed: {
        ...mapState({
            tasks: state => state.tasks.tasks,
            activeFilter: "all",
            // activeFilter: state => state.activeFilter,
            searchQuery: state => state.searchQuery
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
    methods: {
        toggleTaskStatus(task) {
            this.$store.dispatch("tasks/toggleTaskStatus", task);
        }
    }
};
</script>
<style lang="scss" scoped></style>
