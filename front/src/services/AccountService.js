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

export async function postUserAuthLogin(email, password) {
  const response = await axios.get('http://localhost:3000/login/', {
    params: {
      email: email,
      password: password,
    }
  });
  return await response.data;
}
