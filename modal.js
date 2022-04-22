function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal
function closeModal() {
  modalbg.style.display = "none";
}

const regNamePattern = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/;

const input1 = document.getElementsByClassName('.text-control')

const name1 = document.querySelector('#firstName')

name1.addEventListener('keyup', function(ev){
  console.log(ev.target);
  if (regNamePattern.test(ev.target.value)) {  
    ev.target.classList = "green"
    document.getElementById('firstNameErrorMsg').style.opacity = '0' 
    document.getElementById("firstNameErrorMsg").innerHTML = "";
  } else {
    ev.target.classList = "red"
    document.getElementById('firstNameErrorMsg').style.opacity = '1'
    document.getElementById("firstNameErrorMsg").innerHTML =
"Le prénom ne doit pas comporter de chiffres ni de caractères spéciaux";
  }
})







