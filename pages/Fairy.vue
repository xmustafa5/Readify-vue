<template>
    <div>
        <h1>Data List</h1>
        <ul>
            <li v-for="item in dataStore.data" :key="item.id">{{ item.title }}</li>
        </ul>
    </div>
</template>
  
<script setup>
import { useDataStore } from '@/stores/store';

const dataStore = useDataStore();
console.log(dataStore);

onMounted(() => {
  dataStore.fetchData();
});
</script>
  