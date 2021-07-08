<template>
    <div class="container container-main">
        <user-panel></user-panel>
        <div class="column">
            <tasks-panel class="darker"></tasks-panel>
        </div>
        <Nuxt />
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.container-main {
    border: 2px solid green;
}
</style>
