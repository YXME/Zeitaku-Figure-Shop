import axios from "axios"

export async function getUserInfoByID(userid) {
    const response = await axios.get('http://localhost:3000/users/' + userid);
    return await response.data;
}

export async function getCountryList() {
    const response = await axios.get('http://localhost:3000/countrylist');
    return await response.data;

}

export async function getOrdersByUserId(userid) {
    const response = await axios.get('http://localhost:3000/orders/' + userid);
    return await response.data;
}

export async function getOrder(orderid) {
    const response = await axios.get('http://localhost:3000/order/' + orderid);
    return await response.data;
}

export async function getFigureOrderList(orderid) {
    const response = await axios.get('http://localhost:3000/orderlist/' + orderid);
    return await response.data;
}