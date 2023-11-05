<template>

        <div :class="navb" class="navb" >
           g<!-- <img src="../assets//afterPS//1.png" alt="ss"> -->   <div :class="{ active: isActive }"></div>
        <NuxtLink to="/login">Login</NuxtLink>
        </div>
        <div class="te">
            <slot />
        </div>
    
</template>
<script setup>
const active = ref(false) 

const navb = ref('navb1') 
function handleScroll(){
    const wind = Math.round(window.scrollY)
    
    if ( wind < 10 ){
         navb.value = 'navb0'
    }else if(wind > 10 && wind < 20){
        navb.value = 'navb1'
    }
    else if(wind > 20 && wind < 40){
        navb.value = 'navb2'
    }
    else if(wind > 50 && wind < 70){
        navb.value = 'navb3'
    }
    else if(wind > 70 && wind < 100){
        navb.value = 'navb4'
    }
    else if(wind > 100 && wind < 130){
        navb.value = 'navb5'
    }
    else if(wind > 130 && wind < 160){
        navb.value = 'navb6'
    }
    else if(wind > 160 && wind < 200){
        navb.value = 'navb7'
    }
    else if(wind > 200 && wind < 250){
        navb.value = 'navb8'
    }
    else if(wind > 250 && wind < 100){
        navb.value = 'navb9'
    }
    else if(wind > 80 ){
        navb.value = 'navb10'
    }
    
    // console.log(Math.round(window.scrollY))
}
if (process.client){
    window.addEventListener('scroll', handleScroll);
}
</script>
<style  scoped>
.te{
    height: 100vh;
}
.navb {
    width: 100%;
    height: 100vh;
}

.navb {
    background: url(../assets/afterPS/2.png) no-repeat;
    background-size: cover;
    background-position: center;
}

.navb1 {
    background: url(../assets/afterPS/3.png) no-repeat;
    background-size: cover;
    background-position: center;
}
.navb2 {
    background: url(../assets/afterPS/4.png) no-repeat;
    background-size: cover;
    background-position: center;
}
.navb3 {
    background: url(../assets/afterPS/5.png) no-repeat;
    background-size: cover;
    background-position: center;
}
.navb4 {
    background: url(../assets/afterPS/6.png) no-repeat;
    background-size: cover;
    background-position: center;
}
.navb5 {
    background: url(../assets/afterPS/7.png) no-repeat;
    background-size: cover;
    background-position: center;
}
.navb6 {
    background: url(../assets/afterPS/8.png) no-repeat;
    background-size: cover;
    background-position: center;
}
.navb7 {
    background: url(../assets/afterPS/9.png) no-repeat;
    background-size: cover;
    background-position: center;
}
.navb8 {
    background: url(../assets/afterPS/10.png) no-repeat;
    background-size: cover;
    background-position: center;
}
.navb9 {
    background: url(../assets/afterPS/11.png) no-repeat;
    background-size: cover;
    background-position: center;
}
.navb10 { 
    background: url(../assets/afterPS/12.png) no-repeat;
    background-size: cover;
    background-position: center;
}
/* responsive */
@media (min-width: 111px) and (max-width: 370px) {
    .navb {
        height: 10vh !important;
        background: url(../assets/afterPS/10-1350.png);

    }
}

@media (min-width: 370px) and (max-width: 570px) {
    .navb {
        height: 48vh !important;
        
    }
    .navb0 {
    background: url(../assets/afterPS/1350/2.png) no-repeat;
    background-size: cover;
    background-position: center;
}

.navb1 {
    background: url(../assets/afterPS/1350/3.png) no-repeat;
    background-size: cover;
    background-position: center;
}
.navb2 {
    background: url(../assets/afterPS/1350/4.png) no-repeat;
    background-size: cover;
    background-position: center;
}
.navb3 {
    background: url(../assets/afterPS/1350/5.png) no-repeat;
    background-size: cover;
    background-position: center;
}
.navb4 {
    background: url(../assets/afterPS/1350/6.png) no-repeat;
    background-size: cover;
    background-position: center;
}
.navb5 {
    background: url(../assets/afterPS/1350/7.png) no-repeat;
    background-size: cover;
    background-position: center;
}
.navb6 {
    background: url(../assets/afterPS/1350/8.png) no-repeat;
    background-size: cover;
    background-position: center;
}
.navb7 {
    background: url(../assets/afterPS/1350/9.png) no-repeat;
    background-size: cover;
    background-position: center;
}
.navb8 {
    background: url(../assets/afterPS/1350/10.png) no-repeat;
    background-size: cover;
    background-position: center;
}
.navb9 {
    background: url(../assets/afterPS/1350/11.png) no-repeat;
    background-size: cover;
    background-position: center;
}
.navb10 { 
    background: url(../assets/afterPS/1350/12.png) no-repeat;
    background-size: cover;
    background-position: center;
}
}

@media (min-width: 570px) and (max-width: 770px) {}

@media (min-width: 770px) and (max-width: 992px) {}

@media (min-width: 992px) and (max-width: 1095px) {}

@media (min-width: 1095px) and (max-width: 1600px) {}
</style>>
