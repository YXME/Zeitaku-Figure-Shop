<template>
    <section class="not-found">
        <div class="content">
            <img class="illu" src="../assets/logos/favicon.png" alt="Logo du site"/>
            <div class="text">  
                <h1>DIO N'EST PAS CACHÉ ICI...</h1>
                <p>Pas d'inquiètude Jojo, Hermit Purple (ou le catalogue du site) saura le débusquer.</p>
            </div>
        </div>
    </section>
</template>

<style scoped>

.not-found {
    background-color: black; 
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;   
    padding: 5%
}

.content {
    width: 60%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;   
}

.illu {
    width: 25%;
}

.text {
    color: white;
    text-align: left;
}

.text h1 {
  background: -webkit-linear-gradient(#C0AB1C, #EAEE59, #C0AB1C);
  font-family: 'Autography', sans-serif;
  font-size: 30px;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text p {
   font-size: 15px;
   font-family: Verdana, Arial, sans-serif;
}


@media (max-width: 900px) { 
    .illu {
        width: 100%;
    }
}



</style>