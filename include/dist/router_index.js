import createRouter from "./router.js";

const container = document.querySelector("main")
const pages = {
 home: () => container.innerText = "home page",
 melon: () => container.innerText = "melon page",
 raindrop: () => container.innerText = "raindrop page",
}

const router = createRouter();

router.addRoute("#/", pages.home)
     .addRoute("#/melon", pages.melon)
     .addRoute("#/raindrop", pages.raindrop)
     .start();

window.addEventListener("click", event => {
  if(event.target.matches("[data-navigate]")) {
    router.navigate(event.target.dataset.navigate);
  }
});