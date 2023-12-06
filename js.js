var filter = document.querySelector("legend");
var labels = document.querySelector("div.labels");

function toggleFilter() {
  labels.classList.toggle("show");
}

filter.addEventListener("click", toggleFilter);




