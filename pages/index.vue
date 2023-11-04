<template>
    
    <button @click="test('horror')">
        test data
    </button>
    {{ red }}f
</template>

<script lang="ts" setup>
const red = ref('')
    const test = (test:string)=>{
        red.value = test
        
    }
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

