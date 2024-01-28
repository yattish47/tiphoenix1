const body = document.querySelector("body"),
    nav = document.querySelector("nav"),
    sidebarOpen = document.querySelector(".sidebarOpen"),
    siderbarClose = document.querySelector(".siderbarClose");

    
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbarrr").style.backgroundColor = "black";
        document.getElementById("navbarrr").style.padding = "50px 10px";
        document.getElementById("navbarrr").style.fontSize = "25px";
        document.getElementById("navbarrr").style.transition = "all 0.8s ease";
    } else {
        document.getElementById("navbarrr").style.backgroundColor = "transparent";
        document.getElementById("navbarrr").style.padding = "60px 10px";
        document.getElementById("navbarrr").style.fontSize = "25px";
    }
}

