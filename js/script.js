let datos = [];

const container = document.querySelector(".product-container")
const li = document.querySelectorAll(".product-category")
const title = document.querySelector(".product-title")
const numberCart = document.querySelector("#numberCart")
const logo = document.querySelector(".logo-name")
const cart = document.querySelector("#Carrito")

const init = () => {   
    fetch("./products.json")
    .then(response => response.json())
    .then(data => {
        datos = data;
        display(datos)
    })
}


let list

let listLS = localStorage.getItem("cartList")

if(listLS && listLS.length >= 1){   
    list = JSON.parse(listLS)
    updateNumber(list)
}else{
    list = []
}

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
       localStorage.setItem("cartList", JSON.stringify(list))
    
    })
   })
}

function updateNumber(list){
    let max = 0
    const cantidad = list.map(res => res.cantidad)
    for ( let cantidades of cantidad){
        max += cantidades
    }
    numberCart.textContent= max
}

logo.addEventListener("click" , () => {
    li.forEach(res => res.classList.remove("active"))
    li[0].classList.add("active")
    title.textContent="Productos"
    display(datos)
})


init()

