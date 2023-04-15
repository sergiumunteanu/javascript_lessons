const left = document.getElementById("left")
const right = document.getElementById("right")
const imgs = document.querySelectorAll("#slider img")
const pagination = document.querySelector("#pagination")

function hideImages(){
    imgs.forEach(img => {
        //img.style.display = 'none'
        img.style.opacity = 0
    })
}

hideImages()

//imgs[0].style.display = 'block'
imgs[0].style.opacity = 1


let counter = 0
left.addEventListener("click", () => {
    if(counter <= 0)
        counter = imgs.length - 1
    else    
        counter--

    hideImages()
    showSlide(counter)
})

right.addEventListener("click", () => {
    if(counter >= imgs.length - 1)
        counter = 0
    else
        counter++
    hideImages()
    showSlide(counter)
})

function showSlide(n){
    //imgs[n].style.display = 'block'
    hideImages()
    imgs[n].style.opacity = 1
}

setInterval(() => {
    // if(counter >= imgs.length - 1)
    //     counter = 0
    // else
    //     counter++
    // hideImages()
    // showSlide(counter)
}, 2000)

imgs.forEach((img, idx) => {
    pagination.innerHTML += `<button class='pages' onclick='showSlide(${idx})'>${idx}</button>`
})

Array.from(document.getElementsByClassName('pages')).forEach((page, idx) => {
    page.addEventListener("click", () => {
        hideImages()
        showSlide(idx)
    })
})

//slider impreuna cu un header