<template>
    <div class="column user-panel-container">
        <div class="user-container">
            <div class="user-personal-data">
                <img
                    src="@/assets/images/face.svg"
                    class="user-personal-avatar"
                />
                <h2 class="user-personal-name">Martin Gawlyta</h2>
                <p>mrtn.dev@aol.com</p>
            </div>
            <div class="user-notifications">
                <div class="icon-container">
                    <span>⚙️</span>
                    <span>✉️</span>
                    <span>🔔</span>
                </div>
                <div class="tasks-summary-container">
                    <div class="summary-progress">
                        <div
                            class="progress-value"
                            :style="{
                                '--progress-bar': taskCompetionRate() + '%'
                            }"
                        >
                            {{ taskCompetionRate() }} %
                        </div>
                    </div>
                    <div class="summary-numeric">
                        <span>
                            <h3 class="summary-numeric-digit">
                                {{ completedTaskCount() }}
                            </h3>
                            <p>Completed</p>
                        </span>
                        <span>
                            <h3 class="summary-numeric-digit">
                                {{ notCompletedTaskCount() }}
                            </h3>
                            <p>To Do</p>
                        </span>
                        <span>
                            <h3 class="summary-numeric-digit">6</h3>
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
    },
    methods: {
        taskCompetionRate() {
            return (this.completedTaskCount() / this.tasks.length) * 100;
        },
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
            this.$store.dispatch("central/setCategoryFilter", selectedCategory);
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.tasks-summary-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    margin: 2rem 5px;
}
.summary-progress {
    width: 100%;
}
.summary-numeric {
    display: flex;
    justify-content: space-evenly;
    &-digit {
        font-size: larger;
        font-weight: 600;
    }
    & span {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}
.user {
    &-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    &-panel-container {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: space-between;
    }
    &-personal {
        &-name {
            font-weight: 700;
        }
        &-data {
            display: flex;
            flex-direction: column;
        }
        &-data > * {
            margin: 20px 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        &-avatar {
            height: 100px;
        }
    }
    &-notifications {
        display: flex;
        flex-direction: column;
        & .icon-container {
            display: flex;
            justify-content: center;
        }
    }
}
.projects-container > h2 {
    margin-bottom: 10px;
}
.project-item {
    text-align: left;
    display: block;
    margin-bottom: 0.5rem;
    padding-left: 5px;
    cursor: pointer;
    &:hover {
        background-color: $yellow;
    }
}
.active {
    background-color: $btn;
}

.progress {
    justify-content: flex-start;
    border-radius: 100px;
    align-items: center;
    position: relative;
    padding: 0 3px;
    display: flex;
    height: 20px;
    width: 100%;
    &-value {
        animation: load 2s normal forwards;
        box-shadow: 0 10px 40px -10px;
        border-radius: 100px;
        background: $btn-darker;
        height: 20px;
        padding: 1px 0;
        margin-bottom: 2rem;
        text-align: center;
        width: 0;
    }
}
@keyframes load {
    0% {
        width: 0;
    }
    100% {
        width: var(--progress-bar);
    }
}
</style>
