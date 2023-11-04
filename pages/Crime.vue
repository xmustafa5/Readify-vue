<template>
    <div>
        <h1>horror</h1>
        <div>
            
            <div v-for="b in books" :key="b.id">
                {{ b.title }}
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup >
interface Book {
  id: number;
  title: string;
  description: string;
  type: string;
  isFav: boolean;
}


const {data:books} = await useFetch<Book>('http://localhost:3002/books')
     



</script>

<style scoped>

</style>