import axios from "axios"

export async function getAllOrders() {
    const response = await axios.get('http://localhost:3000/admin/orders')
    return await response.data
}

export async function getOrderById(orderid) {
    const response = await axios.get('http://localhost:3000/order/' + orderid)
    return await response.data
}

export async function getOrderContent(orderid) {
    const response = await axios.get('http://localhost:3000/order-content/' + orderid)
    return await response.data
}

export async function UpdateOrderStatus(orderid, status) {
    const response = await axios.get('http://localhost:3000/updateOrderStatus/', {
        params: {
            orderid: orderid,
            status: status,
        }
    })
    return await response
}

export async function UpdatePaymentStatus(orderid, status) {
    const response = await axios.get('http://localhost:3000/UpdateOrderPaymentStatus/',{
        params: {
            orderid: orderid,
            status: status
            }
        })
    return await response
}

// Terminer la page admin pour traiter les commandes et les daronnes. Fait
// Ajouter un moyen de supprimer des articles du panier parce que la figurine de Livai pue sa grosse daronne. Fait
// Verifier que deux articles ne sont pas en double dans le panier ou sinon on va niquer des daronnes. Fait
// Ajouter un retour au catalogue sur les cart/figure
// Faire la présentation POWERPOINT et non pas powerpoint parce que nous on est ici pour niquer des daronnes. (Et on est des tubs, on est pas des pots...)