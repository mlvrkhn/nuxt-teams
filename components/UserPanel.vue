<template>
    <div class="">
        <div class="">
            <div class="">
                <img src="@/assets/face.svg" class="" />
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
                    <div class="">
                        <div
                            class=""
                            :style="{
                                '--progress-value': getTasksFulfilmentRate + '%'
                            }"
                        >
                            {{ getTasksFulfilmentRate }} %
                        </div>
                    </div>
                    <div class="">
                        <span>
                            <h3>{{ completedTaskCount }}</h3>
                            <p>Completed</p>
                        </span>
                        <span>
                            <h3>{{ notCompletedTaskCount }}</h3>
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
export default {};
</script>

<style lang="scss" scoped></style>
