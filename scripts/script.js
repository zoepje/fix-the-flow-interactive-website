// Selecteren van elementen en ze een naam geven
const legend = document.querySelector("legend");
const labels = document.querySelector("div.labels");
const main = document.querySelector("main");

const filterbtn = document.querySelector("#openMenu");
const filter = document.querySelector("form.filter");


// Fuctie om de class "show" aan een lables te togglen(aan/uit)
function toggleFilter() {
  labels.classList.toggle("show");
}

// Functie om de class "show" te deleten van labels als hij er op zit
function closeFilter(){
  if (labels.classList.contains("show")){
    labels.classList.remove("show");
  }
}

// als je klikt op dit element dan voer deze funtie uit.
legend.addEventListener("click", toggleFilter);

main.addEventListener("click", closeFilter);

// Filter min-width: 750px //
// function openFilter(){
//   filter.classList.toggle("openFilter");
// }

// filterbtn.addEventListener("click", openFilter);

