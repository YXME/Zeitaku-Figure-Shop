<template>
    <section class="payment-page">
        <article class="payment-form">
            <div class="shipper-form">
                <label>Selectionnez un service de livraison :</label>
                <select v-model="selectedShipper" placeholder="Expéditeur" @change="calculateFees()" class="login-register-input big">
                    <option v-for="shipper in shippers" :key="shipper.shipperid" :value="shipper.shipperid">{{ shipper.shippername }}</option>
                </select>
            </div>
            <div class="bank-form">
                <input v-model="cardnumber" class="login-register-input big" type="text" placeholder="N° de carte"/>
                <div>
                    <input v-model="expdate" class="login-register-input smol" type="text" placeholder="Date d'expiration"/>
                    <input v-model="cvv" class="login-register-input smol" type="text" placeholder="CVV "/>
                </div>
                <input v-model="lastname" class="login-register-input big" type="text" placeholder="Nom figurant sur la carte"/>
             </div>
        </article>

        <aside class="payment-price">
            <div class="account-details">
                <h4>Adresse de livraison :</h4>
                <p>{{ localuser.firstname }} {{localuser.lastname.toUpperCase() }}</p>
                <p>{{ localuser.address }}</p>
                <p v-if="localuser.zipcode">{{ localuser.zipcode }} {{localuser.city}} </p>
                <p v-else>{{ localuser.city }}</p>
                <p> {{ selectedCountry }}</p>
            </div>
            <div class="cart-article" v-for="product in cart" :key="product.figureid">
                <img v-bind:src="getImgUrl(product.figureid)" class="image">
                <div>
                    <p>{{ product.figuretitle }}</p>
                    <p>{{ product.eurprice }}€</p>
                </div>
            </div>
            <div class="grandtotal">
                <p>Articles : {{ subtotal }}€</p>
                <div v-if="selectedShipper">
                    <p>Livraison : {{ fees }}€</p>
                    <h3>Total : {{ grandtotal }}€</h3>
                </div>
                <div v-else>
                    <p>Livraison : ...</p>
                    <h3>Total : ...</h3>
                </div>
            </div>
            <button type="click" @click="postOrder()" class="order">Commander</button>
        </aside>
    </section>
</template>

<script>
import { getShipperByRegion, postOrder, getShippingFeesByRegion } from '../services/OrderService'
import { getCountryList } from '../services/UserService'

export default ({
name: 'Payment',
  data() {
      return {
          cardnumber: "",
          expdate: "",
          cvv: "",
          lastname: "",

          subtotal:  parseInt(localStorage.getItem('subtotal')),
          grandtotal: 0,
          fees: 0,
          weight: 0,
          cart: JSON.parse(localStorage.getItem('cart')),
          selectedShipper: {},
          shipperfees: [],
          shipper: {},
          shippers: [],
          countries: [],
          selectedCountry: "",
          localuser: JSON.parse(localStorage.getItem('user'))
      }
  },
  methods: {
    getInfos() {
        this.cart.forEach(element => {
            this.weight += element.weight
        });
        var tempcountryid = this.localuser.countryid
        this.selectedCountry = this.countries.find(element => element.countryid === tempcountryid).countryname
    },
    async getShipperByRegion() {
        getShipperByRegion(this.localuser.regionid).then(shippers => { this.$set(this,"shippers", shippers) })
    },
    async getShippingFeesByRegion() {
        getShippingFeesByRegion(this.localuser.regionid).then(shipperfees => { this.$set(this,"shipperfees", shipperfees) })
    },
    async getCountryList() {
        getCountryList().then(countries => { this.$set(this,"countries", countries) })
    },
    getImgUrl(pet) {
        var images = require.context('../assets/illu/', false, /\.jpg$/)
        return images('./' + pet + ".jpg")
    },
    calculateFees(){
        var tempweight = this.weight
        if(!this.shipperfees.find(element => element.minweight > tempweight)) {
            this.fees = this.shipperfees[this.shipperfees.length - 1].price
        }
        else {
            this.fees = this.shipperfees.find(element => element.minweight > tempweight).price;
        }
        this.grandtotal = this.subtotal + this.fees
    },
    async postOrder(){
        if(this.selectedShipper && this.fees && this.grandtotal && this.cardnumber && this.cvv && this.lastname && this.expdate){
            postOrder(this.localuser.userid, this.selectedShipper, new Date().toISOString(), this.grandtotal, JSON.stringify(this.cart)).then(result => {
                alert("Votre commande a été prise en compte, votre numéro de commande est : " + result.orderid)
                localStorage.removeItem('cart')
                this.$router.push('user');
            }, error => {
                alert("Un problème technique est survenu, nous vous prions de bien vouloir réessayer dans quelques instants, code erreur : " + error)
            });
        }
        else {
            console.log("error")
        }
    }
  },
  beforeMounted(){
      this.getCountryList();
  },
  mounted() {
    this.getCountryList();
    this.getShipperByRegion();
    this.getShippingFeesByRegion();
    this.getInfos();
  }
})
</script>

<style scoped>

.payment-page {
    margin: 1%;
    display: flex;
    flex-flow : row wrap;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
    font-family: Verdana, Arial, sans-serif;
}

.payment-form {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-around;
}

.payment-price {
    width: 20%;
    margin-left: 5%;
    background-color: rgba(0, 0, 0, 0.5)
}

.account-details {
    color: white;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
    font-family: Verdana, Arial, sans-serif;
    line-height: 0;
    height: fit-content;
}

.image{
  object-fit: cover;
  object-position: center;
  width: 50px;
  height: 50px;
}

.cart-article {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-content:flex-start;
    justify-content: left;
    text-align: left;
    font-size: xx-small;
}

.cart-article div{
    margin-left: 20px;
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

p {
    text-overflow: ellipsis;
}

.login-register-input {
    border-radius: 5px 5px 5px 5px;
    height: 30px;
    border: none;
    margin-bottom: 15px;
    padding-left: 10px
}

.big {
    width: 95%;
}

.smol {
    width: 35%;
    margin-left: 5px;
}

@media (max-width: 900px) { 
.payment-price {
    width: 95%;
    margin-left: 0%;
}

}
</style>