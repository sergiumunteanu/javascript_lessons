const sizeFilter = document.getElementById("size")
const sortFilter = document.getElementById("sort")
const productsDiv = document.getElementById("products")
const cartBtn = document.getElementById("cart-btn")
const cart = document.getElementById("cart")
const resetBtn = document.getElementById("reset")

const banane = [
    {
        id: 1,
        name: "Banane Mici",
        image: "https://cdnprod.mafretailproxy.com/sys-master-root/hac/h42/46909492199454/1700Wx1700H_71411_main.jpg",
        price: 30.60,
        category: "mici"
    },
    {
        id: 2,
        name: "Banane Mari",
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bunch-of-bananas-67e91d5.jpg?quality=90&resize=440,400",
        price: 27.50,
        category: "mari"
    },
    {
        id: 3,
        name: "Banane Rosii",
        image: "https://www.vrisham.com/wp-content/uploads/2022/08/red-banana-001.jpg",
        price: 78.23,
        category: "mari"
    }
]

function showProducts(array){
    productsDiv.innerHTML = ""
    array.forEach(item => {
        productsDiv.innerHTML += `
            <div class='product'>
                <img src='${item.image}'>
                <h1>${item.name}</h1>
                <p>${item.price}</p>
                <p>${item.category}</p>
                <button class='add-to-cart' onclick='addToCart(${item.id})'>Add</button>
            </div>
        `
    })

    let cartBtns = document.getElementsByClassName("add-to-cart")
    Array.from(cartBtns).forEach(btn => {
    btn.addEventListener("click", () => {

    })
})
}

showProducts(banane)

sizeFilter.addEventListener("change", () => {
    let newArray = banane.filter(b => b.category == sizeFilter.value)
    showProducts(newArray)
})

sortFilter.addEventListener("change", () => {
    let newarr = banane
    if(sortFilter.value == "ASC"){
        newarr.sort((a,b) => a.price - b.price)
    }else if(sortFilter.value == "DESC"){
        newarr.sort((a,b) => b.price - a.price)
    }else{
    //    let newarr = banane
    }

    showProducts(newarr);
})

resetBtn.addEventListener("click", () => {
    showProducts(banane)
})

cartBtn.addEventListener("click", () => {
    if(cart.style.right == "-1000px"){
        cart.style.right = "10px"
    }else{
        cart.style.right = "-1000px"
    }
})

let cartProducts = []
function addToCart(id)
{
    if(cartProducts.filter(b => b.id == id).length == 0){
        cartProducts.push(banane.filter(b => b.id == id)[0])
    }    
    
    cart.style.right = "10px"

    setTimeout(() => {
        cart.style.right = "-1000px"
    }, 8000)

    cart.innerHTML = ""

    cartProducts.forEach(item => {
        cart.innerHTML += `
            <div>
                <img src='${item.image}'>
                <h1>${item.name}</h1>
                <p>${item.price}</p>
                <button onclick='deleteFromCart(${item.id})'>X</button>
            </div>
        `
    })
}

function deleteFromCart(id)
{
    cartProducts = cartProducts.filter(b => b.id != id)

    cart.innerHTML = ""

    cartProducts.forEach(item => {
        cart.innerHTML += `
            <div>
                <img src='${item.image}'>
                <h1>${item.name}</h1>
                <p>${item.price}</p>
                <button onclick='deleteFromCart(${item.id})'>X</button>
            </div>
        `
    })
}