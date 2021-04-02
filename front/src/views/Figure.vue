<template>
    <div>
        <div class="content" v-for="figure in figures" :key="figure.figureid">
          <article class="img">
            <a><img v-bind:src="getImgUrl(figure.figureid)" width="95%" height="95%"></a>
          </article>
          <aside class="data">
            <div class="title">
              <h1>{{ figure.figuretitle.toUpperCase() }}</h1>
              <h4>({{ figure.figuresubtitle }})</h4>
            </div>
            <div class ="prix">
              <p class="price-display">{{ figure.eurprice }}€ </p><p class="price-yens-display">({{ figure.jpyprice }}¥)</p>
            </div>      

            <div class="order">
              <form>
                <button class="add-cart">Ajouter au panier</button>
              </form>
            </div>
          </aside>
        </div>


        
        <div class="infos">
          <b>Fabricant</b>: <p>{{ figure.manufacturer }}</p>
            <hr>

          <b>Dimensions</b>: {{ figure.dimensions }} <br>
            <hr>

          <b>Echelle</b>: {{ figure.figurescale }}<br>
            <hr>

          <b>Poids</b>: {{ figure.weight }} <br>
            <hr>

          <b>Tirage</b>: {{ figure.limitededition }} <br>
            <hr>
        </div>
        <br/>
        
        <div class="descriptif">
          <i> 
            {{ figure.description }}
          </i>
        </div>
    </div>
</template>

<script>
import { getFigureById } from '../services/FigureService'

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
        getFigureById(this.$route.params.figureid).then(figures => {
            this.$set(this,"figures", figures)
        }).bind(this)
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
.content {
    display:flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
}

.img{ /*classe relative aux images de la statue*/
    margin-left:3%;
    margin-top:50px;
    width:35%;
}


.infos{ /*données relatives à la statue*/ 
    color:#fff;
    font-size:20px;  
}

.prix { /*prix de la statue en euros et en yen*/
    color:white;
    font-size: 30px;
    display: flex;
    width: 180px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.data { /*nom de la statue en fr et en jap*/
    width:45%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
}

.descriptif{
  color:white;
  font-family:Arial;
  margin-left: 20px;
}

.infos {
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 5%;
  margin-right: 5%;
}

p {
  font-family: Arial, Helvetica, sans-serif;
  color:#fff;
}

h1 {
    font-family: kashima, sans-serif;
    color:#EAEE59;
}

h4 {
    font-family: MSGothic, sans-serif;
    color:#949494;
}

.price-display {
    color: #EAEE59;
}

.price-yens-display{
    color: #949494;
    font-size: 14pt;
}

.add-cart {
  background-color: #EAEE59;
  color: white;
  text-align: center;
  width: 50%;
  height: 50px;
  font-size: 15pt;
  font-family: Verdana, Arial, sans-serif ;
  border: none;
}

.descriptif {
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 50px;
}
</style>