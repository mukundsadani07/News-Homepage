const btn = document.getElementById("sidebar-btn");
const menu = document.getElementById("sidebar-menu");

btn.addEventListener("click",()=>{
    console.log("Clicked the sidebar btn");
    menu.classList.toggle("flex");
    menu.classList.toggle("hidden");
    btn.classList.toggle("open");
})