<template>
  <div id="div-container">
    <div class="main-container" v-for="figure in figures" :key="figure.figureid">
        <article class="image-container">
          <a><img v-bind:src="getImgUrl(figure.figureid)" class="image"></a>
        </article>
        <aside class="main-infos">
          <section class="title-container">
            <p class="title-item title">{{ figure.figuretitle.toUpperCase() }}</p>
            <p class="title-item manufacturer">By {{ figure.manufacturer }}</p>
            <p class="title-item subtitle">({{ figure.figuresubtitle }})</p>
          </section>
          <section class="price-container">
            <p class="price-item price-display">{{ figure.eurprice }}€</p>
            <p class="price-item price-yens-display">(env. {{ figure.jpyprice }}¥)</p>
          </section>
          <section class="desc-container">
            <p class="description" >{{ figure.description }}</p>
          </section>
          <section class="others-container">
            <p class="others-item">Dimensions : {{ figure.dimensions }}</p>
            <p class="others-item">Échelle : {{ figure.figurescale }}</p>
            <p class="others-item">Poids : {{ figure.weight }} kg</p>
            <p class="others-item">Tirage limité à  : {{ figure.limitededition }} exemplaires</p>
          </section>
          <section class="cart-container">
            <button class="add-cart">Ajouter au panier</button>
          </section>
        </aside>
      </div>
    </div>
</template>

<script>
import { getFigureById, getFigureByUrl } from '../services/FigureService'

export default {
  name: 'Figure',
  data(){
    return {
      figure: {},
      figures: []
    }
  },
  methods: {
    async getFigureById() {
      if(this.$route.params.figureid == null){
        getFigureByUrl(this.$route.params.url).then(figures => {
            this.$set(this,"figures", figures)
        }).bind(this)
        console.log("1" + this.$route.params.figureid)
      }
      else {
        getFigureById(this.$route.params.figureid).then(figures => {
            this.$set(this,"figures", figures)
        }).bind(this)
      }
    },
    getImgUrl(pet) {
        var images = require.context('../assets/illu/', false, /\.jpg$/)
        return images('./' + pet + ".jpg")
    }
  },
  mounted() {
    this.getFigureById();
  }
}
</script>


<style scoped>

p {
  font-family: Arial, Helvetica, sans-serif;
  color:#fff;
  text-align: left;
}

.main-container {
  margin-top: 1%;
  margin-bottom: 1%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.image{
  object-fit: cover;
  object-position: center;
  width: 600px;
  height: 600px;
}


.main-infos {
  width: 45%;
  height: max-content;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: baseline;
}

.title-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  margin: 0 -2%;
}


.title-item {
  margin: 0 2%;
}

.title {
  font-family: 'Autography', sans-serif;
  font-size: 20pt;
  color:#EAEE59;
  
}

.manufacturer {
  font-size: 15pt;
  color:949494;
  font-weight: bold;
}

.subtitle {
  font-family: 'MSGothic', sans-serif;
  font-size: 10pt;
  color:#949494;
}

.price-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 5%-20px;
}

.price-item {
  margin: 0 20px;
}

.price-display {
  color: #EAEE59;
  font-size: 23pt;
}

.price-yens-display{
  color: #949494;
  font-size: 10pt;
}

.desc-container {
  margin: -2% 0;
}

.description {
  font-style: italic;
}

.others-container {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-items: left;
  justify-content: space-around;
}

.others-item {
  margin-right: 5%;
}

.cart-container {
  width: 100%;
}

.add-cart {
  width: 100%;
  background-color: #EAEE59;
  color: white;
  text-align: center;
  height: 50px;
  font-size: 15pt;
  font-family: Verdana, Arial, sans-serif ;
  border: none;
}

.infos {
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 5%;
  margin-right: 5%;
  font-size:20px;  
}

@media (max-width: 900px) { 
  .image{
    width: 300px;
    height: 300px;
  }

  .main-infos {
    width: 80%;
    height: max-content;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: baseline;
  }

}

</style>