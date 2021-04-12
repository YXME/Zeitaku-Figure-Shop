<template>
    <section class="main-section">
        <table cellpadding="20">
            <thead>
                <th>Commande n°</th>
                <th>Date de commande</th>
                <th>État du paiement</th>
                <th>Statut d'exécution</th>
                <th>Total</th>
            </thead>
            <tbody>
                <tr v-for="order in orders" :key="order.orderid">
                    <td>
                        <router-link :to="{ name: 'Order', params: { orderid: order.orderid } }">
                            <p>#{{ order.orderid }}</p>
                        </router-link>
                    </td>
                    <td>{{ order.orderdate.substring(0,10) }}</td>
                    <td>
                        <p>{{ order.orderpaymentstatus }}</p>
                        <select class="login-register-input" v-model="paymentStatus" @change="UpdatePaymentStatus(order.orderid)">
                            <option value="" selected disabled>Changer le statut</option>
                            <option value="En traitement">En traitement</option>
                            <option value="Payée">Payée</option>
                            <option value="Echec du paiement">Echec du paiement</option>
                            <option value="Remboursé">Remboursé</option>
                            <option value="Annulé">Annulé</option>
                        </select>
                    </td>
                    <td>
                        <p>{{ order.orderstatus }}</p>
                        <select class="login-register-input" v-model="orderStatus" @change="UpdateOrderStatus(order.orderid)">
                            <option value="" selected disabled>Changer le statut</option>
                            <option value="Confirmée">Confirmée</option>
                            <option value="En préparation">En préparation</option>
                            <option value="Expédiée">Expédiée</option>
                            <option value="Livrée">Livrée</option>
                            <option value="Annulée">Annulée</option>
                        </select>
                    </td>
                    <td>{{ order.grandtotal }}€</td>
                </tr>

                <tr v-if="!orders.length" >
                    <td colspan="5">Aucune commande trouvée.</td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script>
import { getAllOrders, UpdateOrderStatus, UpdatePaymentStatus } from '../services/AdminService'

export default ({
    name: 'Admin',
    data() {
        return {
            orders: [],
            order: {},
            paymentStatus: "",
            orderStatus: ""
        }
    },
    methods: {
        async getAllOrders() {
            getAllOrders().then(result => {
                this.orders = result
            })
        },
        async UpdateOrderStatus(orderid) {
            UpdateOrderStatus(orderid, this.orderStatus).then(res => {
                this.orderStatus = ""
                alert("Mise à jour réussie. Statut : " + res.status)
                this.$router.go()
            }, err => {
                this.orderStatus = "",
                alert("Error durant la mise à jour. Statut : " + err.status)
                }
            )
        },
        async UpdatePaymentStatus(orderid) {
            UpdatePaymentStatus(orderid, this.paymentStatus).then(res => {
                this.paymentStatus = ""
                alert("Mise à jour réussie. Statut : " + res.status)
                this.$router.go()
            }, err => {
                this.orderStatus = "",
                alert("Error durant la mise à jour. Statut : " + err.status)
                }
            )
        }
    },
    mounted() {
        this.getAllOrders();
    }
})
</script>

<style scoped>
.main-section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    color: white;
    width: 100%;
    margin-top: 5%;
    margin-bottom: 5%;
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

.login-register-input {
    border-radius: 5px 5px 5px 5px;
    border: none;
    margin-bottom: 15px;
    padding-left: 10px
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
