<template>
    <div>
        <div v-for="book in fetch" :key="book.id">
        {{  }}
        </div>
        {{ fetch.books }}
    </div>
</template>

<script setup lang="ts">
import { useGet } from "~/stores/store";
const {data: res} = await useFetch('http://localhost:3001/books')
console.log(res);

const fetch = useGet();

console.log(fetch.books);

</script>

<style scoped>

</style>