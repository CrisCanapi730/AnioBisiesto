import esBisiesto from "./anioBisiesto";

const yearInput = document.querySelector("#year-input");
const form = document.querySelector("#bisiesto-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const year = Number.parseInt(yearInput.value);

  if (esBisiesto(year)) {
    div.innerHTML = "<p>El año " + year + " es bisiesto.</p>";
  } else {
    div.innerHTML = "<p>El año " + year + " no es bisiesto.</p>";
  }
});
