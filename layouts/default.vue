<template>
    <div :style="{}" class="navb">
        v <!-- <img src="../assets//afterPS//1.png" alt="ss"> -->
    </div>
    <div>
        <slot />
    </div>
</template>

<style  scoped>
.navb {
    width: 100%;
    height: 100vh;
    background: url(../assets/afterPS/10.png) no-repeat;
    /*غلمود تتعدل*/
    background-size: cover;

    background-position: center;
    /*غلمود تتعدل*/

}

/* responsive */
@media (min-width: 111px) and (max-width: 370px) {
.navb{
    height: 10vh !important;
     background: url(../assets/afterPS/10-1350.png);

    }
}

@media (min-width: 370px) and (max-width: 570px) {
    .navb{
    height: 50vh !important;
    background: url(../assets/afterPS/10-1350.png);
    background-size: cover !important;
    background-position: center !important;
}
}

@media (min-width: 570px) and (max-width: 770px) {

}

@media (min-width: 770px) and (max-width: 992px) {

}

@media (min-width: 992px) and (max-width: 1095px) {

}

@media (min-width: 1095px) and (max-width: 1600px) {

}
</style>>
