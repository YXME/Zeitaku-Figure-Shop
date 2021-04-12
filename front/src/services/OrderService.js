import axios from "axios"

export async function getShipperByRegion(regionid) {
    const response = await axios.get('http://localhost:3000/shipperlist/' + regionid);
    return await response.data;
}

export async function getShippingFeesByRegion(regionid) {
    const response = await axios.get('http://localhost:3000/shipperfees/' + regionid);
    return await response.data;
}

export async function postOrder(userid, shipperid, date, grandtotal, cart) {
  const response = await axios.get('http://localhost:3000/confirm-order', {
    params: {
    userid: userid,
    shipperid: shipperid,
    date: date,
    grandtotal: grandtotal,
    cart: cart,
    }
  });
  return await response.data;
}