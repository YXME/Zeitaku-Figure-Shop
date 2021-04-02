import axios from "axios"

export async function getFigureCatalogue() {
  const response = await axios.get('http://localhost:3000/api/catalogue');
  return await response.data;
}

export async function getFigureById() {
  const response = await axios.get('http://localhost:3000/api/catalogue');
  return await response.data;
}
