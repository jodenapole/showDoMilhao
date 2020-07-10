const openModal = document.querySelector(".bottom .options span")
const modal = document.getElementById("modal")
const closeModal = document.querySelector("#modal .card img")

openModal.addEventListener("click", event => {
    modal.style.display = "block"
})

closeModal.addEventListener("click", event => {
    modal.style.display = "none"
})