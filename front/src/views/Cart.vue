<template>
    <section class="panier">
        <div class="redirect-catalogue">
            <router-link to="/catalogue">
                <p class="product-title">Retour au catalogue ></p>
            </router-link>
        </div>
        <table cellpadding="35">
            <thead>
                <tr>
                    <th colspan="2">Produit</th>
                    <th>Prix</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="product in cart" :key="product.figureid">
                    <td><img v-bind:src="getImgUrl(product.figureid)" class="image"></td>
                    <td class="product-name">
                        <router-link :to="{ name: 'Figure', params: { url: product.url } }">
                            <p>{{ product.figuretitle }}</p>
                        </router-link>
                        <button type="click" @click="deleteFromCart(product.figureid)" class="delete">Supprimer</button>
                    </td>
                    <td>{{ product.eurprice }}€</td>
                </tr>
                <tr v-if="empty">
                    <td colspan="3">Aucun article dans votre panier.</td>
                </tr>
            </tbody>

            <tfoot v-if="!empty">
                <tr>
                    <td colspan="3">
                        <p>Total : {{ subtotal }}€</p>
                        <button type="click" @click="makeOrder()" class="order">Commander</button>
                    </td>
                </tr>
            </tfoot>
        </table>
    </section>
</template>

<script>
export default {
  name: 'Cart',
  data(){
    return {
      cart: [],
      empty: null,
      product: {},
      subtotal: 0,
    }
  },
  methods: {
    getCart() {
        this.cart = JSON.parse(localStorage.getItem('cart'))
    },
    getSubTotal(){
        if(this.cart != null){
            this.cart.forEach(element => {
            this.subtotal += element.eurprice
            });
        }
    },
    isEmpty() {
        if(this.cart == null){
            this.empty = true
        }
        else if (Object.keys(this.cart).length === 0){
            this.empty = true
        }
        else {
            this.empty = false
        }
    },
    deleteFromCart(figureid){
        this.cart.findIndex(element => element.figureid === figureid)
        this.cart.splice(this.cart.findIndex(element => element.figureid === figureid),1)
        localStorage.setItem('cart', JSON.stringify(this.cart))
        this.$router.go();
    },
    getImgUrl(pet) {
        var images = require.context('../assets/illu/', false, /\.jpg$/)
        return images('./' + pet + ".jpg")
    },
    makeOrder(){
        localStorage.setItem('subtotal', this.subtotal)
        this.$router.push('payment')
    }
  },
  mounted() {
      this.getCart();
      this.getSubTotal();
      this.isEmpty();
  }
}
</script>


<style scoped>

.panier {
    margin-top: 5%;;
    margin-bottom: 5%;
    margin-left: 1%;
    margin-right: 1%;
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

.redirect-catalogue {
    width: 60%;
    text-align: right;
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

.thebuttonatthefinoflapagina {
  width: 30%;
  margin-bottom: 20px;
  margin-top: 20px;
}

.delete {
  width: 100%;
  background-color: #EAEE59;
  color: white;
  text-align: center;
  height: 25px;
  font-size: 15pt;
  font-family: Verdana, Arial, sans-serif ;
  border: none;
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
