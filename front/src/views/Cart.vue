<template>
    <section class="panier">
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
                    <td>{{ product.figuretitle }}</td>
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
                        <button type="click" class="order">Commander</button>
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
    getImgUrl(pet) {
        var images = require.context('../assets/illu/', false, /\.jpg$/)
        return images('./' + pet + ".jpg")
    },
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
    border-collapse: collapse;
}

td {
    border: 1px solid white;
    margin-right: 5px;
}

th {
    border: 1px solid white;
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
