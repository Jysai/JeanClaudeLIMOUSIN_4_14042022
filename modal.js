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

const BtnSubmit = document.getElementById("btn-submit");
const modalSucess = document.querySelector(".bground-sucess");

const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const tournament = document.querySelector("#tournament");
const checkBoxCgu = document.querySelector("#checkbox1");
const tournamentTown = document.getElementsByName("location");

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
const regTournament = /^\d+$/;

function validateFirstName() {
  const firstNameError = document.getElementById("firstNameErrorMsg");
  if (!firstName.value) {
    firstNameError.innerHTML = "Votre prénom est requis";
    firstNameError.style.display = "block";
    return false;
  } else if (firstName.value.trim().length < 2) {
    firstNameError.innerHTML = "Veuillez renseigner 2 caractères au minimumn";
    firstNameError.style.display = "block";
    return false;
  } else if (!regName.test(firstName.value)) {
    firstNameError.innerHTML =
      "Le champs ne doit pas comporter de chiffres ni de caractères spéciaux";
    firstNameError.style.display = "block";
    return false;
  } else {
    firstNameError.style.display = "none";
    return true;
  }
}

function validateLastName() {
  const lastNameError = document.getElementById("lastNameErrorMsg");
  if (!lastName.value) {
    lastNameError.innerHTML = "Votre nom est requis";
    lastNameError.style.display = "block";
    return false;
  } else if (lastName.value.trim().length < 2) {
    lastNameError.innerHTML = "Veuillez renseigner 2 caractères au minimumn";
    lastNameError.style.display = "block";
    return false;
  } else if (!regName.test(lastName.value)) {
    lastNameError.innerHTML =
      "Le champs ne doit pas comporter de chiffres ni de caractères spéciaux";
    lastNameError.style.display = "block";
    return false;
  } else {
    lastNameError.style.display = "none";
    return true;
  }
}

function validateEmail() {
  const emailErrorMsg = document.getElementById("emailErrorMsg");
  if (!email.value) {
    emailErrorMsg.innerHTML = "Votre email est requis";
    emailErrorMsg.style.display = "block";
    return false;
  } else if (email.value.trim().length < 2) {
    emailErrorMsg.innerHTML = "Veuillez renseigner 2 caractères au minimumn";
    emailErrorMsg.style.display = "block";
    return false;
  } else if (!regEmail.test(email.value)) {
    emailErrorMsg.innerHTML = "Format de l'email non autorisé";
    emailErrorMsg.style.display = "block";
    return false;
  } else {
    emailErrorMsg.style.display = "none";
    return true;
  }
}

function validateBirthday() {
  const birthdateErrorMsg = document.getElementById("birthdateErrorMsg");
  if (!birthdate.value) {
    birthdateErrorMsg.innerHTML =
      "Veuillez renseigner votre date d'anniversaire";
    birthdateErrorMsg.style.display = "block";
    return false;
  } else if (birthdate.value.trim().length >= 11) {
    birthdateErrorMsg.innerHTML = "Format de la date de naissance non autorisé";
    birthdateErrorMsg.style.display = "block";
    return false;
  } else {
    birthdateErrorMsg.style.display = "none";
    return true;
  }
}

function validateNumberTournament() {
  const tournamentNumberErrorMsg =
    document.getElementById("tournamentNumberErrorMsg");
  if (!tournament.value) {
    tournamentNumberErrorMsg.innerHTML =
      "Si vous avez participé à aucun tournoi, veuillez saisir 0";
    tournamentNumberErrorMsg.style.display = "block";
    return false;
  } else if (!regTournament.test(tournament.value)) {
    tournamentNumberErrorMsg.innerHTML = "Veuillez saisir un nombre";
    tournamentNumberErrorMsg.style.display = "block";
    return false;
  } else {
    tournamentNumberErrorMsg.style.display = "none";
    return true;
  }
}



function validateTownTournament() {
  const tournamentTownErrorMsg = document.getElementById(
    "tournamentTownErrorMsg"
  );
  const checkboxTown = Array.from(tournamentTown).filter(
    location => location.checked 
  )
  if (checkboxTown.length == 1) {
    tournamentTownErrorMsg.style.display = "none";
    return true;
  } else {
    tournamentTownErrorMsg.innerHTML =
      "Veuillez sélectionner une ville";
    tournamentTownErrorMsg.style.display = "block";
    return false;
  }
}



function validateCheckCGU() {
  const cguErrorMsg = document.getElementById("cguErrorMsg");
  if (!checkBoxCgu.checked) {
    cguErrorMsg.innerHTML = "Veuillez accepter les conditions générales";
    cguErrorMsg.style.display = "block";
    return false;
  } else {
    cguErrorMsg.style.display = "none";
    return true;
  }
}

BtnSubmit.addEventListener("click", function (ev) {
  ev.preventDefault();

  let validFirstname = validateFirstName();
  let validLastname = validateLastName();
  let validEmail = validateEmail();
  let validBirthday = validateBirthday();
  let validNumberTournament = validateNumberTournament();
  let validTownTournament = validateTownTournament();
  let validCheckCGU = validateCheckCGU();

  if (
    validFirstname &&
    validLastname &&
    validEmail &&
    validBirthday &&
    validNumberTournament &&
    validTownTournament &&
    validCheckCGU
  ) {
    modalbg.style.display = "none";
    modalSucess.style.display = "block";
    formReset.reset();
  }
});
