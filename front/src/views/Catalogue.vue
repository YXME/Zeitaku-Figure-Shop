<template>
    <div class="main-container">
        <section class="products-section">
            <article v-for="figure in figures" :key="figure.figureid" class="product-container">
                    <router-link to="/figure/{{ figure.figurename }}"><img class="product-illustration" :src=figure.illustration width="80%" height="80%"/></router-link>
                    <router-link to="/figure/{{ figure.figurename }}"><p class="product-title">{{ figure.figurename }}</p></router-link>
            </article>
        </section>
    </div>
</template>

<script>
    
</script>

<style scoped>

.main-container {
    margin: 10% 10% 10% 10%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.products-section {
    margin: 0 5% 0 5%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.product-container {
    margin-left: 2%;
    margin-right: 2%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.product-illustration {
    width: 80%;
    height: 80%;
}

.product-title {
    font-family: Arial, Helvetica, sans-serif;
    color:#fff;
}



</style>