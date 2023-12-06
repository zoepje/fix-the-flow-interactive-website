var filter = document.querySelector("form.filter");
var labels = document.querySelector("div.labels");

function toggleFilter() {
  labels.classList.toggle("show");
}

filter.addEventListener("click", toggleFilter);




