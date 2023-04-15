const countries = [
    {
        name: "Algeria",
        continent: "Africa",
        img: "http://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/255px-Flag_of_Algeria.svg.png"
    },
    {
        name: "Egipt",
        continent: "Africa",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/255px-Flag_of_Egypt.svg.png"
    },
    {
        name: "Libia",
        continent: "Africa",
        img: "https://cdn.britannica.com/37/3037-004-1C8F9958/Flag-Libya.jpg"
    },
    {
        name: "China",
        continent: "Asia",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/255px-Flag_of_the_People%27s_Republic_of_China.svg.png"
    },
    {
        name: "Japonia",
        continent: "Asia",
        img: "https://www.shutterstock.com/image-photo/japan-flag-on-towel-surface-260nw-2154875475.jpg"
    },
    {
        name: "India",
        continent: "Asia",
        img: "https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
    },
    {
        name: "Moldova",
        continent: "Europe",
        img: "https://cdn.britannica.com/10/6210-004-F4DE7D8D/Flag-Moldova.jpg"
    },
    {
        name: "Romania",
        continent: "Europe",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/1200px-Flag_of_Romania.svg.png"
    },
    {
        name: "Germania",
        continent: "Europe",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png"
    },
    {
        name: "Spania",
        continent: "Europe",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png"
    }
];

const continentFilter = document.getElementById("continent-filter");
const countryNameFilter = document.getElementById("country-name-filter");
const countriesListHtml = document.getElementById("countries-list");

function showCountries(countries_list)
{
    countriesListHtml.innerHTML = "";
    countries_list.forEach(item => {
        countriesListHtml.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.continent}</td>
                <td><img src='${item.img}'></td>
            </tr>
        `
    });
}

function filterCountries(countriesList)
{
    let filteredCountries = [];
    
    if(countryNameFilter.value != ""){
        //filteredCountries = countriesList.filter(item => item.name.toLowerCase() == countryNameFilter.value.toLowerCase())
        filteredCountries = countriesList.filter(item => item.name.toLowerCase().includes(countryNameFilter.value.toLowerCase()))
    }

    console.log(filteredCountries);
    console.log(countriesList);

    if(continentFilter.value.toLowerCase() == "all"){
        showCountries(countryNameFilter.value != "" ? filteredCountries : countriesList);
    }else{
        if(countryNameFilter.value != "")
            filteredCountries = filteredCountries.filter(item => item.continent.toLowerCase() == continentFilter.value.toLowerCase());
        else
            filteredCountries = countriesList.filter(item => item.continent.toLowerCase() == continentFilter.value.toLowerCase())

        showCountries(filteredCountries);
    }

}

continentFilter.addEventListener("change", () => {
    filterCountries(countries);
});

countryNameFilter.addEventListener("keyup", () => {
    filterCountries(countries);
});

showCountries(countries);