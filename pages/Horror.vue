<template>
    <div>
        <div v-for="t in books.Filter" :key="t.id">

            {{ t.title }}
        </div>
     </div>
</template>

<script setup lang="ts">
const books = useGet()
books.getTasks()

</script>

<style scoped>

</style>