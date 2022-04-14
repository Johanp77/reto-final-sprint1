// import {data} from './descripcion.js'
import { getData } from "./data.js";

const url = "https://api-f10-perros.herokuapp.com/perros"
const url2 = "https://api-f10-perros.herokuapp.com/gatos"

let contenedor_favoritos = document.getElementById('favoritos')
localStorage.getItem('Favoritos')
console.log(favoritos)

getData(url).then(data => {
    if (favoritos.id === data.id) {
    console.log(favoritos)
    favoritos.forEach(favoritos => {
        const {img} = favoritos
        contenedor_favoritos.innerHTML += `
        <div>
        <img src="${img}">
        </div>
        `
    })
    }
})
getData(url2)




