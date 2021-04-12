<template>
   <div class="main-container">
     <p class="title">NOS PRODUITS</p>
        <section class="products-section">
            <article v-for="figure in figures" :key="figure.figureid" class="product-container">
                    <router-link :to="{ name: 'Figure', params: { figureid: figure.figureid, url: figure.url } }">
                        <img class="product-illustration" v-bind:src="getImgUrl(figure.figureid)" />
                        <p class="product-title">{{ figure.figuretitle.toUpperCase() }}</p>
                    </router-link>
            </article>
        </section>
    </div>
</template>

<script>
import { getFigureCatalogue } from '../services/FigureService'


export default {
  name: 'Catalogue',
  data() {
      return {
          figure: {},
          figures: []
      }
  },
  methods: {
    async getFigureCatalogue() {
        getFigureCatalogue().then(result => {
            this.figures = result
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

.main-container {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.title {
  background: -webkit-linear-gradient(#C0AB1C, #EAEE59, #C0AB1C);
  font-family: 'Autography', sans-serif;
  font-size: 30px;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.products-section {
    margin: 0 5% 0 5%;
    width: 80%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: baseline;
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
  object-fit: cover;
  object-position: top;
  width: 250px;
  height: 250px;
}

.product-title {
    width : 250px;
    font-family: Arial, Helvetica, sans-serif;
    color:#fff;
    overflow-wrap: break-word;
}

p {
  font-family: Arial, Verdana, sans-serif;
  font-size: 15px;
}

p, img {
 box-shadow: 3px 3px 5px black;
}

a p{
  color: white;
  transition: color 0.3s;
}

a:visited {
  text-decoration: none;
}

a:link {
  text-decoration: none;
}

a:hover p{
  color: #EAEE59;
}

</style>