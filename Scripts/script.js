const slidePage = document.querySelector(".slidepage");
const firtNextBtn = document.querySelector(".nextBtn");

const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");

const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");

const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");

const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .chek");
const bullet = document.querySelectorAll(".step .bullet");

let max = 4;
let current = 1;

function d1(){
    alert("funciona");
}
function validar(){
    var as = document.getElementsById('nombre').value;
    
    var numCel = document.getElementsByName("numCel").value;
    var email = document.getElementsByName("email").value;
    var empresa = document.getElementsByName("empresa").value;
    alert(as);
    if(as === ""){
        alert("el campo nombre es requerido");
    }
};

/* -------------NEXT---------------- */
firtNextBtn.addEventListener("click",function(){
    slidePage.style.marginLeft = "-1233PX"
    bullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current +=1;
});

nextBtnSec.addEventListener("click",function(){
    slidePage.style.marginLeft = "-2640px"
    bullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current +=1;
});

nextBtnThird.addEventListener("click",function(){
    slidePage.style.marginLeft = "-4360px"
    bullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current +=1;
});

submitBtn.addEventListener("click",function(){
    bullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current +=1;
    setTimeout(function(){
        alert("Bienveniado a Parquesoft");
        location.reload();
    }, 800);
});

/* ---------------PREV------------------ */
prevBtnSec.addEventListener("click",function(){
    slidePage.style.marginLeft = "200px"
    bullet[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    current -=1;
});

prevBtnThird.addEventListener("click",function(){
    slidePage.style.marginLeft = "-1233px"
    bullet[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    current -=1;
});

prevBtnFourth.addEventListener("click",function(){
    slidePage.style.marginLeft = "-2640px"
    bullet[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    current -=1;
});


function mostrar(){
    var archivo = document.getElementById("file").files[0];
    var reader = new FileReader();
    if (file) {
      reader.readAsDataURL(archivo );
      reader.onloadend = function () {
        document.getElementById("img").src = reader.result;
      }
    }
  }



















































function desplazar(){
    p1.style.marginLeft = "-31.5%"
}