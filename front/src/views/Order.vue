<template>
    <section class="panier">
        <h2>Commande n°{{ orderdetails.orderid }}</h2>
        <div v-if="localuser.clearance === 1">
          <h4>Adresse de livraison :</h4>
          <p>{{ orderuser.firstname }} {{ orderuser.lastname }}</p>
          <p>{{ orderuser.address }}</p>
          <p v-if="orderuser.zipcode">{{ orderuser.zipcode }} {{localuser.city}} </p>
          <p v-else>{{ orderuser.city }}</p>
          <p> {{ selectedCountry }}</p>
        </div>
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
import { getUserInfoByID, getCountryList } from '../services/UserService'

export default {
  name: 'Order',
  data(){
    return {
      order: [],
      product: {},
      orderdetails: {},
      orderuser: {},
      orderuserid: 0,
      countries: [],
      selectedCountry: "",
      localuser: JSON.parse(localStorage.getItem('user'))
    }
  },
  methods: {
    async getOrderDetails() {
        getOrderById(this.$route.params.orderid).then(result => {
            this.orderdetails = result
            this.orderuserid = result.userid
            if(this.orderdetails.length === 0){
                this.$router.push('/NotFound')
            }
            this.getOrderContent();
        })
        
    },
    VerifyUser(){
        if(!this.orderdetails.userid == this.localuser.userid && !this.localuser.clearance == 1) {
            this.$router.push('/NotFound')
        }
    },
    async getCountryList() {
        await getCountryList().then(result => { 
          this.countries = result
          this.selectedCountry = this.countries.find(x => x.countryid === this.orderuser.countryid).countryname 
        })
    },
    async getOrderContent() {
        await getOrderContent(this.$route.params.orderid).then(result => {
            this.order = result
        })
        await getUserInfoByID(this.orderuserid).then(result => {
          this.orderuser = result[0]
          this.orderuser.lastname = this.orderuser.lastname.toUpperCase()
          this.getCountryList();
        })
    },
    getImgUrl(pet) {
        var images = require.context('../assets/illu/', false, /\.jpg$/)
        return images('./' + pet + ".jpg")
    },
  },
  beforeMount(){
    this.getOrderDetails();
  },
  mounted() {
      this.VerifyUser();
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
    border: collapse;
}

td {
    margin-right: 5px;
}

th {
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

@media screen and (max-width: 900px) {
  table {
    border: 0;
    width: 92%;
  }
  
  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  
  table tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: .625em;
  }
  
  table td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: .8em;
    text-align: right;
  }
  
  table td::before {
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }
  
  table td:last-child {
    border-bottom: 0;
  }
}
</style>
