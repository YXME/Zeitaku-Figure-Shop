import axios from "axios"

export async function getFigureCatalogue() {
  const response = await axios.get('http://localhost:3000/api/catalogue');
  return await response.data;
}

export async function getFigureById(figureid) {
  const response = await axios.get('http://localhost:3000/figureid/' + figureid);
  return await response.data;
}

export async function getFigureByUrl(url) {
  const response = await axios.get('http://localhost:3000/figure/' + url);
  return await response.data;
}

