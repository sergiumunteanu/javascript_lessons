//---1---
const app = document.getElementById('app')
const color1 = document.getElementById('color1')
const color2 = document.getElementById('color2')
const generate = document.getElementById('generate')

let myRandomColor1 = "rgb(" + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + ")"
let myRandomColor2 = "rgb(" + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + ")"
app.style.background = `linear-gradient(45deg, ${myRandomColor1}, ${myRandomColor2})`

generate.addEventListener("click", () => {    
    myRandomColor1 = "rgb(" + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + ")"
    myRandomColor2 = "rgb(" + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + ")"

    app.style.background = `linear-gradient(45deg, ${myRandomColor1}, ${myRandomColor2})`

    color1.textContent = myRandomColor1
    color2.textContent = myRandomColor2
})

color1.addEventListener("click", () => {
    navigator.clipboard.writeText(color1.textContent)
    alert("Color copied " + color1.textContent);
})

color2.addEventListener("click", () => {
    navigator.clipboard.writeText(color2.textContent)
    alert("Color copied " + color2.textContent);
})

//---2---
// const title =  document.getElementById('title')

// console.log(title.firstElementChild)
// console.log(title.lastElementChild)

// console.log(title.parentElement.parentElement.parentElement)
// console.log(title.previousElementSibling)
// console.log(title.nextElementSibling)
// console.log(title.children)
// console.log(title.previousElementSibling.parentElement.nextElementSibling)

// //examples
// title.firstElementChild.style.color = "blue"
// title.lastElementChild.style.color = "yellow"

//---3--- burger menu
// const hamburger = document.getElementById("hamburger")
// const btn = document.getElementById("btn")
// const menu = document.getElementById("menu")

// menu.style.height = '0px'

// btn.addEventListener("click", () => {
//     if(menu.style.height == '0px'){
//         menu.style.height = '200px'
//         btn.classList.add("open-menu")
//     }
//     else{
//         menu.style.height = '0px'
//         btn.classList.remove("open-menu")
//     }
// })

// hamburger.addEventListener("mouseleave", () => {
//     menu.style.height = '0px'
//     btn.classList.remove("open-menu")
// })


