<template>
    <section>
      <article class="article">
        <h1 class="title">COLLECTION TSUME ART</h1>
        <nav class="nav">
          <div v-for="figure in tsumefigure" :key="figure.figureid">
            <router-link :to="{ name: 'Figure', params: { url: figure.url } }">
              <div class="figure">
                <img class="cropped-version" v-bind:src="getImgUrl(figure.figureid)" />
                <p class="product-title">{{ figure.figuretitle.toUpperCase() }}</p>
              </div>
            </router-link>
          </div>
        </nav>
      </article>

      <article class="article">
        <h1 class="title">COLLECTION ONIRI CREATION</h1>
        <nav class="nav">
          <div v-for="figure in onirifigure" :key="figure.figureid">
            <router-link :to="{ name: 'Figure', params: { url: figure.url } }">
              <div class="figure">
                <img class="cropped-version" v-bind:src="getImgUrl(figure.figureid)" />
                <p class="product-title">{{ figure.figuretitle.toUpperCase() }}</p>
              </div>
            </router-link>
          </div>
        </nav>
      </article>

      <article class="thebuttonatthefinoflapagina">
        <button @click="$router.push('catalogue')" class="catalogue">Accedez à notre catalogue</button>
      </article>

    </section>
</template>

<script>
import { getFigureCatalogue } from '../services/FigureService'


export default {
  name: 'Index',
  data() {
      return {
          figure: {},
          tsumefigure: [],
          onirifigure: [],
      }
  },
  methods: {
    async getFigureCatalogue() {
        getFigureCatalogue().then(result => {
            this.tsumefigure = result.slice(0, 4)
            this.onirifigure = result.slice(7, 11)
        })
    },
    getImgUrl(pet) {
        var images = require.context('../assets/illu/', false, /\.jpg$/)
        return images('./' + pet + ".jpg")
    }
  },
  mounted() {
    this.getFigureCatalogue();
  }
}
</script>

<style scoped>

.figure {
    margin-left: 2%;
    margin-right: 2%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

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
  width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-around;  
}

.product-title {
    width : 250px;
    font-family: Arial, Helvetica, sans-serif;
    color:#fff;
    overflow-wrap: break-word;
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
