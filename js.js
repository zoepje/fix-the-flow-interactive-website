var legend = document.querySelector("legend");
var labels = document.querySelector("div.labels");
var main = document.querySelector("main");

function toggleFilter() {
  labels.classList.toggle("show");
}

function closeFilter(){
  if (labels.classList.contains("show")){
    labels.classList.remove("show");
  }
}

legend.addEventListener("click", toggleFilter);

main.addEventListener("click", closeFilter);

// Filter min-width: 750px //


