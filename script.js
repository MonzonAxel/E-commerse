const datos = [
    {
        "id": "abrigo-01",
        "titulo": "Abrigo 01",
        "imagen": "./img/abrigos/01.jpg",
        "categoria": {
            "nombre": "Abrigos",
            "id": "abrigos"
        },
        "precio": 1000
    },
    {
        "id": "abrigo-02",
        "titulo": "Abrigo 02",
        "imagen": "./img/abrigos/02.jpg",
        "categoria": {
            "nombre": "Abrigos",
            "id": "abrigos"
        },
        "precio": 1000
    },
    {
        "id": "abrigo-03",
        "titulo": "Abrigo 03",
        "imagen": "./img/abrigos/03.jpg",
        "categoria": {
            "nombre": "Abrigos",
            "id": "abrigos"
        },
        "precio": 1000
    },
    {
        "id": "abrigo-04",
        "titulo": "Abrigo 04",
        "imagen": "./img/abrigos/04.jpg",
        "categoria": {
            "nombre": "Abrigos",
            "id": "abrigos"
        },
        "precio": 1000
    },
    {
        "id": "abrigo-05",
        "titulo": "Abrigo 05",
        "imagen": "./img/abrigos/05.jpg",
        "categoria": {
            "nombre": "Abrigos",
            "id": "abrigos"
        },
        "precio": 1000
    },
    {
        "id": "camiseta-01",
        "titulo": "Camiseta 01",
        "imagen": "./img/camisetas/01.jpg",
        "categoria": {
            "nombre": "Camisetas",
            "id": "camisetas"
        },
        "precio": 1000
    },
    {
        "id": "camiseta-02",
        "titulo": "Camiseta 02",
        "imagen": "./img/camisetas/02.jpg",
        "categoria": {
            "nombre": "Camisetas",
            "id": "camisetas"
        },
        "precio": 1000
    },
    {
        "id": "camiseta-03",
        "titulo": "Camiseta 03",
        "imagen": "./img/camisetas/03.jpg",
        "categoria": {
            "nombre": "Camisetas",
            "id": "camisetas"
        },
        "precio": 1000
    },
    {
        "id": "camiseta-04",
        "titulo": "Camiseta 04",
        "imagen": "./img/camisetas/04.jpg",
        "categoria": {
            "nombre": "Camisetas",
            "id": "camisetas"
        },
        "precio": 1000
    },
    {
        "id": "camiseta-05",
        "titulo": "Camiseta 05",
        "imagen": "./img/camisetas/05.jpg",
        "categoria": {
            "nombre": "Camisetas",
            "id": "camisetas"
        },
        "precio": 1000
    },
    {
        "id": "camiseta-06",
        "titulo": "Camiseta 06",
        "imagen": "./img/camisetas/06.jpg",
        "categoria": {
            "nombre": "Camisetas",
            "id": "camisetas"
        },
        "precio": 1000
    },
    {
        "id": "camiseta-07",
        "titulo": "Camiseta 07",
        "imagen": "./img/camisetas/07.jpg",
        "categoria": {
            "nombre": "Camisetas",
            "id": "camisetas"
        },
        "precio": 1000
    },
    {
        "id": "camiseta-08",
        "titulo": "Camiseta 08",
        "imagen": "./img/camisetas/08.jpg",
        "categoria": {
            "nombre": "Camisetas",
            "id": "camisetas"
        },
        "precio": 1000
    },
    {
        "id": "pantalon-01",
        "titulo": "Pantalón 01",
        "imagen": "./img/pantalones/01.jpg",
        "categoria": {
            "nombre": "Pantalones",
            "id": "pantalones"
        },
        "precio": 1000
    },
    {
        "id": "pantalon-02",
        "titulo": "Pantalón 02",
        "imagen": "./img/pantalones/02.jpg",
        "categoria": {
            "nombre": "Pantalones",
            "id": "pantalones"
        },
        "precio": 1000
    },
    {
        "id": "pantalon-03",
        "titulo": "Pantalón 03",
        "imagen": "./img/pantalones/03.jpg",
        "categoria": {
            "nombre": "Pantalones",
            "id": "pantalones"
        },
        "precio": 1000
    },
    {
        "id": "pantalon-04",
        "titulo": "Pantalón 04",
        "imagen": "./img/pantalones/04.jpg",
        "categoria": {
            "nombre": "Pantalones",
            "id": "pantalones"
        },
        "precio": 1000
    },
    {
        "id": "pantalon-05",
        "titulo": "Pantalón 05",
        "imagen": "./img/pantalones/05.jpg",
        "categoria": {
            "nombre": "Pantalones",
            "id": "pantalones"
        },
        "precio": 1000
    }
]


const container = document.querySelector(".product-container")
const li = document.querySelectorAll(".product-category")
const title = document.querySelector(".product-title")
const numberCart = document.querySelector("#numberCart")
const logo = document.querySelector(".logo-name")
const cart = document.querySelector("#Carrito")

const list = []

const display = (productList) =>{

    container.innerHTML=""

    productList.forEach(datos => {
        const element = `<div class="product-sale">
                     <img src="${datos.imagen}" class="product-img" alt="${datos.titulo}">
                        <div class="product-details">
                            <p class="product-name">${datos.titulo}</p>
                            <p class="product-price">$${datos.precio}</p>
                        <button class="product-add" id="${datos.id}">Agregar</button>
                        </div>
                    </div>`
        container.insertAdjacentHTML("beforeend", element)
    });

    const productAdd = document.querySelectorAll(".product-add")
    selectCart(productAdd)
    scrollTo(0,0)

}

li.forEach(res =>{
    res.addEventListener("click", (e) => {
        li.forEach(res => res.classList.remove("active"))
        e.currentTarget.classList.add("active")
        
        const value = e.currentTarget.id

        if(value === "Productos"){
            title.textContent = value
            return display(datos)
        } 
        const selectTitle = datos.find( res => res.categoria.id === value.toLowerCase())
        title.textContent = selectTitle.categoria.nombre

        const filtered = datos.filter(filter => filter.categoria.nombre === value)
        display(filtered)
     
    })
})


const selectCart = (productAdd) =>{
   productAdd.forEach(res => {
    res.addEventListener("click", (e) => {
       const value = e.currentTarget.id
       const travelList = list.some(res => res.id === value)
       
       if(travelList){
        const index = list.findIndex(res => res.id === value)
        list[index].cantidad++
       }else{
        const cart = datos.find(res => res.id === value)
        cart.cantidad = 1
        list.push(cart);
       }
       updateNumber(list)
    
    })
   })
}

const updateNumber = (list) => {
    let max = 0
    const cantidad = list.map(res => res.cantidad)
    for ( let cantidades of cantidad){
        max += cantidades
    }
    numberCart.textContent= max
}

display(datos)

logo.addEventListener("click" , () => {
    li.forEach(res => res.classList.remove("active"))
    li[0].classList.add("active")
    title.textContent="Productos"
    display(datos)
})




