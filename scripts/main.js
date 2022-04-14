import { getData } from "./data.js";

const url = "https://api-f10-perros.herokuapp.com/perros"
const url2 = "https://api-f10-perros.herokuapp.com/gatos"



let perros = document.getElementById('perros')
let gatos = document.getElementById('gatos')

document.addEventListener('DOMContentLoaded', function () {
    getData(url)
    getData(url2)
})

const imprimir = async (url) => {
    let contenedor = document.getElementById('contenedor')
    contenedor.innerHTML = ``
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data)

    data.forEach(mascota => {
        const { img, id, name, raza } = mascota

        contenedor.innerHTML += `
        <div>
        <img id=${id} src="${img}">
        </div>
        `
    })
}


perros.addEventListener('click', () => {
    getData(url).onload = () => {
    }
    console.log('hola')
    imprimir(url)
    contenedor.addEventListener('click', async (e) => {
        console.log(e);
        let botonId = e.target.id

        if(botonId) {
            const data = await getData(url)
            const detalleAnimales = data.find(array => array.id === Number(botonId))
            console.log(detalleAnimales)
            localStorage.setItem('Descripcion', JSON.stringify(detalleAnimales))
            window.location.href = './descripcion.html'
        }

    })
})

gatos.addEventListener('click', (e) => {
    getData(url2).onload = () => {
    }
    console.log('hola')
    imprimir(url2)
    contenedor.addEventListener('click', async (e) => {
        console.log(e);
        let botonId = e.target.id

        if(botonId) {
            const data = await getData(url2)
            const detalleAnimales = data.find(array => array.id === Number(botonId))
            console.log(detalleAnimales)
            localStorage.setItem('Descripcion', JSON.stringify(detalleAnimales))
            window.location.href = './descripcion.html'
        }

    })
})

