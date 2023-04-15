
const content = document.getElementById("content");

fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(response => {
      response.results.forEach(item => {
          content.innerHTML += `
          <div class='item'>
            <img src='${item.image}'>
            <div class='details'>
              <h1>${item.name}</h1>
              <p>${item.status} - ${item.species}</p>
              <div class='title'>
                Location:
              </div>
              <p>${item.location.name}</p>
              <div class='title'>
                Origin:
              </div>
              <p>${item.origin.name}</p>
            </div>            
          </div>`
      });    
  })