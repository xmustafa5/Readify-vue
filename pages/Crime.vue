<template>
    <div>
        <h1>horror</h1>
        <div>
            <div v-for="b in horror" :key="b.id">
                {{ b.title }}
            </div>
        </div>
    </div>
</template>

<script setup >
const {data: books} = await useFetch('http://localhost:3002/books')
console.log(books);
const horror = computed(() => {
  return  books.value.filter(t => t.type === 'horror')

})

</script>

<style scoped>

</style>