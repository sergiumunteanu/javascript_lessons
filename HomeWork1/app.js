const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

const generateColorBtn = document.getElementById('generate-color');
const copyColorBtn = document.getElementById('copy-color');
const colorContainer = document.getElementById('color-container');
const colorCodeHtml = document.getElementById('color-code');
const chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

generateColorBtn.addEventListener("click", () => {
    let colorCode = "#";
    for(i=0;i<6;i++){
        colorCode += chars[Math.floor(Math.random() * 16)];
    }    
    colorContainer.style.backgroundColor = colorCode;
    colorCodeHtml.textContent = colorCode;
});

copyColorBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(colorCodeHtml.textContent);
    alert("Code was copied succesfuly")
});

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

