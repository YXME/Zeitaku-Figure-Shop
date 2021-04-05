<template>
    <section>
      <article class="article">
        <h1 class="title">COLLECTION TSUME ART</h1>
        <nav class="nav">
          <router-link :to="{ name: 'Figure', params: { figureid: 1 } }">
            <div class="figure">
              <img class="cropped-version" src="../assets/illu/1.jpg">
              <p>BROLY KING OF DESTRUCTION</p>
            </div>
          </router-link>

          <router-link :to="{ name: 'Figure', params: { figureid: 3 } }">
            <div class="figure">
              <img class="cropped-version" src="../assets/illu/3.jpg">
              <p>GOLDORAK</p>
            </div>
          </router-link>

          <router-link :to="{ name: 'Figure', params: { figureid: 2 } }">
            <div class="figure">
              <img class="cropped-version" src="../assets/illu/2.jpg">
              <p>MADARA AND KYUBI</p>
            </div>
          </router-link>
        </nav>
      </article>

      <article class="article">
        <h1 class="title">COLLECTION ONIRI CREATION</h1>
        <nav class="nav">
          <router-link :to="{ name: 'Figure', params: { figureid: 9 } }">
            <div class="figure">
              <img class="cropped-version" src="../assets/illu/9.jpg">
              <p>GUTS AND ZOOD VS GANISHKA</p>
            </div>
          </router-link>

          <router-link :to="{ name: 'Figure', params: { figureid: 11 } }">
            <div class="figure">
              <img class="cropped-version" src="../assets/illu/11.jpg">
              <p>LIGHT AND RYUK</p>
            </div>
          </router-link>

          <router-link :to="{ name: 'Figure', params: { figureid: 12 } }">
            <div class="figure">
              <img class="cropped-version" src="../assets/illu/12.jpg">
              <p>LIVAI VS FEMALE TITAN</p>
            </div>
          </router-link>
        </nav>
      </article>

      <article class="thebuttonatthefinoflapagina">
        <button @click="$router.push('catalogue')" class="catalogue">Accedez à notre catalogue</button>
      </article>

    </section>
</template>

<script>

</script>

<style scoped>

.catalogue {
  background-color: #EAEE59;
  color: white;
  text-align: center;
  width: 50%;
  height: 50px;
  font-size: 15pt;
  font-family: Verdana, Arial, sans-serif ;
  border: none;
}

.cropped-version{
  object-fit: cover;
  object-position: top;
  width: 250px;
  height: 250px;
}

.article {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;  
}

.nav{
  width: 60%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;  
}

.thebuttonatthefinoflapagina {
  width: 100%;
  margin-bottom: 20px;
  margin-top: 20px;
}

p {
  font-family: Arial, Verdana, sans-serif;
  font-size: 15px;
}

p, img {
 box-shadow: 3px 3px 5px black;
}

.title {
  background: -webkit-linear-gradient(#C0AB1C, #EAEE59, #C0AB1C);
  font-family: 'Autography', sans-serif;
  font-size: 30px;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

</style>
