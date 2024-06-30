let toggleBtn = document.getElementById("toggle-btn");
let menu = document.querySelector(".menu");


toggleBtn.addEventListener("click", (e) => {
    toggleBtn.classList.toggle("fa-xmark")
    menu.classList.toggle("active")
});



