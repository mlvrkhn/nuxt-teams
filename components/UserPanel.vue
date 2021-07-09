<template>
    <div class="">
        <div class="">
            <div class="">
                <img src="@/assets/images/face.svg" class="" />
                <h2 class="name">Martin Gawlyta</h2>
                <p>mrtn.dev@aol.com</p>
            </div>
            <div class="">
                <div class="">
                    <span>⚙️</span>
                    <span>✉️</span>
                    <span>🔔</span>
                </div>
                <div class="">
                    <!-- <div class="">
                        <div
                            class=""
                            :style="{
                                '--progress-value': taskCompetionRate + '%'
                            }"
                        >
                            {{ taskCompetionRate }} %
                        </div>
                    </div> -->
                    <div class="">
                        <span>
                            <h3>{{ completedTaskCount() }}</h3>
                            <p>Completed</p>
                        </span>
                        <span>
                            <h3>{{ notCompletedTaskCount() }}</h3>
                            <p>To Do</p>
                        </span>
                        <span>
                            <h3>6</h3>
                            <p>Archived</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="projects-container">
            <h2>PROJECTS</h2>
            <a
                v-for="p in projects"
                :key="p"
                class="project-item"
                :class="{ active: activeFilter === p }"
                :data-category="p"
                @click="filterCategory"
            >
                👉 {{ p }}
            </a>
        </div>
        <div class="team-container">TEAM</div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    computed: {
        ...mapState("central", ["projects", "activeFilter", "searchQuery"]),
        ...mapState("task", ["tasks", "task"])
        // ...mapState({
        //     projects: state => state.central.projects,
        //     activeFilter: state => state.central.activeFilter,
        //     searchQuery: state => state.central.searchQuery
        // })
    },
    methods: {
        // taskCompetionRate() {
        // }
        completedTaskCount() {
            return this.tasks.filter(task => task.isCompleted).length || 0;
        },
        notCompletedTaskCount() {
            return this.tasks.filter(task => !task.isCompleted).length || 0;
        },
        filterCategory($event) {
            const selectedCategory = $event.target.getAttribute(
                "data-category"
            );
            this.setCategoryFilter(selectedCategory);
        }
    }
};
</script>

<style lang="scss" scoped></style>
