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
const closeBtn = document.querySelectorAll(".close");

const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");

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

// Modeles regex
const regName =
  /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/;
const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regBirthdate =
  /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;

firstName.addEventListener("keyup", function (ev) {
  if (
    ev.target.value.length == 0 ||
    (ev.target.value.length <= 2 && regName.test(ev.target.value))
  ) {
    ev.target.classList = "red";
    document.getElementById("firstNameErrorMsg").innerHTML =
      "le prénom est requis";
  } else if (regName.test(ev.target.value)) {
    ev.target.classList = "green";
    document.getElementById("firstNameErrorMsg").innerHTML = "";
  } else {
    ev.target.classList = "red";
    document.getElementById("firstNameErrorMsg").innerHTML =
      "Le champs ne doit pas comporter de chiffres ni de caractères spéciaux et vide";
  }
});

lastName.addEventListener("keyup", function (ev) {
  if (
    ev.target.value.length == 0 ||
    (ev.target.value.length <= 2 && regName.test(ev.target.value))
  ) {
    ev.target.classList = "red";
    document.getElementById("lastNameErrorMsg").innerHTML =
      "le nom est requis";
  } else if (regName.test(ev.target.value)) {
    ev.target.classList = "green";
    document.getElementById("lastNameErrorMsg").innerHTML = "";
  } else {
    ev.target.classList = "red";
    document.getElementById("lastNameErrorMsg").innerHTML =
      "Le champs ne doit pas comporter de chiffres ni de caractères spéciaux et vide";
  }
});


email.addEventListener("keyup", function (ev) {
  if (
    ev.target.value.length == 0 ||
    (ev.target.value.length <= 2 && regEmail.test(ev.target.value))
  ) {
    ev.target.classList = "red";
    document.getElementById("emailErrorMsg").innerHTML =
      "l'email est requis";
  } else if (regEmail.test(ev.target.value)) {
    ev.target.classList = "green";
    document.getElementById("emailErrorMsg").innerHTML = "";
  } else {
    ev.target.classList = "red";
    document.getElementById("emailErrorMsg").innerHTML =
    "Format de l'email non autorisé"
  }
});

birthdate.addEventListener("keyup", function (ev) {
  if (regBirthdate.test(ev.target.value)) {
    ev.target.classList = "green";
    document.getElementById("birthdateErrorMsg").style.opacity = "0";
    document.getElementById("birthdateErrorMsg").innerHTML = "";
  } else {
    ev.target.classList = "red";
    document.getElementById("birthdateErrorMsg").style.opacity = "1";
    document.getElementById("birthdateErrorMsg").innerHTML =
      "Format de la date non autorisée";
  }
});
