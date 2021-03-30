<template>
    <div class="main-container">
        <section class="products-section">
            <article class="product-container">
                    <router-link to="/figure"><img class="product-illustration" src="" width="80%" height="80%"/></router-link>
                    <router-link to="/figure"><p class="product-title">Nom</p></router-link>
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