<template>
    <router-link to="/task/create">
        <button class="submit-button" type="submit">Add Task</button>
    </router-link>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.submit-button {
    background-color: $btn;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    color: $bg;
    font-weight: 700;

    margin-bottom: 10px;
    &:hover {
        background-color: $btn-darker;
        transform: scale(0.98);
    }
}
</style>
