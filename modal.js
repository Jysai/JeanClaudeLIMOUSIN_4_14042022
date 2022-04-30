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
const closeBtnSucess = document.querySelectorAll(".close-sucess");
const formReset = document.querySelector(".reserve");
console.log(formReset);

const BtnSubmit = document.getElementById("btn-submit");
const modalSucess = document.querySelector(".bground-sucess");

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

// close modal event
closeBtnSucess.forEach((btn) =>
  btn.addEventListener("click", closeModalSucess)
);

// close modal
function closeModalSucess() {
  modalSucess.style.display = "none";
}

// Modeles regex
const regName =
  /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/;
const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

birthdate.addEventListener("keyup", function (ev) {
  // if (regBirthdate.test(ev.target.value)) {
  //   ev.target.classList = "green";
  //   document.getElementById("birthdateErrorMsg").innerHTML = "";
  // } else {
  //   ev.target.classList = "red";
  //   document.getElementById("birthdateErrorMsg").innerHTML =
  //     "Format de la date non autorisée";
  // }
});

function firstNameRegex() {
  const firstNameError = document.getElementById("firstNameErrorMsg");
  if (!firstName.value) {
    firstNameError.innerHTML = "Votre prénom est requis";
    firstNameError.style.display = "block"
    return false;
  } else if (firstName.value.trim().length < 2) {
    firstNameError.innerHTML = "Veuillez renseigner 2 caractères au minimumn";
    firstNameError.style.display = "block"
    return false;
  } else if (!regName.test(firstName.value)) {
    firstNameError.innerHTML =
      "Le champs ne doit pas comporter de chiffres ni de caractères spéciaux";
    firstNameError.style.display = "block"
    return false;
  } else {
    firstNameError.style.display = "none"
    return true;
  }
}

function lastNameRegex() {
  const lastNameError = document.getElementById("lastNameErrorMsg");
  if (!lastName.value) {
    lastNameError.innerHTML = "Votre nom est requis";
    lastNameError.style.display = "block"
    return false;
  } else if (lastName.value.trim().length < 2) {
    lastNameError.innerHTML = "Veuillez renseigner 2 caractères au minimumn";
    lastNameError.style.display = "block"
    return false;
  } else if (!regName.test(lastName.value)) {
    lastNameError.innerHTML =
      "Le champs ne doit pas comporter de chiffres ni de caractères spéciaux";
    lastNameError.style.display = "block"  
    return false;
  } else {
    lastNameError.style.display = "none"
    return true;
  }
}

function emailRegex() {
  const emailErrorMsg = document.getElementById("emailErrorMsg");
  if (!email.value) {
    emailErrorMsg.innerHTML = "Votre email est requis";
    emailErrorMsg.style.display = "block"
    return false;
  } else if (email.value.trim().length < 2) {
    emailErrorMsg.innerHTML = "Veuillez renseigner 2 caractères au minimumn";
    emailErrorMsg.style.display = "block"
    return false;
  } else if (!regEmail.test(email.value)) {
    emailErrorMsg.innerHTML =
      "Format de l'email non autorisé";
      emailErrorMsg.style.display = "block"  
    return false;
  } else {
    emailErrorMsg.style.display = "none"
    return true;
  }
}


BtnSubmit.addEventListener("click", function (ev) {
  ev.preventDefault();

  let validFirstname = firstNameRegex();
	let validLastname = lastNameRegex();
  let validEmail = emailRegex()

  if (validFirstname &&
    validLastname && validEmail) {
    modalbg.style.display = "none";
    modalSucess.style.display = "block";
    formReset.reset();
  }
});


