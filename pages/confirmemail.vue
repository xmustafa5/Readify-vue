<template>
    <div>
        <form @submit.prevent="handleSubmit">
    <input v-model="form.email" type="email" name="email" placeholder="Enter email" />
    <input v-model="form.code" placeholder="Enter message" name="message" />
    <button type="submit">Send</button>
  </form>
    </div>
</template>

<script setup lang="ts">


    const form = ref({
          email: "",
          code: "",
    }) 

    const handleSubmit = async ()=>{
        const res =$fetch('https://sagrw1.pythonanywhere.com/api/auth/login',{
            method: "POST",
            body: JSON.stringify(form),
            headers: {
        'Content-Type': 'application/json',
      },

      
        } 
        
        )              
console.log(res);
    }
</script>

<style scoped>

</style>