var filterbtn = document.querySelector("legend");
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

filterbtn.addEventListener("click", toggleFilter);

main.addEventListener("click", closeFilter);




