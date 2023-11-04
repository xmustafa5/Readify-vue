<template>
    <div>
        <h1 v-if="usee.loading">loading</h1>
        <div v-for="item in usee.Filter" :key="item.id">
            {{ item.title }}
        </div>
    </div>
    <button @click="usee.$patch(usee.typeo = 'crime'
    )">(patch)</button>
  {{ usee.typeo }}
</template>

<script lang="ts" setup>
const red = ref('')
  
    const usee = useGet()
  //   onMounted(() => {
 //       usee.getTasks()
 //});
     usee.getdata()
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    background: #F5DEAF;
}
</style>\

