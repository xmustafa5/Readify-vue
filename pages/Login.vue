<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <input v-model="formData.email" type="email" name="email" placeholder="Enter email" />
            <input v-model="formData.password" placeholder="Enter message" name="message" />
            <button type="submit">Send</button>
        </form>
    </div>
    {{ tokken }}
</template>

<script setup >


const formData = ref({
    email: "",
    password: "",
})
const emm = ref()
const handleSubmit = async () => {
    const { data: res } = useFetch('https://sagrw1.pythonanywhere.com/api/auth/login',
        {
            method: "POST",
            body: {
                email: formData.value.email,
                password: formData.value.password,
            },



        }
    )
    console.log(res);
    console.log(res.value.email);
    tokken.$patch(tokken.Email = res.value.email)
    tokken.Token = res.value.email
    
    console.log('res2');
}


const tokken = useGet()
</script>

<style scoped></style>