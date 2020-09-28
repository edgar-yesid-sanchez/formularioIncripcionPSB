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

/* Imagen perfil */
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
  /* ------------------------------------- */
  
  /* -----------Giro de la targeta-------- */
  const tarjeta = document.querySelector('#tarjeta');
  tarjeta.addEventListener('click',() => {
      tarjeta.classList.toggle('activeTarjeta')
  });
  const girara = document.querySelector('#giro');
  girara.addEventListener("click",function(){
    tarjeta.classList.toggle('activeTarjeta');
  });
/* -------------------------------------------- */


/* -------FormularioTargetaDinamico-------------*/
const   inputNombre = document.querySelector('#NombreInput'),
        textNombre = document.querySelector('#tarjeta .nombreCarnet')
      

const   inputCargo = document.querySelector('#CargoInput'),
        textCargo = document.querySelector('#tarjeta .cargo');

const   inputNumeroCedula = document.querySelector('#NumCedulaInput'),
        textoCedula = document.querySelector('#tarjeta .cedula');
        
const   inputDescripcion = document.querySelector('#DescripcionPersonaInput');


inputNombre.addEventListener('keyup',(e) =>{
    let valorInputName=(e.target.value);

    inputNombre.value = valorInputName
    //.replase(/\codigo/g,'cambio')expresion regular, lo que hace es cambiar un caracter que le mandemos por lo que le digamos buscar en https://regexr.com/ 
    .replace(/\d/g,'')
    .trim();
    textNombre.textContent = valorInputName
});

inputCargo.addEventListener('keyup',(e) =>{
    let valorInputCargo=(e.target.value);

    inputCargo.value = valorInputCargo
    //.replase(/\codigo/g,'cambio')expresion regular, lo que hace es cambiar un caracter que le mandemos por lo que le digamos buscar en https://regexr.com/ 
    .replace(/\d/g,'')
    .trim();
    textCargo.textContent = valorInputCargo
});

inputNumeroCedula.addEventListener('keyup',(e) =>{
    let valorInputCedula=(e.target.value);

    inputCargo.value = valorInputCedula
    //.replase(/\codigo/g,'cambio')expresion regular, lo que hace es cambiar un caracter que le mandemos por lo que le digamos buscar en https://regexr.com/ 
    .replace(/[a-z]\/g,'')
    .trim();
    textCargo.textContent = valorInputCedula
});

/* -----------------------------------------    */


/*-----------Colocasion Dinamica Fecha Vencimineto----------*/
const seleciontMes = document.querySelector('#selectMes');
const seleciontYear = document.querySelector('#selectYear');

for(let i=0;i<=12;i++){
    let opcion = document.createElement('option');
    opcion.value=i;
    opcion.innerText=i;
    seleciontMes.appendChild(opcion); 
}
const yearActual = new Date().getFullYear();
for(let i = yearActual; i<= (yearActual+8);i++){
    let opcion = document.createElement('option');
    opcion.value=i;
    opcion.innerText=i;
    seleciontYear.appendChild(opcion);
}
/*------------------------------------------------  */













































function desplazar(){
    p1.style.marginLeft = "-31.5%"
}