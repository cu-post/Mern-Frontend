import axios from 'axios'

const clienteAxios = axios.create({
    baseURL: `https://usados.brutta.co`
})

export default clienteAxios;
