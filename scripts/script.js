const legend = document.querySelector("legend");
const labels = document.querySelector("div.labels");
const main = document.querySelector("main");

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


