let contenedor = document.getElementById('contenedor')

export let data

const traerLocalStorage =  () => {
    const detalle = JSON.parse(localStorage.getItem('Descripcion'))
    console.log(detalle)

    const { id, img, edad, name, raza, direccion, personalidad_1, personalidad_2, personalidad_3, description, user } = detalle
    contenedor.innerHTML += `
       <div class="card">
        <img src=${img} class="" alt="Animalito">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p>${raza}</p>
            <p>${edad}</p>
            <p>${direccion}</p>
            <h4>Personalidad</h4>
            <div class="personalidad-container">
            <img src=${personalidad_1}>
            <img src=${personalidad_2}>
            <img src=${personalidad_3}>
            <button id="favoritos">Agregar</button>
            </div>
            <h5>Historia de ${name}</h5>
            <p>${description}</p>
            <img src="${user}" width="100px"></img>
            <a  class="">Return</a>
        </div>
        </div>
       `
       data = detalle
}

document.addEventListener('DOMContentLoaded', traerLocalStorage)

let favoritos = []

contenedor.addEventListener('click', async (e) => {
    console.log(e);
    let botonFavoritos = document.querySelector('#favoritos')
    botonFavoritos = e.target.id

    if (botonFavoritos) {
        console.log(data.id)
        // const detalleAnimales = data.find(array => array.id === Number(botonId))
        let nuevo_favorito = {
            id: data.id
        }
        favoritos.push(nuevo_favorito)
        if (favoritos.length === 0) {
            localStorage.setItem('Favoritos', JSON.stringify(favoritos))
            console.log(favoritos)
        } else {
            favoritos.forEach(favorito => {
                if (favorito.id === data.id) {
                    console.log('ya esta en favoritos')
                }
            })
        }
    }
})  