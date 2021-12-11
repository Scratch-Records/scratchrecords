window.addEventListener("scroll",function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 0)
})

var hamburger = document.querySelector(".hamburger");
var Menudiv = document.querySelector(".Menu-div");

hamburger.addEventListener("click",responsive);
function responsive() {
    hamburger.classList.toggle("active");
    Menudiv.classList.toggle("active");
}

const link = document.querySelectorAll(".item");
link.forEach(n => n.addEventListener("click",closeMenu));
function closeMenu(){
    hamburger.classList.remove("active");
    Menudiv.classList.remove("active");
}



