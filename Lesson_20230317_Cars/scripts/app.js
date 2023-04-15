let arr = [1,2,3,4,5]
//let odd = arr.filter(item => item %2==1)
let odd = arr.filter(function(item){
    if(item %2==1) return item
})

let even = arr.filter(item => item % 2 == 0)
console.log(odd)
console.log(even)

let words = ["Abecedera", "Moldova", "Car", "Bar", "Jar", "United States of America"];
let longW = words.filter(w => w.length > 10)
let shortW = words.filter(w => w.length < 5)
console.log(longW)
console.log(shortW)

//suma elementelor unui tablou
let bobik = [1,2,3,4,5,6,7];
let sum = bobik.reduce((s,item) => s += item, 0)
console.log(sum)

//maxim
//...bobic transforma din tablou in sir de numere 1,2,3,4,5,6,7
console.log(Math.max(...bobik))

const cars = [
    {
        name: "Audi",
        model: "A5",
        category: "Sport",
        img: "https://cdn.motor1.com/images/mgl/lZO4g/s1/2020-audi-a5-sportback-s-line-facelift-shot-by-auditography.webp"
    },
    {
        name: "Ford",
        model: "Mustang",
        category: "Sport",
        img: "https://hips.hearstapps.com/hmg-prod/images/2022-ford-mustang-shelby-gt500-02-1636734552.jpg?crop=0.845xw:1.00xh;0.0657xw,0&resize=640:*"
    },
    {
        name: "Mercedes",
        model: "AMG GT",
        category: "Sport",
        img: "https://cdn.motor1.com/images/mgl/g4AXYP/s1/2023-mercedes-amg-gt-coupe-renderings.jpg"
    },
    {
        name: "BMW",
        model: "5 Series",
        category: "Sedan",
        img: "https://upload.wikimedia.org/wikipedia/commons/5/52/BMW_G30_FL_IMG_5351.jpg"
    },
    {
        name: "Skoda",
        model: "Superb",
        category: "Sedan",
        img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Skoda/Superb/7803/1646110587938/front-left-side-47.jpg"
    },
    {
        name: "Toyota",
        model: "Camry",
        category: "Sedan",
        img: "https://media.ed.edmunds-media.com/toyota/camry/2021/oem/2021_toyota_camry_sedan_xle_fq_oem_1_1280.jpg"
    },
    {
        name: "Porsche",
        model: "Cayenne",
        category: "SUV",
        img: "https://drivehub.md/images/detailed/629/acd536417df6d26ef3295bfec6a1fc10.jpg"
    },
    {
        name: "Dacia",
        model: "Duster",
        category: "SUV",
        img: "http://www.military-today.com/trucks/dacia_duster.jpg"
    },
    {
        name: "Mercedes-Benz",
        model: "G Klasse",
        category: "SUV",
        img: "https://media0.faz.net/ppmedia/aktuell/technik-motor/392790394/1.5592508/default-retina/der-urige-g-erfreut-sich-einer.jpg"
    }
]

const categoryHtml = document.getElementById("category")
const carsHtml = document.getElementById("cars")

function showCars(cars)
{
    carsHtml.innerHTML = ""
    cars.forEach(car => {
        carsHtml.innerHTML += `
            <div class='car'>
                <img src='${car.img}'>
                <div class='data'>
                    <h1>${car.name} ${car.model}</h1>
                    <p>${car.category}</p>
                </div>
            </div>
        `
    })
}

categoryHtml.addEventListener("change", () => {

    if(categoryHtml.value == "all"){
        showCars(cars)
    }else{

        let selectedCars = cars.filter(car => car.category.toLowerCase() == categoryHtml.value.toLowerCase())
        showCars(selectedCars);
    }
})

showCars(cars)