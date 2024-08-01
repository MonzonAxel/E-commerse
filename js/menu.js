const openMenu = document.querySelector(".fa-bars")
const closeMenu = document.querySelector(".close-menu")
const aside = document.querySelector (".aside")
const main = document.querySelector(".main")

openMenu.addEventListener("click", () => {
    aside.classList.add("visible")
})

closeMenu.addEventListener("click", () => {
    aside.classList.remove("visible")
})

li.forEach(res =>{
    res.addEventListener("click", () => {
        aside.classList.remove("visible")
    })
})

logo.addEventListener("click", () =>{
    aside.classList.remove("visible")
})

main.addEventListener("click", () => {
    aside.classList.remove("visible")
})