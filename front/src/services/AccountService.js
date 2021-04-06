import axios from "axios"

export async function postUserAuthLogin(email, password) {
  const response = await axios.get('http://localhost:3000/login/', {
    params: {
      email: email,
      password: password,
    }
  });
  return await response.data;
}

export async function postUserAuthRegister(email, password, lastname, firstname, address, city, zipcode, countryid) {
  const response = await axios.get('http://localhost:3000/register', {
    params: {
      email: email,
      password: password,
      lastname: lastname,
      firstname: firstname,
      address: address,
      city: city,
      zipcode: zipcode,
      countryid: countryid
    }
  });
  return await response.data;
}
