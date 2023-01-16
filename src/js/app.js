import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");
  let url = `https://pokeapi.co/api/v2/pokemon?offset=20&limit=10`;

  function status(response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    }else {
      return Promise.reject(new Error(response.statusText));
    }
  }

  function toJSON(response) {
    return response.json();
  }

  fetch(url)
  .then(status)
  .then(toJSON)
  .then(data => {
    data.results.forEach(result => {
      let newLI = document.createElement("li");
      newLI.innerHTML = result.name;
      ul.appendChild(newLI)
  })
  })
});
