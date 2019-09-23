function get() {
  fetch("https://frontend19-ccb8.restdb.io/rest/superheroes", {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5d88747dfd86cb75861e25ff",
      "cache-control": "no-cahce"
    }
  })
    .then(e => e.json())
    .then(heroes => {
      heroes.forEach(hero => {
        const template = document.querySelector("template").content;
        const copy = template.cloneNode(true);
        copy.querySelector("h1").textContent = hero.name;
        copy.querySelector("h2").textContent = hero.realname;
        copy.querySelector("p").textContent = hero.powers;
        document.querySelector(".app").appendChild(copy);
      });
    });
}

get();
