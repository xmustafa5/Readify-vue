<template>
    <div>
        
        <h1 v-if="usee.loading">loading</h1>
        <div v-for="item in usee.books" :key="item.id">
            {{ item.title }}
        </div>
    </div>
    <button @click="test('fantasy')">
        test data
    </button>
    {{ red }}f
</template>

<script lang="ts" setup>
const red = ref('')
    const test = (test:string)=>{
        red.value = test
        
    }
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

