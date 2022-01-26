import axios from 'axios'

const api = axios.create({
  baseURL : 'https://pokeapi.co/api/v2',
  headers : {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  timeout: 10000
})

const getPokemons = async () => {
  try{
    const response = await api.get('/pokemon/ditto')
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export {
  getPokemons
}