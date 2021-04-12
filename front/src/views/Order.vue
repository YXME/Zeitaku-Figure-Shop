<template>
    <section class="panier">
        <h2>Commande n°{{ orderdetails.orderid }}</h2>
        <table cellpadding="35">
            <thead>
                <tr>
                    <th colspan="2">Produit</th>
                    <th>Prix</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="product in order" :key="product.figureid">
                    <td><img v-bind:src="getImgUrl(product.figureid)" class="image"></td>
                    <td>
                        <router-link :to="{ name: 'Figure', params: { url: product.url } }">
                            <p>{{ product.figuretitle }}</p>
                        </router-link>
                    </td>
                    <td>{{ product.eurprice }}€</td>
                </tr>
            </tbody>

            <tfoot>
                <tr>
                    <td colspan="3">
                        <p>Total : {{ orderdetails.grandtotal }}€</p>
                    </td>
                </tr>
            </tfoot>
        </table>
    </section>
</template>

<script>
import { getOrderById, getOrderContent } from '../services/AdminService'

export default {
  name: 'Order',
  data(){
    return {
      order: [],
      product: {},
      orderdetails: {},
      localuser: JSON.parse(localStorage.getItem('user'))
    }
  },
  methods: {
    async getOrderDetails() {
        getOrderById(this.$route.params.orderid).then(result => {
            this.orderdetails = result
            if(this.orderdetails.length === 0){
                this.$router.push('/NotFound')
            }
        })
    },
    async VerifyUser(){
        if(!this.orderdetails.userid == this.localuser.userid && !this.localuser.clearance == 1) {
            this.$router.push('/NotFound')
        }
    },
    async getOrderContent() {
        getOrderContent(this.$route.params.orderid).then(result => {
            this.order = result
        })
    },
    getImgUrl(pet) {
        var images = require.context('../assets/illu/', false, /\.jpg$/)
        return images('./' + pet + ".jpg")
    },
  },
  mounted() {
      this.getOrderDetails();
      this.VerifyUser();
      this.getOrderContent();
  }
}
</script>


<style scoped>

.panier {
    margin: 1%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    color: white;
    width: 100%;
    text-align: center;
    font-family: Verdana, Arial, sans-serif;
}

table {
    border: none;
}

td {
    border: none;
    margin-right: 5px;
}

th {
    border: none;
    margin-left: 5px;
    margin-right: 5px;
}

.image{
  object-fit: cover;
  object-position: center;
  width: 200px;
  height: 200px;
}

.order {
  width: 100%;
  background-color: #EAEE59;
  color: white;
  text-align: center;
  height: 50px;
  font-size: 15pt;
  font-family: Verdana, Arial, sans-serif ;
  border: none;
}
</style>
