let listLS = localStorage.getItem("cartList")
listLS = JSON.parse(listLS) 


const cartIncomplete = document.querySelector(".incomplete")
const cartContainer = document.querySelector(".cart-container")
const cartActions = document.querySelector(".cart-sell")
const cartComplete = document.querySelector(".complete")

const numberCart = document.querySelector("#numberCart")
const total = document.querySelector(".total")
const cartEmpty = document.querySelector(".cart-empty")
const cartBuy = document.querySelector(".cart-buy")

const displayCart = (listLS) => {

    if(!listLS || listLS.length === 0){
        cartIncomplete.classList.remove("hidden")
        cartActions.classList.add("hidden")
        cartContainer.classList.add("hidden") //Hardcode
        updateNumber(listLS)
        return   
    }

    cartContainer.innerHTML = ""

    cartActions.classList.remove("hidden")


    listLS.forEach(res => {
        const div = document.createElement("div")
        div.classList.add("cart-sale")
        div.innerHTML = `<img src="${res.imagen}" class="product-img cart-img" alt="Imagen a insertar">
                        <p class="cart-title">${res.titulo}</p>
                        <div class="cart-cant">
                            <small>Cantidad</small>
                            <p>${res.cantidad}</p>
                        </div>
                        <div class="cart-price">
                            <small>Precio</small>
                            <p>$${res.precio}</p>
                        </div>
                        <div class="cart-subtotal">
                            <small>Subtotal</small>
                            <p>$${res.cantidad * res.precio}</p>
                        </div>
                        <i class="fa-solid fa-trash" id="${res.id}"></i>`
       
        cartContainer.append(div)
    });
    
    updateNumber(listLS)
    updateTotal(listLS)

    const trash = document.querySelectorAll(".fa-trash")
    deleteElement(trash)
}


function updateNumber(list){
    let max = 0
    const cantidad = list.map(res => res.cantidad)

    if(cantidad === "") return numberCart.textContent = "0"
    
    for ( let cantidades of cantidad){
        max += cantidades
    }
    numberCart.textContent= max;
}

const updateTotal = (listLS) => {
    let maxCantidad = 0 

    const amount = listLS.map(res => res.cantidad * res.precio)
    
    for(let cant of amount){
        maxCantidad += cant
    }

    total.textContent = `$${maxCantidad}`

}

const deleteElement = (trash) => {
   trash.forEach(res => {
    const id = res.id
    res.addEventListener("click", () => {
        const index = listLS.findIndex( f => f.id === id)

        listLS.splice(index,1)
       
        displayCart(listLS)

        localStorage.setItem("cartList",JSON.stringify(listLS))
        
    })
   })
}

const complete = () => {
    cartActions.classList.add("hidden")
    cartContainer.classList.add("hidden")
    cartComplete.classList.remove("hidden")

    localStorage.removeItem("cartList")

    numberCart.textContent = 0
}

const empty = () =>{
    cartIncomplete.classList.remove("hidden")
    cartActions.classList.add("hidden")
    cartContainer.classList.add("hidden")
    cartComplete.classList.add("hidden")

    localStorage.removeItem("cartList")

    numberCart.textContent = 0
}

cartBuy.addEventListener("click", complete)

cartEmpty.addEventListener("click", empty)

displayCart(listLS)

