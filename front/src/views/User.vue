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
                    <td>#{{ order.orderid }}</td>
                    <td>{{ order.orderdate }}</td>
                    <td>{{ order.orderpaymentstatus }}</td>
                    <td>{{ order.orderstatus }}</td>
                    <td>{{ order.grandtotal }}€</td>
                </tr>
                <tr v-if="!orders.length" >
                    <td colspan="5">Aucune commande trouvée.</td>
                </tr>
            </tbody>
        </table>

        <div v-if="localuser" class="account-details">
            <h4>Informations personnelles</h4>
            <p>{{ localuser.firstname }} {{localuser.lastname.toUpperCase() }}</p>
            <p>{{ localuser.email }}</p>
            <p>{{ localuser.address }}</p>
            <p v-if="localuser.zipcode">{{ localuser.zipcode }} {{localuser.city}} </p>
            <p v-else>{{ localuser.city }}</p>
            <p> {{ countries.find(element => element.countryid == localuser.countryid).countryname }}</p>
            <div>
                <button type="click" @click="changePassword" class="log-out">Modifier le mot de passe</button>
                <button type="click" @click="disconnectUser" class="log-out">Déconnexion</button>
            </div>
        </div>
    </div>
</template>

<script>
import { getOrdersByUserId, getCountryList, updatePassword } from '../services/UserService'


export default ({
name: 'User',
  data() {
      return {
          order: {},
          orders: [],
          countries: [],
          localuser: JSON.parse(localStorage.getItem('user'))
      }
  },
  methods: {
    disconnectUser() {
        localStorage.removeItem('jwt')
        localStorage.removeItem('user')
        this.$router.push({ path: '/' })
    },
    async changePassword(){
      var newPassword = prompt("Entrez votre nouveau mot de passe :");
      if (newPassword == null || newPassword == "") {
        return;
      } else {
        updatePassword(this.localuser.userid, newPassword)
        alert("Votre mot de passe a été modifié.")
      }
    },
    async getOrdersByUserId() {
        console.log(this.localuser.userid)
        getOrdersByUserId(this.localuser.userid).then(orders => {
            this.$set(this,"orders", orders)
        })
    },
    async getCountryList() {
        getCountryList().then(countries => { this.$set(this,"countries", countries) })
    },
  },
  mounted() {
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
    margin: 5%;
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
    line-height: 0;
}

.log-out {
    width: 95%;
    height: 40px;
    background-color: #EAEE59;
    color: white;
    text-align: center;
    margin-bottom:10px;
    font-size: 13pt;
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
  
  .account-details {
    width: 90%;
    justify-content: center;
    align-items: center;
    line-height: 1;
    margin-left: 0;
  }
}
</style>

