<template>
    <div>
        <div>
            <h1>Data List</h1>
            <div v-if="dataStore.loading">{{ dataStore.loading }}lloading ....</div>
            <ul>
                <li v-for="item in dataStore.Filter" :key="item.id">{{ item.title }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useGet } from '@/stores/store';

const dataStore = useGet();
console.log(dataStore);

// dataStore.getdata()

 onMounted(() => {
   dataStore.getdata();
 });
</script>

<style scoped></style>