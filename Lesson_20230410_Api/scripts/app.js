
const content = document.getElementById("content");

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(items => {
      items.forEach(item => {
          content.innerHTML += `
          <div class='user'>
            <h1>${item.name}</h1>
            <h3>${item.username}</h3>
            <p>${item.email}</p>
            <p>${item.address.city}</p>
          </div>`
      });    
  })