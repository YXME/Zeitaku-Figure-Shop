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