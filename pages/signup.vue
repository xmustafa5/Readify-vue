<template>
    <div>
        <form @submit.prevent="handleSubmit">
     <input v-model="form.first_name" type="text" name="name" placeholder="name " />
     <input v-model="form.last_name" type="text" name="name" placeholder="name " />
     <input v-model="form.phone_number" type="text" name="name" placeholder="name " />
     <input v-model="form.email" type="email" name="email" placeholder="Enter email" />
     <input v-model="form.password1" placeholder="Enter message" name="message" />
     <input v-model="form.password2" placeholder="Enter message" name="message" />
    <button type="submit">Send</button>
  </form>
    </div>
</template>

<script setup lang="ts">
      const form = ref({
  first_name: "",
  last_name: "",
  phone_number: "",
  email: "",
  password1: "",
  password2: ""
}) 
const router = useRouter()
    const handleSubmit = async ()=>{
        const res =$fetch('https://sagrw1.pythonanywhere.com/api/auth/login',{
            method: "POST",
            body: JSON.stringify(form),
            headers: {
        'Content-Type': 'application/json',
      },

      
        }
        )    
       
    router.push('/confirmemail')
console.log(res);
    }
</script>

<style scoped>

</style>