<template>
    <div class="info-user">
        <table cellpadding="20">
            <thead>
                <tr>
                    <th>Commande n°</th>
                    <th>Date de commande</th>
                    <th>État du paiement</th>
                    <th>Statut d'exécution</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="order in orders" :key="order.orderid">
                    <td>{{ order.orderid }}</td>
                    <td>{{ order.orderdate }}</td>
                    <td>{{ order.orderpaymentstatus }}</td>
                    <td>{{ order.status }}</td>
                    <td>{{ order.grandtotal }}</td>
                </tr>
                <tr v-if="!orders.lengh" >
                    <td colspan="5">Aucune commande trouvée.</td>
                </tr>
            </tbody>
        </table>

        <div v-for="user in users" :key="user.userid" class="account-details">
            <p>Informations personnelles</p>
            <p>{{ user.firstname }} {{user.lastname.toUpperCase() }}</p>
            <p>{{ user.email }}</p>
            <p>{{ user.address }}</p>
            <p v-if="user.zipcode">{{ user.zipcode }} {{user.city}} </p>
            <p v-else>{{ user.city }}</p>
            <!-- <p> {{ countries.filter(function(o){ if (o.countryid == user.countryid) return o }) }}</p> -->
        </div>
        <div>
            <button type="click" @click="disconnectUser" class="log-out">Déconnexion</button>
        </div>
    </div>
</template>

<script>
import { getUserInfoByID, getOrdersByUserId, getCountryList } from '../services/UserService'

export default ({
name: 'User',
  data() {
      return {
          order: {},
          orders: [],
          user: {},
          users: [],
          countries: [], 
          localuser: JSON.parse(localStorage.getItem('user'))
      }
  },
  methods: {
    async disconnectUser() {
        localStorage.removeItem('jwt')
        localStorage.removeItem('user')
        this.$router.push({ path: '/' })
    },
    async getUserInfoByID() {
        getUserInfoByID(this.localuser.userid).then(users => {
            console.log(users)
            this.$set(this,"users", users)
        })
    },
    async getOrdersByUserId() {
        getOrdersByUserId(this.localuser.userid).then(orders => {
            this.$set(this,"orders", orders)
        })
    },
    async getCountryList() {
        getCountryList().then(countries => { this.$set(this,"countries", countries) })
    },
  },
  mounted() {
    this.getUserInfoByID();
    this.getOrdersByUserId();
    this.getCountryList();
  }
})
</script>


<style scoped>
.info-user {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    color: white;
    width: 100%;
    margin-top: 20px;
    margin-left:20px;
    text-align: center;
    font-family: Verdana, Arial, sans-serif;
}

table {
    border-collapse: collapse; /* Les bordures du tableau seront collées (plus joli) */
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

.account-details {
    margin-left: 100px;
    color: white;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: flex-start;
    font-family: Verdana, Arial, sans-serif;
}

.log-out {
    background-color: #EAEE59;
    color: white;
    text-align: center;
    margin-bottom:10px;
    font-size: 15pt;
    font-family: Verdana, Arial, sans-serif ;
    border: none;
}

.commander{
        background-color: #EAEE59;
        color: white;
        text-align: center;
        margin-bottom:10px;
        margin-left:100px;
        font-size: 15pt;
        font-family: Verdana, Arial, sans-serif ;
        border: none;
}
</style>

